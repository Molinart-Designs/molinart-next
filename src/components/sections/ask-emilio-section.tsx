"use client";

import { motion } from "framer-motion";
import { Bot, Sparkles } from "lucide-react";
import { useState } from "react";

import { askEmilioContent } from "@/content/ask-emilio";
import type { Locale } from "@/content/i18n";
import { SectionHeading } from "@/components/layout/section-heading";
import { SectionShell } from "@/components/layout/section-shell";
import { cn } from "@/lib/utils";

export function AskEmilioSection({ locale }: { locale: Locale }) {
  const content = askEmilioContent[locale];
  const [question, setQuestion] = useState("");

  return (
    <SectionShell id="ask-emilio" ariaLabelledBy="ask-emilio-heading">
      <SectionHeading
        id="ask-emilio-heading"
        accent={content.heading.accent}
        title={content.heading.title}
      />
      <p className="mb-8 max-w-2xl text-lg text-molinart-muted">{content.description}</p>

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
              onClick={() => setQuestion(q)}
              className="border border-white/15 px-3 py-2 text-left text-sm text-white/85 transition-colors hover:border-molinart-yellow hover:text-molinart-yellow"
            >
              {q}
            </button>
          ))}
        </div>

        <textarea
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          placeholder={content.placeholder}
          rows={4}
          className="mb-4 w-full resize-none border border-white/15 bg-molinart-dark p-4 text-white placeholder:text-white/40 focus:border-molinart-yellow focus:outline-none"
          aria-label={content.placeholder}
        />

        <button
          type="button"
          disabled
          title={content.disabledTitle}
          className={cn(
            "border-2 border-molinart-yellow/40 px-6 py-3 font-heading text-sm tracking-wider text-molinart-yellow/60 uppercase",
            "cursor-not-allowed",
          )}
        >
          {content.submit} — {content.badge}
        </button>
      </motion.div>
    </SectionShell>
  );
}
