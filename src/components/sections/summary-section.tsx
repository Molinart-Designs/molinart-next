"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

import { skillBars, summaryContent } from "@/content/summary";
import type { Locale } from "@/content/i18n";
import { SectionHeading } from "@/components/layout/section-heading";
import { SectionShell } from "@/components/layout/section-shell";

function ProgressBar({
  name,
  value,
  inView,
}: {
  name: string;
  value: number;
  inView: boolean;
}) {
  return (
    <li className="space-y-2">
      <div className="flex justify-between text-sm">
        <span className="font-medium text-white">{name}</span>
        <span className="text-molinart-yellow">{value}%</span>
      </div>
      <div className="h-1.5 bg-white/10">
        <motion.div
          className="h-full bg-molinart-yellow"
          initial={{ width: 0 }}
          animate={{ width: inView ? `${value}%` : 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        />
      </div>
    </li>
  );
}

export function SummarySection({ locale }: { locale: Locale }) {
  const content = summaryContent[locale];
  const years = new Date().getFullYear() - content.experienceYearsStart;
  const barsRef = useRef<HTMLUListElement>(null);
  const barsInView = useInView(barsRef, { once: true, margin: "-80px" });

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
      <p className="mb-10 max-w-3xl text-lg leading-relaxed text-white/85">
        {content.intro}
      </p>

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
            {content.mainTechnologiesTitle}
          </h3>
          <ul ref={barsRef} className="space-y-5">
            {skillBars.map((skill) => (
              <ProgressBar
                key={skill.name}
                name={skill.name}
                value={skill.value}
                inView={barsInView}
              />
            ))}
          </ul>
        </div>
      </div>
    </SectionShell>
  );
}
