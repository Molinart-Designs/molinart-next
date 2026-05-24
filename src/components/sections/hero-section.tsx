"use client";

import { motion } from "framer-motion";
import Link from "next/link";

import { heroContent } from "@/content/hero";
import type { Locale } from "@/content/i18n";
import { siteContent } from "@/content/site";
import { useFullPageScroll } from "@/contexts/full-page-scroll-context";
import { SocialLinks } from "@/components/layout/social-links";
import { fullPageSectionClass } from "@/lib/full-page";
import { cn } from "@/lib/utils";

const circleNav = [
  { href: "#about", index: 1, className: "left-[46%] top-[28%]" },
  { href: "#timeline", index: 2, className: "left-[62%] top-[14%]" },
  { href: "#experience", index: 3, className: "left-[76%] top-[36%]" },
  { href: "#technologies", index: 4, className: "left-[70%] top-[74%]" },
  { href: "#ask-emilio", index: 5, className: "left-[56%] top-[82%]" },
] as const;

export function HeroSection({ locale }: { locale: Locale }) {
  const content = heroContent[locale];
  const navigation = siteContent[locale].navigation;
  const { getSectionLinkProps } = useFullPageScroll();

  return (
    <section
      id="home"
      className={cn(
        "relative min-h-dvh scroll-mt-0 overflow-hidden bg-molinart-darker lg:min-h-screen",
        fullPageSectionClass,
      )}
      aria-label="Inicio"
    >
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url(/images/banner.jpg)" }}
        aria-hidden
      />

      <div className="relative z-10 flex min-h-dvh w-full flex-col lg:grid lg:min-h-screen lg:grid-cols-2 xl:h-full xl:min-h-0 xl:flex-1">
        {/* Texto — arriba en móvil */}
        <motion.div
          initial={{ opacity: 0, x: 28 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
          className="order-1 flex shrink-0 flex-col justify-start px-5 pt-24 pb-3 sm:px-6 sm:pt-28 lg:order-2 lg:min-h-screen lg:justify-center lg:px-12 lg:py-24 xl:min-h-0 xl:h-full xl:pr-20"
        >
          <h1 className="font-heading w-full font-bold tracking-wide uppercase">
            <span className="mb-3 inline-block bg-white px-3 py-1 text-xl text-molinart-dark sm:text-2xl lg:text-[1.75rem]">
              {content.greeting}
            </span>
            <span className="block text-[2rem] leading-[1.08] text-molinart-yellow sm:text-5xl md:text-6xl lg:text-[3.5rem] xl:text-[4.5rem] 2xl:text-[4.75rem]">
              {content.name}
            </span>
          </h1>
          <p className="mt-6 w-full text-lg leading-[1.65] font-light text-white/95 sm:mt-8 md:text-xl md:leading-[1.75] lg:mt-10">
            {content.tagline}
          </p>
          <p className="mt-4 w-full text-base leading-[1.65] text-white/75 md:text-lg lg:mt-6">
            {content.subtitle}
          </p>
        </motion.div>

        {/* Imagen — ancho completo y resto del alto en móvil */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative order-2 flex min-h-0 w-full flex-1 flex-col justify-end px-0 pb-0 lg:order-1 lg:min-h-screen lg:flex-none lg:items-end lg:px-10 lg:pt-28 lg:pb-12 xl:min-h-0 xl:h-full"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/slider-img.png"
            alt="Emilio Molina"
            className="block h-full w-full max-w-none object-contain object-bottom lg:h-auto lg:max-h-[88vh] lg:min-h-[75vh]"
          />
        </motion.div>
      </div>

      {/* Círculos decorativos del hero */}
      <div className="pointer-events-none absolute inset-0 z-20 hidden lg:block" aria-hidden>
        {circleNav.map((circle) => {
          const item = navigation[circle.index];
          if (!item) {
            return null;
          }

          const linkProps = getSectionLinkProps(item.id, item.href);

          return (
          <Link
            key={circle.href}
            {...linkProps}
            title={item.label}
            className={cn("pointer-events-auto absolute", circle.className)}
          >
            <span className="relative flex size-10 items-center justify-center">
              <span className="absolute size-6 animate-ping rounded-full bg-molinart-yellow/25" />
              <span className="relative size-3 rounded-full bg-molinart-yellow shadow-[0_0_12px_rgba(218,189,29,0.6)]" />
            </span>
          </Link>
          );
        })}
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.1, duration: 0.6 }}
        className="absolute bottom-6 left-1/2 z-20 hidden -translate-x-1/2 lg:block"
        aria-hidden
      >
        <div className="flex h-[55px] w-[34px] items-start justify-center rounded-full border-2 border-white/80 px-3 pt-2.5">
          <motion.span
            animate={{ y: [0, 10, 0], opacity: [1, 0.25, 1] }}
            transition={{ repeat: Infinity, duration: 2.2, ease: "easeInOut" }}
            className="block h-2.5 w-0.5 rounded-full bg-white"
          />
        </div>
      </motion.div>

      <div className="absolute right-6 bottom-6 z-20 hidden lg:right-10 lg:bottom-8 lg:block xl:hidden">
        <SocialLinks />
      </div>
    </section>
  );
}
