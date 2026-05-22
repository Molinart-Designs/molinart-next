import type { ReactNode } from "react";

import {
  fullPageSectionClass,
  fullPageSectionInnerClass,
} from "@/lib/full-page";
import { cn } from "@/lib/utils";

type SectionShellProps = {
  id: string;
  children: ReactNode;
  className?: string;
  backgroundImage?: string;
  ariaLabelledBy?: string;
};

export function SectionShell({
  id,
  children,
  className,
  backgroundImage,
  ariaLabelledBy,
}: SectionShellProps) {
  return (
    <section
      id={id}
      aria-labelledby={ariaLabelledBy}
      className={cn(
        "relative min-h-screen scroll-mt-20 py-20 md:py-28",
        fullPageSectionClass,
        className,
      )}
      style={
        backgroundImage
          ? {
              backgroundImage: `url(${backgroundImage})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }
          : undefined
      }
    >
      {backgroundImage ? <div className="section-overlay absolute inset-0" aria-hidden /> : null}
      <div
        className={cn(
          "relative z-10 mx-auto w-full max-w-7xl px-4 md:px-8 lg:px-12",
          fullPageSectionInnerClass,
          "xl:py-14 xl:px-12",
        )}
      >
        {children}
      </div>
    </section>
  );
}
