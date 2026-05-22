import { heroContent } from "@/content/hero";
import type { Locale } from "@/content/i18n";
import { siteContent } from "@/content/site";

const circleLinks = [
  {
    href: "#about",
    navigationIndex: 1,
    className: "circle-one",
    tootikConf: "right dark square shadow",
  },
  {
    href: "#timeline",
    navigationIndex: 2,
    className: "circle-two",
    tootikConf: "left dark square shadow",
  },
  {
    href: "#portfolio",
    navigationIndex: 3,
    className: "circle-three",
    tootikConf: "top dark square shadow",
  },
  {
    href: "#technologies",
    navigationIndex: 4,
    className: "circle-four",
    tootikConf: "bottom dark square shadow",
  },
  {
    href: "#contact",
    navigationIndex: 5,
    className: "circle-five",
    tootikConf: "bottom dark square shadow",
  },
] as const;

export function MolinartHeroSection({ locale }: { locale: Locale }) {
  const content = heroContent[locale];
  const navigation = siteContent[locale].navigation;

  return (
    <div className="slider-area" id="slider-area">
      <div className="row align-items-center">
        <div className="col-12 col-lg-6 image-order">
          <div className="slider-image">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/images/slider-img.png" alt="Emilio Molina" />
          </div>
        </div>

        <div className="col-12 col-lg-6 text-md-center text-lg-left">
          <div className="slider-content">
            <h1 className="main-font text-uppercase">
              <span className="slider-text px-2">{content.greeting}</span>
              <span className="d-block text-yellow">{content.name}</span>
            </h1>
            <p className="pt-3 alt-font content-para">{content.tagline}</p>
            <p className="pt-3 alt-font content-para">{content.subtitle}</p>
          </div>
        </div>
      </div>

      <div className="scroll-downs">
        <div className="mousey">
          <div className="scroller" />
        </div>
      </div>

      {circleLinks.map((circle) => (
        <div key={circle.href} className={circle.className}>
          <span
            data-tootik={navigation[circle.navigationIndex].label}
            data-tootik-conf={circle.tootikConf}
          >
            <a href={circle.href} className="molinart-section-link">
              <span className="animated-circle position-relative" />
            </a>
          </span>
        </div>
      ))}
    </div>
  );
}
