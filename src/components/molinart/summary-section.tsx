import { skillBars, summaryContent } from "@/content/summary";
import type { Locale } from "@/content/i18n";

export function MolinartSummarySection({ locale }: { locale: Locale }) {
  const content = summaryContent[locale];
  const years = new Date().getFullYear() - content.experienceYearsStart;

  return (
    <div className="container">
      <div className="row pb-5">
        <div className="col-12 col-md-7 pl-md-0">
          <h3 className="main-font text-uppercase">
            <span className="text-yellow d-block">{content.heading.accent}</span>
            <span>{content.heading.title}</span>
          </h3>
          <p className="py-2 alt-font">{content.intro}</p>
        </div>
        <div className="col-12 col-md-5 text-md-right pt-4 pt-md-0">
          <h2 className="m-0 text-yellow main-font">{years}+</h2>
          <p className="alt-font">{content.experienceYearsLabel}</p>
        </div>
      </div>

      <div className="row pt-md-5 skill-box">
        <div className="col-12 col-md-6">
          <div className="row">
            {content.pillars.slice(0, 2).map((pillar, index) => (
              <div
                key={pillar.id}
                className={`col-12 col-md-6 ${index === 1 ? "pt-5 pt-md-0 pr-md-0 text-center text-md-left" : "text-center text-md-left pl-md-0"}`}
              >
                <h4 className="main-font text-yellow skill">{pillar.title}</h4>
                <p className="alt-font text-white mt-3">
                  {pillar.description.replace("{years}", String(years))}
                </p>
              </div>
            ))}
          </div>
          <div className="row mt-5">
            {content.pillars.slice(2, 4).map((pillar, index) => (
              <div
                key={pillar.id}
                className={`col-12 col-md-6 ${index === 1 ? "pt-5 pt-md-0 text-center text-md-left pr-md-0" : "text-center text-md-left pl-md-0"}`}
              >
                <h4 className="main-font text-yellow skill">{pillar.title}</h4>
                <p className="alt-font text-white mt-3">{pillar.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="col-12 col-md-5 offset-md-1 text-left pr-md-0 bars-section">
          <h4 className="main-font text-yellow skill mb-3">
            {content.mainTechnologiesTitle}
          </h4>
          <ul className="progress-bar-side">
            {skillBars.map((skill) => (
              <li key={skill.name} className="custom-progress text-white">
                <h6 className="mb-0 text-capitalize mons-font">
                  {skill.name}
                  <span className="float-right">
                    <b className="numscroller">{skill.value}</b>%
                  </span>
                </h6>
                <div className="progress">
                  <div
                    className="progress-bar bg-yellow"
                    role="progressbar"
                    aria-valuenow={skill.value}
                    aria-valuemin={0}
                    aria-valuemax={100}
                  />
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
