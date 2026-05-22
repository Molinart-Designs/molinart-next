"use client";

import { motion } from "framer-motion";
import Image from "next/image";

import { experienceContent } from "@/content/experience";
import type { Locale } from "@/content/i18n";
import { SectionHeading } from "@/components/layout/section-heading";
import { SectionShell } from "@/components/layout/section-shell";

export function ExperienceSection({ locale }: { locale: Locale }) {
  const content = experienceContent[locale];

  return (
    <SectionShell
      id="experience"
      backgroundImage="/images/portfolio-bg.jpg"
      ariaLabelledBy="experience-heading"
    >
      <SectionHeading
        id="experience-heading"
        accent={content.heading.accent}
        title={content.heading.title}
        stat={content.stats}
      />

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {content.items.map((item, index) => (
          <motion.article
            key={item.id}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            className="group flex flex-col overflow-hidden border border-white/10 bg-molinart-darker/70"
          >
            <div className="relative aspect-[4/3] overflow-hidden">
              <Image
                src={item.image}
                alt={item.imageAlt}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 1024px) 100vw, 33vw"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black/55 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <p className="px-4 text-center font-heading text-sm tracking-[0.15em] text-white uppercase">
                  {item.overlayTitle}
                </p>
                <span className="pointer-events-none absolute inset-4 border border-molinart-yellow/80" aria-hidden />
              </div>
            </div>
            <div className="flex flex-1 flex-col p-6">
              <h3 className="mb-3 font-heading text-lg tracking-wide text-molinart-yellow uppercase">
                {item.title}
              </h3>
              <p className="flex-1 text-sm leading-relaxed text-white/80">
                {item.description}
              </p>
            </div>
          </motion.article>
        ))}
      </div>
    </SectionShell>
  );
}
