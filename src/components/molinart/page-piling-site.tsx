import { MolinartContactSection } from "@/components/molinart/contact-section";
import { MolinartExperienceSection } from "@/components/molinart/experience-section";
import { MolinartHeroSection } from "@/components/molinart/hero-section";
import { LegacyInit } from "@/components/molinart/legacy-init";
import { MolinartLoader } from "@/components/molinart/loader";
import { MolinartHeader } from "@/components/molinart/site-header";
import { MolinartSocialLinks } from "@/components/molinart/social-links";
import { MolinartSummarySection } from "@/components/molinart/summary-section";
import { MolinartTechnologiesSection } from "@/components/molinart/technologies-section";
import { MolinartTimelineSection } from "@/components/molinart/timeline-section";
import type { Locale } from "@/content/i18n";
import { siteContent } from "@/content/site";

export function PagePilingSite({ locale }: { locale: Locale }) {
  const pagePilingTooltips = siteContent[locale].navigation.map((item) => item.label);

  return (
    <>
      <MolinartLoader />
      <MolinartHeader locale={locale} />
      <LegacyInit pagePilingTooltips={pagePilingTooltips} />

      <div id="pagepiling">
        <section className="section slide1 p-0" id="home">
          <MolinartHeroSection locale={locale} />
        </section>

        <section className="section slide2 skills" id="about">
          <MolinartSummarySection locale={locale} />
        </section>

        <section className="section slide3 timeline-bg" id="timeline">
          <MolinartTimelineSection locale={locale} />
        </section>

        <section className="section slide4 portfolio-bg" id="portfolio">
          <MolinartExperienceSection locale={locale} />
        </section>

        <section className="section slide6 testimonial-bg" id="technologies">
          <MolinartTechnologiesSection locale={locale} />
        </section>

        <section className="section slide5 contact-bg" id="contact">
          <MolinartContactSection locale={locale} />
        </section>
      </div>

      <div className="slider-bottom">
        <div className="slider-footer w-auto">
          <MolinartSocialLinks />
        </div>
      </div>
    </>
  );
}
