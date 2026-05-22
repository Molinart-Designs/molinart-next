"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

import type { Locale } from "@/content/i18n";
import { siteContent } from "@/content/site";
import { SideMenu } from "@/components/layout/side-menu";

type SiteHeaderProps = {
  locale: Locale;
  alternateLocaleHref: string;
};

export function SiteHeader({ locale, alternateLocaleHref }: SiteHeaderProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const menu = siteContent[locale].menu;

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50">
        <div className="mx-auto flex h-20 max-w-[1600px] items-center justify-between px-6 md:px-10 lg:px-14">
          <button
            type="button"
            onClick={() => setMenuOpen(true)}
            className="inline-flex size-11 flex-col items-center justify-center gap-1.5 transition-colors hover:opacity-80"
            aria-label={menu.open}
            aria-expanded={menuOpen}
          >
            <span className="h-0.5 w-6 bg-white" />
            <span className="h-0.5 w-6 bg-white" />
            <span className="h-0.5 w-6 bg-white" />
          </button>

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
      <SideMenu
        locale={locale}
        open={menuOpen}
        onClose={() => setMenuOpen(false)}
        alternateLocaleHref={alternateLocaleHref}
      />
    </>
  );
}
