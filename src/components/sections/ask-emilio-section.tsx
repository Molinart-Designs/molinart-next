"use client";

import { motion } from "framer-motion";
import { Bot, Loader2, Sparkles } from "lucide-react";
import { useRef, useState } from "react";

import { askEmilioContent } from "@/content/ask-emilio";
import type { Locale } from "@/content/i18n";
import { SectionHeading } from "@/components/layout/section-heading";
import { SectionShell } from "@/components/layout/section-shell";
import { AssistantMessageMarkdown } from "@/components/sections/assistant-message-markdown";
import { cn } from "@/lib/utils";

type ChatMessage = {
  id: string;
  role: "user" | "assistant";
  content: string;
};

export function AskEmilioSection({ locale }: { locale: Locale }) {
  const content = askEmilioContent[locale];
  const [question, setQuestion] = useState("");
  const [sessionId, setSessionId] = useState<string | null>(null);
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const threadRef = useRef<HTMLDivElement>(null);

  const scrollThreadToBottom = () => {
    requestAnimationFrame(() => {
      threadRef.current?.scrollTo({
        top: threadRef.current.scrollHeight,
        behavior: "smooth",
      });
    });
  };

  const sendMessage = async (text: string) => {
    const trimmed = text.trim();
    if (!trimmed || loading) {
      return;
    }

    setError(null);
    setLoading(true);
    setQuestion("");

    const userMessage: ChatMessage = {
      id: `user-${Date.now()}`,
      role: "user",
      content: trimmed,
    };
    setMessages((current) => [...current, userMessage]);
    scrollThreadToBottom();

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          message: trimmed,
          sessionId: sessionId ?? undefined,
          locale,
        }),
      });

      const data = (await response.json()) as {
        sessionId?: string;
        answer?: string;
        error?: string;
      };

      if (!response.ok) {
        const message =
          response.status === 503
            ? content.errorConfig
            : data.error ?? content.errorGeneric;
        setError(message);
        return;
      }

      if (data.sessionId) {
        setSessionId(data.sessionId);
      }

      const answer = data.answer?.trim() || content.emptyAnswer;
      setMessages((current) => [
        ...current,
        {
          id: `assistant-${Date.now()}`,
          role: "assistant",
          content: answer,
        },
      ]);
      scrollThreadToBottom();
    } catch {
      setError(content.errorGeneric);
    } finally {
      setLoading(false);
    }
  };

  return (
    <SectionShell id="ask-emilio" ariaLabelledBy="ask-emilio-heading">
      <SectionHeading
        id="ask-emilio-heading"
        accent={content.heading.accent}
        title={content.heading.title}
      />
      <div className="mb-8 max-w-2xl space-y-4">
        <p className="text-lg text-molinart-muted">{content.description}</p>
        <p className="text-sm leading-relaxed text-white/60">{content.secondaryNote}</p>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="border border-molinart-yellow/30 bg-linear-to-br from-molinart-surface to-molinart-darker p-6 md:p-10"
      >
        <div className="mb-6 flex flex-wrap items-center justify-between gap-4 border-b border-white/10 pb-6">
          <div className="flex items-center gap-3">
            <span className="flex size-11 items-center justify-center bg-molinart-yellow/15 text-molinart-yellow">
              <Bot className="size-5" aria-hidden />
            </span>
            <div>
              <h3 className="font-heading text-lg tracking-wide text-white uppercase">
                {content.assistantName}
              </h3>
              <p className="text-sm text-molinart-muted">{content.assistantHint}</p>
            </div>
          </div>
          <span className="inline-flex items-center gap-2 border border-molinart-yellow/40 px-3 py-1 text-xs tracking-wide text-molinart-yellow uppercase">
            <Sparkles className="size-3.5" aria-hidden />
            {content.badge}
          </span>
        </div>

        <div className="mb-6 flex flex-wrap gap-2">
          {content.suggestedQuestions.map((q) => (
            <button
              key={q}
              type="button"
              disabled={loading}
              onClick={() => {
                setQuestion(q);
                void sendMessage(q);
              }}
              className="border border-white/15 px-3 py-2 text-left text-sm text-white/85 transition-colors hover:border-molinart-yellow hover:text-molinart-yellow disabled:opacity-50"
            >
              {q}
            </button>
          ))}
        </div>

        {messages.length > 0 ? (
          <div
            ref={threadRef}
            className="mb-4 max-h-72 space-y-3 overflow-y-auto border border-white/10 bg-molinart-dark/60 p-4"
            aria-live="polite"
          >
            {messages.map((message) => (
              <div
                key={message.id}
                className={cn(
                  "text-sm leading-relaxed",
                  message.role === "user" ? "text-white/90" : "text-white/75",
                )}
              >
                <span
                  className={cn(
                    "mb-1 block font-heading text-xs tracking-wide uppercase",
                    message.role === "user"
                      ? "text-molinart-yellow"
                      : "text-white/50",
                  )}
                >
                  {message.role === "user"
                    ? content.youLabel
                    : content.assistantLabel}
                </span>
                {message.role === "assistant" ? (
                  <AssistantMessageMarkdown content={message.content} locale={locale} />
                ) : (
                  <p className="whitespace-pre-wrap">{message.content}</p>
                )}
              </div>
            ))}
            {loading ? (
              <p className="flex items-center gap-2 text-sm text-molinart-muted">
                <Loader2 className="size-4 animate-spin" aria-hidden />
                {content.thinking}
              </p>
            ) : null}
          </div>
        ) : null}

        {error ? (
          <p className="mb-4 text-sm text-red-300" role="alert">
            {error}
          </p>
        ) : null}

        <textarea
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter" && !e.shiftKey) {
              e.preventDefault();
              void sendMessage(question);
            }
          }}
          placeholder={content.placeholder}
          rows={4}
          disabled={loading}
          className="mb-4 w-full resize-none border border-white/15 bg-molinart-dark p-4 text-white placeholder:text-white/40 focus:border-molinart-yellow focus:outline-none disabled:opacity-60"
          aria-label={content.placeholder}
        />

        <button
          type="button"
          disabled={loading || !question.trim()}
          onClick={() => void sendMessage(question)}
          className={cn(
            "inline-flex items-center gap-2 border-2 border-molinart-yellow px-6 py-3 font-heading text-sm tracking-wider text-molinart-yellow uppercase transition-colors",
            "hover:bg-molinart-yellow hover:text-molinart-dark disabled:cursor-not-allowed disabled:opacity-50",
          )}
        >
          {loading ? (
            <Loader2 className="size-4 animate-spin" aria-hidden />
          ) : null}
          {loading ? content.thinking : content.submit}
        </button>
      </motion.div>
    </SectionShell>
  );
}
