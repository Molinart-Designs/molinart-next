import Image from "next/image";

import { technologiesContent } from "@/content/technologies";
import type { Locale } from "@/content/i18n";
import { SectionHeading } from "@/components/layout/section-heading";
import { SectionShell } from "@/components/layout/section-shell";

export function TechnologiesSection({ locale }: { locale: Locale }) {
  const content = technologiesContent[locale];

  return (
    <SectionShell
      id="technologies"
      backgroundImage="/images/testimonial-bg.jpg"
      ariaLabelledBy="technologies-heading"
    >
      <SectionHeading
        id="technologies-heading"
        accent={content.heading.accent}
        title={content.heading.title}
        description={content.heading.description}
        stat={content.stats}
      />

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {content.groups.map((group) => (
          <article
            key={group.id}
            className="flex flex-col border border-white/10 bg-molinart-darker/60 p-5 md:p-6"
          >
            <h3 className="mb-2 font-heading text-lg tracking-wide text-molinart-yellow uppercase">
              {group.title}
            </h3>
            <p className="mb-5 flex-1 text-sm leading-relaxed text-white/75">
              {group.summary}
            </p>
            <ul className="flex flex-wrap gap-2">
              {group.items.map((item) => (
                <li
                  key={item.name}
                  className="inline-flex items-center gap-2 border border-white/10 bg-molinart-dark/80 px-2.5 py-1.5 text-xs text-molinart-muted transition-colors hover:border-molinart-yellow/50 hover:text-white/90"
                >
                  {item.iconUrl ? (
                    <span className="flex size-5 shrink-0 items-center justify-center">
                      <Image
                        src={item.iconUrl}
                        alt=""
                        width={20}
                        height={20}
                        className="size-4 object-contain invert"
                        aria-hidden
                      />
                    </span>
                  ) : null}
                  <span>{item.name}</span>
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </SectionShell>
  );
}
