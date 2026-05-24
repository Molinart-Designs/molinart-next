"use client";

import { motion } from "framer-motion";

import { summaryContent } from "@/content/summary";
import type { Locale } from "@/content/i18n";
import { SectionHeading } from "@/components/layout/section-heading";
import { SectionShell } from "@/components/layout/section-shell";

export function SummarySection({ locale }: { locale: Locale }) {
  const content = summaryContent[locale];
  const years = new Date().getFullYear() - content.experienceYearsStart;

  return (
    <SectionShell
      id="about"
      backgroundImage="/images/skills-bg.jpg"
      ariaLabelledBy="about-heading"
    >
      <SectionHeading
        id="about-heading"
        accent={content.heading.accent}
        title={content.heading.title}
        stat={{ value: `${years}+`, label: content.experienceYearsLabel }}
      />
      <div className="mb-10 max-w-3xl space-y-5 text-lg leading-relaxed text-white/85">
        <p>{content.intro}</p>
        <p>{content.detail}</p>
      </div>

      <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
        <div className="grid gap-6 sm:grid-cols-2">
          {content.pillars.map((pillar, index) => (
            <motion.article
              key={pillar.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ delay: index * 0.08, duration: 0.5 }}
              className="border border-white/10 bg-molinart-darker/60 p-5"
            >
              <h3 className="mb-3 font-heading text-lg tracking-wide text-molinart-yellow uppercase">
                {pillar.title}
              </h3>
              <p className="text-sm leading-relaxed text-white/80">
                {pillar.description}
              </p>
            </motion.article>
          ))}
        </div>

        <div>
          <h3 className="mb-6 font-heading text-lg tracking-wide text-molinart-yellow uppercase">
            {content.coreStrengthsTitle}
          </h3>
          <ul className="space-y-4">
            {content.coreStrengths.map((strength) => (
              <li
                key={strength}
                className="border-l-2 border-molinart-yellow bg-molinart-darker/40 py-3 pl-4 text-sm leading-relaxed text-white/85"
              >
                {strength}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </SectionShell>
  );
}
