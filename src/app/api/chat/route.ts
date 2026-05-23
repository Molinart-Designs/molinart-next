import { google } from "@ai-sdk/google";
import { generateText } from "ai";
import { NextResponse } from "next/server";

import { buildSystemPrompt } from "@/content/ai-profile-context";
import { chatRequestSchema } from "@/lib/api-schemas";
import { jsonError, jsonValidationError, isGoogleAiConfigured } from "@/lib/api-errors";
import {
  buildChatLeadEmailHtml,
  isSmtpConfigured,
  sendLeadNotificationEmail,
} from "@/lib/email";
import { messageSignalsLeadIntent } from "@/lib/lead-intent";
import { getSupabaseServerClient, isSupabaseConfigured } from "@/lib/supabase-server";

const CHAT_MODEL_ID = "gemini-2.0-flash";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const parsed = chatRequestSchema.safeParse(body);

    if (!parsed.success) {
      return jsonValidationError(parsed.error);
    }

    if (!isGoogleAiConfigured()) {
      return jsonError("AI service is not configured", 503);
    }

    if (!isSupabaseConfigured()) {
      return jsonError("Database is not configured", 503);
    }

    const supabase = getSupabaseServerClient();
    if (!supabase) {
      return jsonError("Database is not configured", 503);
    }

    const { message, visitorEmail, locale } = parsed.data;
    let sessionId = parsed.data.sessionId;

    if (sessionId) {
      const { data: existingSession, error: sessionLookupError } = await supabase
        .from("chat_sessions")
        .select("id")
        .eq("id", sessionId)
        .maybeSingle();

      if (sessionLookupError) {
        console.error("chat session lookup", sessionLookupError);
        return jsonError("Could not load chat session", 500);
      }

      if (!existingSession) {
        sessionId = undefined;
      }
    }

    if (!sessionId) {
      const { data: newSession, error: sessionError } = await supabase
        .from("chat_sessions")
        .insert({
          visitor_email: visitorEmail ?? null,
          locale,
        })
        .select("id")
        .single();

      if (sessionError || !newSession) {
        console.error("chat session create", sessionError);
        return jsonError("Could not create chat session", 500);
      }

      sessionId = newSession.id;
    } else if (visitorEmail) {
      await supabase
        .from("chat_sessions")
        .update({ visitor_email: visitorEmail })
        .eq("id", sessionId);
    }

    if (!sessionId) {
      return jsonError("Could not resolve chat session", 500);
    }

    const { error: userMessageError } = await supabase.from("chat_messages").insert({
      session_id: sessionId,
      role: "user",
      content: message,
    });

    if (userMessageError) {
      console.error("chat user message", userMessageError);
      return jsonError("Could not save message", 500);
    }

    const { data: history, error: historyError } = await supabase
      .from("chat_messages")
      .select("role, content")
      .eq("session_id", sessionId)
      .order("created_at", { ascending: true })
      .limit(24);

    if (historyError) {
      console.error("chat history", historyError);
      return jsonError("Could not load conversation history", 500);
    }

    const messages = (history ?? [])
      .filter((row) => row.role === "user" || row.role === "assistant")
      .map((row) => ({
        role: row.role as "user" | "assistant",
        content: row.content,
      }));

    const { text: answer } = await generateText({
      model: google(CHAT_MODEL_ID),
      system: buildSystemPrompt(locale),
      messages,
    });

    const { error: assistantMessageError } = await supabase
      .from("chat_messages")
      .insert({
        session_id: sessionId,
        role: "assistant",
        content: answer,
        model: CHAT_MODEL_ID,
      });

    if (assistantMessageError) {
      console.error("chat assistant message", assistantMessageError);
      return jsonError("Could not save assistant response", 500);
    }

    if (messageSignalsLeadIntent(message)) {
      if (!isSmtpConfigured()) {
        return jsonError("Email service is not configured", 503);
      }

      const emailResult = await sendLeadNotificationEmail({
        subject: `[Molinart] Ask Emilio AI — lead signal (${locale})`,
        html: buildChatLeadEmailHtml({
          sessionId,
          visitorEmail,
          userMessage: message,
          aiAnswer: answer,
          locale,
        }),
      });

      if (!emailResult.ok) {
        console.error("chat lead email failed", emailResult.error);
        return jsonError("Could not send notification email", 500);
      }
    }

    return NextResponse.json({
      sessionId,
      answer,
    });
  } catch (error) {
    console.error("chat api", error);
    return jsonError("Unexpected error processing chat", 500);
  }
}
