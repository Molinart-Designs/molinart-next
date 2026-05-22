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

      <ul className="grid grid-cols-3 gap-6 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6">
        {content.items.map((tech) => (
          <li key={tech.name} className="flex flex-col items-center gap-3">
            <div className="flex size-16 items-center justify-center border border-white/10 bg-molinart-darker/60 p-3 transition-colors hover:border-molinart-yellow">
              <Image
                src={tech.iconUrl}
                alt=""
                width={40}
                height={40}
                className="size-10 object-contain invert"
                aria-hidden
              />
            </div>
            <span className="text-center text-xs text-molinart-muted">{tech.name}</span>
          </li>
        ))}
      </ul>
    </SectionShell>
  );
}
