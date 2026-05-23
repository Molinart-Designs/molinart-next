"use client";

import { motion } from "framer-motion";
import { Loader2 } from "lucide-react";
import { useState, type FormEvent } from "react";

import { contactContent } from "@/content/contact";
import type { Locale } from "@/content/i18n";
import { SectionHeading } from "@/components/layout/section-heading";
import { SectionShell } from "@/components/layout/section-shell";
import { cn } from "@/lib/utils";

const inputClass =
  "w-full border border-white/15 bg-molinart-darker/80 px-4 py-3 text-white placeholder:text-white/40 focus:border-molinart-yellow focus:outline-none disabled:opacity-60";

type FormStatus = "idle" | "loading" | "success" | "error";

export function ContactSection({ locale }: { locale: Locale }) {
  const content = contactContent[locale];
  const [status, setStatus] = useState<FormStatus>("idle");
  const [feedback, setFeedback] = useState<string | null>(null);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);

    const name = String(formData.get("name") ?? "").trim();
    const email = String(formData.get("email") ?? "").trim();
    const phone = String(formData.get("phone") ?? "").trim();
    const message = String(formData.get("message") ?? "").trim();

    if (!name || !email || !message) {
      setStatus("error");
      setFeedback(content.form.validationRequired);
      return;
    }

    setStatus("loading");
    setFeedback(null);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          email,
          phone: phone || undefined,
          message,
        }),
      });

      const data = (await response.json()) as { success?: boolean; error?: string };

      if (!response.ok) {
        setStatus("error");
        setFeedback(
          response.status === 503
            ? content.form.errorConfig
            : data.error ?? content.form.errorGeneric,
        );
        return;
      }

      setStatus("success");
      setFeedback(content.form.success);
      form.reset();
    } catch {
      setStatus("error");
      setFeedback(content.form.errorGeneric);
    }
  };

  return (
    <SectionShell
      id="contact"
      backgroundImage="/images/contact-bg.jpg"
      ariaLabelledBy="contact-heading"
    >
      <SectionHeading
        id="contact-heading"
        accent={content.heading.accent}
        title={content.heading.title}
      />

      <div className="grid gap-10 lg:grid-cols-2">
        <div>
          <p className="mb-8 text-lg text-molinart-muted">{content.description}</p>
          <form className="space-y-5" onSubmit={handleSubmit}>
            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label htmlFor="contact-name" className="mb-2 block text-sm text-white">
                  {content.form.name} *
                </label>
                <input
                  id="contact-name"
                  name="name"
                  required
                  disabled={status === "loading"}
                  className={inputClass}
                  placeholder={content.form.name}
                  autoComplete="name"
                />
              </div>
              <div>
                <label htmlFor="contact-phone" className="mb-2 block text-sm text-white">
                  {content.form.phone}
                </label>
                <input
                  id="contact-phone"
                  name="phone"
                  type="tel"
                  disabled={status === "loading"}
                  className={inputClass}
                  placeholder={content.form.phone}
                  autoComplete="tel"
                />
              </div>
            </div>
            <div>
              <label htmlFor="contact-email" className="mb-2 block text-sm text-white">
                {content.form.email} *
              </label>
              <input
                id="contact-email"
                name="email"
                type="email"
                required
                disabled={status === "loading"}
                className={inputClass}
                placeholder={content.form.email}
                autoComplete="email"
              />
            </div>
            <div>
              <label htmlFor="contact-message" className="mb-2 block text-sm text-white">
                {content.form.message} *
              </label>
              <textarea
                id="contact-message"
                name="message"
                rows={5}
                required
                disabled={status === "loading"}
                className={cn(inputClass, "resize-none")}
                placeholder={content.form.message}
              />
            </div>
            <p className="text-sm text-molinart-muted">{content.form.spamNotice}</p>

            {feedback ? (
              <p
                className={cn(
                  "text-sm",
                  status === "success" ? "text-molinart-yellow" : "text-red-300",
                )}
                role="status"
              >
                {feedback}
              </p>
            ) : null}

            <button
              type="submit"
              disabled={status === "loading"}
              className={cn(
                "inline-flex items-center gap-2 border-2 border-molinart-yellow px-8 py-3 font-heading text-sm tracking-wider text-molinart-yellow uppercase transition-colors",
                "hover:bg-molinart-yellow hover:text-molinart-dark disabled:cursor-not-allowed disabled:opacity-50",
              )}
            >
              {status === "loading" ? (
                <Loader2 className="size-4 animate-spin" aria-hidden />
              ) : null}
              {status === "loading" ? content.form.sending : content.form.submit}
            </button>
          </form>
        </div>

        <motion.aside
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col justify-center border border-white/10 bg-molinart-darker/70 p-8"
        >
          <h3 className="mb-2 font-heading text-3xl tracking-wide text-molinart-yellow uppercase">
            {content.sidebar.title}
          </h3>
          <p className="text-lg text-white/85">{content.sidebar.subtitle}</p>
        </motion.aside>
      </div>
    </SectionShell>
  );
}
