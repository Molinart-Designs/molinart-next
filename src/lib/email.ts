import nodemailer, { type Transporter } from "nodemailer";

type LeadEmailPayload = {
  subject: string;
  html: string;
};

let cachedTransporter: Transporter | null = null;

function parseSmtpSecure(value: string | undefined): boolean {
  return value === "true" || value === "1";
}

export function isSmtpConfigured(): boolean {
  return Boolean(
    process.env.SMTP_HOST &&
      process.env.SMTP_PORT &&
      process.env.SMTP_USER &&
      process.env.SMTP_APP_PASSWORD &&
      process.env.CONTACT_TO_EMAIL,
  );
}

function getTransporter(): Transporter | null {
  if (!isSmtpConfigured()) {
    return null;
  }

  if (!cachedTransporter) {
    cachedTransporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT),
      secure: parseSmtpSecure(process.env.SMTP_SECURE),
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_APP_PASSWORD,
      },
    });
  }

  return cachedTransporter;
}

export async function sendLeadNotificationEmail(
  payload: LeadEmailPayload,
): Promise<{ ok: true } | { ok: false; error: string }> {
  const transporter = getTransporter();
  const to = process.env.CONTACT_TO_EMAIL;
  const from = process.env.SMTP_USER;

  if (!transporter || !to || !from) {
    return { ok: false, error: "SMTP is not configured" };
  }

  try {
    await transporter.sendMail({
      from: `Molinart <${from}>`,
      to,
      subject: payload.subject,
      html: payload.html,
    });

    return { ok: true };
  } catch (err) {
    const message = err instanceof Error ? err.message : "Unknown email error";
    return { ok: false, error: message };
  }
}

export function buildContactEmailHtml(input: {
  name: string;
  email: string;
  phone?: string;
  message: string;
  source: string;
}): string {
  return `
    <h2>New lead — Molinart</h2>
    <p><strong>Source:</strong> ${escapeHtml(input.source)}</p>
    <p><strong>Name:</strong> ${escapeHtml(input.name)}</p>
    <p><strong>Email:</strong> ${escapeHtml(input.email)}</p>
    <p><strong>Phone:</strong> ${escapeHtml(input.phone ?? "—")}</p>
    <p><strong>Message:</strong></p>
    <pre style="white-space:pre-wrap;font-family:sans-serif;">${escapeHtml(input.message)}</pre>
  `;
}

export function buildChatLeadEmailHtml(input: {
  sessionId: string;
  visitorEmail?: string;
  userMessage: string;
  aiAnswer: string;
  locale: string;
}): string {
  return `
    <h2>Ask Emilio AI — hiring / lead signal</h2>
    <p><strong>Session:</strong> ${escapeHtml(input.sessionId)}</p>
    <p><strong>Locale:</strong> ${escapeHtml(input.locale)}</p>
    <p><strong>Visitor email:</strong> ${escapeHtml(input.visitorEmail ?? "—")}</p>
    <p><strong>User question:</strong></p>
    <pre style="white-space:pre-wrap;font-family:sans-serif;">${escapeHtml(input.userMessage)}</pre>
    <p><strong>AI answer:</strong></p>
    <pre style="white-space:pre-wrap;font-family:sans-serif;">${escapeHtml(input.aiAnswer)}</pre>
  `;
}

function escapeHtml(value: string): string {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}
