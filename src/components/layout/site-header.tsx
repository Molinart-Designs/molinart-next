"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

import type { Locale } from "@/content/i18n";
import { siteContent } from "@/content/site";
import { SideMenu } from "@/components/layout/side-menu";
import { cn } from "@/lib/utils";

type SiteHeaderProps = {
  locale: Locale;
  alternateLocaleHref: string;
};

const localeShortLabel: Record<Locale, string> = {
  es: "EN",
  en: "ES",
};

export function SiteHeader({ locale, alternateLocaleHref }: SiteHeaderProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const menu = siteContent[locale].menu;
  const language = siteContent[locale].language;

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50 border-b border-white/5 bg-molinart-darker/80 backdrop-blur-md">
        <div className="mx-auto flex h-20 max-w-[1600px] items-center justify-between px-6 md:px-10 lg:px-14">
          <div className="flex items-center gap-2">
            <Link
              href={alternateLocaleHref}
              className={cn(
                "inline-flex h-11 min-w-11 items-center justify-center border border-white/15 px-3",
                "font-heading text-xs font-bold tracking-[0.2em] text-white uppercase transition-colors",
                "hover:border-molinart-yellow hover:bg-molinart-yellow/10 hover:text-molinart-yellow",
              )}
              aria-label={language.label}
            >
              {localeShortLabel[locale]}
            </Link>

            <button
              type="button"
              onClick={() => setMenuOpen((open) => !open)}
              className={cn(
                "relative inline-flex size-11 items-center justify-center border border-white/15 transition-colors",
                "hover:border-molinart-yellow hover:bg-white/5",
                menuOpen && "border-molinart-yellow bg-molinart-yellow/10",
              )}
              aria-label={menuOpen ? menu.close : menu.open}
              aria-expanded={menuOpen}
            >
              <span
                className={cn(
                  "absolute h-0.5 w-5 bg-white transition-all duration-300",
                  menuOpen ? "translate-y-0 rotate-45" : "-translate-y-1.5",
                )}
              />
              <span
                className={cn(
                  "absolute h-0.5 w-5 bg-white transition-all duration-300",
                  menuOpen ? "opacity-0" : "opacity-100",
                )}
              />
              <span
                className={cn(
                  "absolute h-0.5 w-5 bg-white transition-all duration-300",
                  menuOpen ? "translate-y-0 -rotate-45" : "translate-y-1.5",
                )}
              />
            </button>
          </div>

          <Link
            href="#home"
            className="relative block h-12 w-32 md:h-14 md:w-36"
            aria-label="Molinart"
          >
            <Image
              src="/images/logo.png"
              alt="Molinart"
              fill
              className="object-contain object-right"
              priority
            />
          </Link>
        </div>
      </header>
      <SideMenu locale={locale} open={menuOpen} onClose={() => setMenuOpen(false)} />
    </>
  );
}
