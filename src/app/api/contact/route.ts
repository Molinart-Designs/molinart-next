import { NextResponse } from "next/server";

import { contactRequestSchema } from "@/lib/api-schemas";
import { jsonError, jsonValidationError } from "@/lib/api-errors";
import {
  buildContactEmailHtml,
  isSmtpConfigured,
  sendLeadNotificationEmail,
} from "@/lib/email";
import { getSupabaseServerClient, isSupabaseConfigured } from "@/lib/supabase-server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const parsed = contactRequestSchema.safeParse(body);

    if (!parsed.success) {
      return jsonValidationError(parsed.error);
    }

    if (!isSupabaseConfigured()) {
      return jsonError("Database is not configured", 503);
    }

    if (!isSmtpConfigured()) {
      return jsonError("Email service is not configured", 503);
    }

    const supabase = getSupabaseServerClient();
    if (!supabase) {
      return jsonError("Database is not configured", 503);
    }

    const { name, email, phone, message } = parsed.data;

    const { error: insertError } = await supabase.from("contacts").insert({
      name,
      email,
      phone: phone ?? null,
      message,
      source: "contact_form",
    });

    if (insertError) {
      console.error("contact insert", insertError);
      return jsonError("Could not save contact submission", 500);
    }

    const emailResult = await sendLeadNotificationEmail({
      subject: `[Molinart] New contact form — ${name}`,
      html: buildContactEmailHtml({
        name,
        email,
        phone,
        message,
        source: "contact_form",
      }),
    });

    if (!emailResult.ok) {
      console.error("contact email failed", emailResult.error);
      return jsonError("Could not send notification email", 500);
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("contact api", error);
    return jsonError("Unexpected error processing contact", 500);
  }
}
