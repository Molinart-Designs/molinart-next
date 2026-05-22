"use client";

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { X } from "lucide-react";

import type { Locale } from "@/content/i18n";
import { siteContent } from "@/content/site";
import { useFullPageScroll } from "@/contexts/full-page-scroll-context";
import { SocialLinks } from "@/components/layout/social-links";
import { cn } from "@/lib/utils";

type SideMenuProps = {
  locale: Locale;
  open: boolean;
  onClose: () => void;
  alternateLocaleHref: string;
};

export function SideMenu({
  locale,
  open,
  onClose,
  alternateLocaleHref,
}: SideMenuProps) {
  const content = siteContent[locale];
  const year = new Date().getFullYear();
  const { getSectionLinkProps } = useFullPageScroll();

  return (
    <AnimatePresence>
      {open ? (
        <>
          <motion.button
            type="button"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] bg-black/60"
            aria-label={content.menu.close}
            onClick={onClose}
          />
          <motion.aside
            initial={{ y: "-100%" }}
            animate={{ y: 0 }}
            exit={{ y: "-100%" }}
            transition={{ type: "spring", stiffness: 280, damping: 32 }}
            className="fixed inset-x-0 top-0 z-[70] flex max-h-[100dvh] flex-col bg-molinart-darker shadow-2xl"
          >
            <div className="flex items-center justify-between border-b border-white/10 px-6 py-5">
              <Image src="/images/logo.png" alt="Molinart" width={120} height={48} />
              <button
                type="button"
                onClick={onClose}
                className="inline-flex size-10 items-center justify-center border border-white/20 text-white transition-colors hover:border-molinart-yellow hover:text-molinart-yellow"
                aria-label={content.menu.close}
              >
                <X className="size-5" />
              </button>
            </div>

            <nav className="flex-1 overflow-y-auto px-6 py-8" aria-label="Main">
              <ul className="space-y-1">
                {content.navigation.map((item) => {
                  const linkProps = getSectionLinkProps(item.id, item.href);

                  return (
                    <li key={item.id}>
                      <Link
                        {...linkProps}
                        onClick={(event) => {
                          linkProps.onClick(event);
                          onClose();
                        }}
                        className="block border-l-2 border-transparent py-3 pl-4 font-heading text-lg tracking-wide text-white uppercase transition-colors hover:border-molinart-yellow hover:text-molinart-yellow"
                      >
                        {item.label}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </nav>

            <div className="space-y-6 border-t border-white/10 px-6 py-8">
              <a
                href={content.resume.href}
                download={content.resume.filename}
                className={cn(
                  "inline-flex w-full items-center justify-center border-2 border-molinart-yellow px-6 py-3 font-heading text-sm tracking-wider text-molinart-yellow uppercase transition-colors",
                  "hover:bg-molinart-yellow hover:text-molinart-dark",
                )}
              >
                {content.resume.label}
              </a>
              <Link
                href={alternateLocaleHref}
                className="block text-center text-sm text-molinart-muted transition-colors hover:text-molinart-yellow"
                aria-label={content.language.label}
              >
                {content.language.next}
              </Link>
              <SocialLinks className="justify-center" />
              <p className="text-center text-sm text-molinart-muted">
                {content.footer.copyright(year)}
              </p>
            </div>
          </motion.aside>
        </>
      ) : null}
    </AnimatePresence>
  );
}
