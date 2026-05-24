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
};

const navItemVariants = {
  hidden: { opacity: 0, x: -12 },
  visible: (index: number) => ({
    opacity: 1,
    x: 0,
    transition: { delay: 0.05 + index * 0.04, duration: 0.35 },
  }),
};

export function SideMenu({ locale, open, onClose }: SideMenuProps) {
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
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[60] bg-black/70 backdrop-blur-sm"
            aria-label={content.menu.close}
            onClick={onClose}
          />
          <motion.aside
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ type: "spring", stiffness: 320, damping: 34 }}
            className="fixed inset-y-0 left-0 z-[70] flex w-full max-w-[min(100vw,20rem)] flex-col border-r border-white/10 bg-molinart-darker shadow-[4px_0_40px_rgba(0,0,0,0.45)] sm:max-w-xs"
            role="dialog"
            aria-modal="true"
            aria-label={content.menu.open}
          >
            <div className="h-1 shrink-0 bg-linear-to-r from-molinart-yellow via-molinart-yellow/60 to-transparent" />

            <div className="flex items-center justify-between border-b border-white/10 px-5 py-4">
              <Image
                src="/images/logo.png"
                alt="Molinart"
                width={108}
                height={40}
                className="h-9 w-auto"
              />
              <button
                type="button"
                onClick={onClose}
                className="inline-flex size-10 items-center justify-center border border-white/15 text-white transition-colors hover:border-molinart-yellow hover:bg-molinart-yellow/10 hover:text-molinart-yellow"
                aria-label={content.menu.close}
              >
                <X className="size-5" strokeWidth={2} />
              </button>
            </div>

            <nav className="flex-1 overflow-y-auto px-4 py-6" aria-label="Main">
              <p className="mb-4 px-2 font-heading text-[0.65rem] tracking-[0.25em] text-molinart-muted uppercase">
                {content.menu.navLabel}
              </p>
              <ul className="space-y-1">
                {content.navigation.map((item, index) => {
                  const linkProps = getSectionLinkProps(item.id, item.href);

                  return (
                    <motion.li
                      key={item.id}
                      custom={index}
                      initial="hidden"
                      animate="visible"
                      variants={navItemVariants}
                    >
                      <Link
                        {...linkProps}
                        onClick={(event) => {
                          linkProps.onClick(event);
                          onClose();
                        }}
                        className={cn(
                          "group flex items-center gap-3 border border-transparent px-3 py-3 transition-colors",
                          "hover:border-white/10 hover:bg-white/5",
                        )}
                      >
                        <span
                          className="font-heading text-[0.65rem] tracking-widest text-molinart-yellow/70 transition-colors group-hover:text-molinart-yellow"
                          aria-hidden
                        >
                          {String(index + 1).padStart(2, "0")}
                        </span>
                        <span className="font-heading text-base tracking-wide text-white uppercase transition-colors group-hover:text-molinart-yellow">
                          {item.label}
                        </span>
                      </Link>
                    </motion.li>
                  );
                })}
              </ul>
            </nav>

            <div className="shrink-0 space-y-5 border-t border-white/10 bg-molinart-dark/40 px-5 py-6">
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
              <SocialLinks className="justify-center" />
              <p className="text-center text-xs leading-relaxed text-molinart-muted">
                {content.footer.copyright(year)}
              </p>
            </div>
          </motion.aside>
        </>
      ) : null}
    </AnimatePresence>
  );
}
