import { experienceContent } from "@/content/experience";
import type { Locale } from "@/content/i18n";

export function MolinartExperienceSection({ locale }: { locale: Locale }) {
  const content = experienceContent[locale];

  return (
    <div className="container">
      <div className="row pb-5 heading-row">
        <div className="col-12 col-md-7">
          <h3 className="main-font text-uppercase">
            <span className="text-yellow d-block">{content.heading.accent}</span>
            <span>{content.heading.title}</span>
          </h3>
        </div>
        <div className="col-12 col-md-5 text-md-right pt-4 pt-md-0">
          <h2 className="m-0 text-yellow main-font">{content.stats.value}</h2>
          <p className="alt-font">{content.stats.label}</p>
        </div>
      </div>

      <div className="row">
        <div className="col-sm-12">
          <div className="team-classic owl-team owl-carousel text-center">
            {content.items.map((item) => (
              <div key={item.id} className="item">
                <div className="team-data-img">
                  <a href={item.image} data-fancybox="images">
                    <div className="single-work">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={item.image}
                        alt={item.imageAlt}
                        className="img-responsive"
                      />
                      <div className="overlay-text center-block">
                        <div className="cases-image-inner">
                          <span className="cases-line top" />
                          <span className="cases-line top-right" />
                          <span className="cases-line bottom" />
                          <span className="cases-line bottom-left" />
                          <h6 className="text-white text-uppercase alt-font">
                            {item.overlayTitle}
                          </h6>
                        </div>
                      </div>
                    </div>
                  </a>
                  <div className="portfolio-content">
                    <h5 className="text-yellow main-font mb-2 text-uppercase">
                      {item.title}
                    </h5>
                    <p>{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <a
            className="circle ini-customPrevBtn"
            id="team-circle-left"
            href="#"
            aria-label={content.carousel.previous}
          >
            <i className="lni-chevron-left" aria-hidden />
          </a>
          <a
            className="circle ini-customNextBtn"
            id="team-circle-right"
            href="#"
            aria-label={content.carousel.next}
          >
            <i className="lni-chevron-right" aria-hidden />
          </a>
        </div>
      </div>
    </div>
  );
}
