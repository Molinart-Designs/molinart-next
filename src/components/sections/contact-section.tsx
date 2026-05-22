"use client";

import { motion } from "framer-motion";

import { contactContent } from "@/content/contact";
import type { Locale } from "@/content/i18n";
import { SectionHeading } from "@/components/layout/section-heading";
import { SectionShell } from "@/components/layout/section-shell";
import { cn } from "@/lib/utils";

const inputClass =
  "w-full border border-white/15 bg-molinart-darker/80 px-4 py-3 text-white placeholder:text-white/40 focus:border-molinart-yellow focus:outline-none";

export function ContactSection({ locale }: { locale: Locale }) {
  const content = contactContent[locale];

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
          <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label htmlFor="contact-name" className="mb-2 block text-sm text-white">
                  {content.form.name} *
                </label>
                <input
                  id="contact-name"
                  name="name"
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
                className={cn(inputClass, "resize-none")}
                placeholder={content.form.message}
              />
            </div>
            <p className="text-sm text-molinart-muted">{content.form.spamNotice}</p>
            <button
              type="submit"
              disabled
              title={content.form.disabledTitle}
              className="border-2 border-molinart-yellow/50 px-8 py-3 font-heading text-sm tracking-wider text-molinart-yellow/70 uppercase cursor-not-allowed"
            >
              {content.form.submit}
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
