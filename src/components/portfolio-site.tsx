"use client";

import type { Locale } from "@/content/i18n";
import { siteContent } from "@/content/site";
import {
  FullPageScrollContainer,
  FullPageScrollProvider,
  useFullPageScroll,
} from "@/contexts/full-page-scroll-context";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { SectionNav } from "@/components/layout/section-nav";
import { AskEmilioSection } from "@/components/sections/ask-emilio-section";
import { ContactSection } from "@/components/sections/contact-section";
import { ExperienceSection } from "@/components/sections/experience-section";
import { HeroSection } from "@/components/sections/hero-section";
import { SummarySection } from "@/components/sections/summary-section";
import { TechnologiesSection } from "@/components/sections/technologies-section";
import { TimelineSection } from "@/components/sections/timeline-section";
import { useActiveSection } from "@/hooks/use-active-section";
import { cn } from "@/lib/utils";

type PortfolioSiteProps = {
  locale: Locale;
};

function PortfolioSiteContent({ locale }: PortfolioSiteProps) {
  const navigation = siteContent[locale].navigation;
  const sectionIds = navigation.map((item) => item.id);
  const { enabled, scrollContainerRef } = useFullPageScroll();
  const activeId = useActiveSection(sectionIds, {
    rootRef: scrollContainerRef,
    fullPage: enabled,
  });
  const alternateLocale = locale === "es" ? "en" : "es";

  return (
    <>
      <SiteHeader locale={locale} alternateLocaleHref={`/${alternateLocale}`} />
      <SectionNav items={navigation} activeId={activeId} />
      <FullPageScrollContainer>
        <main>
          <HeroSection locale={locale} />
          <SummarySection locale={locale} />
          <TimelineSection locale={locale} />
          <ExperienceSection locale={locale} />
          <TechnologiesSection locale={locale} />
          <AskEmilioSection locale={locale} />
          <ContactSection locale={locale} />
        </main>
      </FullPageScrollContainer>
      <SiteFooter
        locale={locale}
        className={cn(
          enabled &&
            "pointer-events-none fixed right-0 bottom-0 left-0 z-30 border-0 bg-transparent py-4 [&_a]:pointer-events-auto",
        )}
      />
    </>
  );
}

export function PortfolioSite({ locale }: PortfolioSiteProps) {
  const navigation = siteContent[locale].navigation;
  const sectionIds = navigation.map((item) => item.id);

  return (
    <FullPageScrollProvider sectionIds={sectionIds}>
      <PortfolioSiteContent locale={locale} />
    </FullPageScrollProvider>
  );
}
