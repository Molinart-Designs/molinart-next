"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

import { timelineContent } from "@/content/timeline";
import type { Locale } from "@/content/i18n";
import { SectionHeading } from "@/components/layout/section-heading";
import { SectionShell } from "@/components/layout/section-shell";
import { TimelineHorizontalNav } from "@/components/sections/timeline-horizontal-nav";
import { cn } from "@/lib/utils";

function RichHtml({ html, className }: { html: string; className?: string }) {
  return (
    <div
      className={cn(
        "[&_b]:font-semibold [&_h2]:mt-2 [&_h2]:font-heading [&_h2]:text-[1.875rem] [&_h2]:font-normal [&_h2]:tracking-wide [&_h2]:text-white [&_h2]:uppercase [&_h3]:mt-3 [&_h3]:font-heading [&_h3]:text-xl [&_h3]:font-normal [&_h3]:text-molinart-yellow [&_h4]:mt-4 [&_h4]:font-heading [&_h4]:text-lg [&_h4]:font-normal [&_h4]:tracking-wide [&_h4]:text-molinart-yellow [&_h4]:uppercase [&_h6]:font-heading [&_h6]:text-sm [&_h6]:tracking-wide [&_h6]:text-molinart-yellow [&_h6]:uppercase [&_p]:text-sm [&_p]:leading-relaxed [&_p]:text-white/80 [&_span]:text-molinart-yellow",
        className,
      )}
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}

export function TimelineSection({ locale }: { locale: Locale }) {
  const content = timelineContent[locale];
  const years = new Date().getFullYear() - content.experienceYearsStart;
  const panels = content.panels;
  const [activeIndex, setActiveIndex] = useState(() => Math.max(0, panels.length - 1));
  const activePanel = panels[activeIndex];
  const yearLabels = panels.map((panel) => panel.year);

  const go = (direction: -1 | 1) => {
    setActiveIndex((current) => {
      const next = current + direction;
      if (next < 0) return panels.length - 1;
      if (next >= panels.length) return 0;
      return next;
    });
  };

  return (
    <SectionShell
      id="timeline"
      backgroundImage="/images/timeline.jpg"
      ariaLabelledBy="timeline-heading"
      className="xl:overflow-hidden"
    >
      <SectionHeading
        id="timeline-heading"
        accent={content.heading.accent}
        title={content.heading.title}
        description={content.heading.description}
        stat={{ value: `${years}+`, label: content.experienceYearsLabel }}
      />

      <TimelineHorizontalNav
        years={yearLabels}
        activeIndex={activeIndex}
        onSelect={setActiveIndex}
        onPrevious={() => go(-1)}
        onNext={() => go(1)}
        previousLabel={content.navigation.previous}
        nextLabel={content.navigation.next}
      />

      <div className="relative mt-8 min-h-[280px] md:mt-10">
        <AnimatePresence mode="wait">
          {activePanel ? (
            <motion.article
              key={activePanel.id}
              initial={{ opacity: 0, x: 24 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -24 }}
              transition={{ duration: 0.35, ease: "easeInOut" }}
              className="w-full"
            >
              <RichHtml
                html={activePanel.headerHtml}
                className="mb-6 space-y-2 text-uppercase md:mb-8"
              />
              <div className="grid gap-8 pt-2 md:grid-cols-2 md:gap-10 md:pt-4">
                {activePanel.columns.map((column) => (
                  <div key={column.title} className="space-y-3">
                    <h5 className="font-heading text-lg font-normal tracking-wide text-molinart-yellow uppercase">
                      {column.title}
                    </h5>
                    <RichHtml html={column.bodyHtml} className="space-y-3" />
                  </div>
                ))}
              </div>
            </motion.article>
          ) : null}
        </AnimatePresence>
      </div>
    </SectionShell>
  );
}
