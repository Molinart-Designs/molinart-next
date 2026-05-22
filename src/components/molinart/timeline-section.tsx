import { timelineContent } from "@/content/timeline";
import type { Locale } from "@/content/i18n";

export function MolinartTimelineSection({ locale }: { locale: Locale }) {
  const content = timelineContent[locale];
  const years = new Date().getFullYear() - content.experienceYearsStart;

  return (
    <div className="container">
      <div className="row pb-5 heading-row">
        <div className="col-12 col-md-7">
          <h3 className="main-font text-uppercase">
            <span className="text-yellow d-block text-uppercase">
              {content.heading.accent}
            </span>
            <span>{content.heading.title}</span>
          </h3>
          <p className="py-2 alt-font">{content.heading.description}</p>
        </div>
        <div className="col-12 col-md-5 text-md-right pt-4 pt-md-0">
          <h2 className="m-0 text-yellow main-font">{years}+</h2>
          <p className="alt-font">{content.experienceYearsLabel}</p>
        </div>
      </div>

      <div className="row">
        <div className="col-12">
          <div className="cd-horizontal-timeline loaded">
            <div className="timeline">
              <div className="events-wrapper">
                <div className="events" style={{ width: "2200px" }}>
                  <ol>
                    {content.panels.map((panel, index) => (
                      <li key={panel.id}>
                        <a
                          href="#"
                          data-date={panel.dateAttr}
                          className={
                            index === 0
                              ? "older-event selected"
                              : index < content.panels.length - 1
                                ? "older-event"
                                : ""
                          }
                          style={index > 0 ? { left: "200px" } : undefined}
                        >
                          {panel.year}
                        </a>
                      </li>
                    ))}
                  </ol>
                  <span className="filling-line" aria-hidden="true" />
                </div>
              </div>
              <ul className="cd-timeline-navigation">
                <li>
                  <a href="#" className="prev">
                    {content.navigation.previous}
                  </a>
                </li>
                <li>
                  <a href="#" className="next pane-next-animation">
                    {content.navigation.next}
                  </a>
                </li>
              </ul>
            </div>

            <div className="events-content">
              <ol>
                {content.panels.map((panel, index) => (
                  <li
                    key={panel.id}
                    data-date={panel.dateAttr}
                    className={index === 0 ? "selected" : undefined}
                  >
                    <div className="col-12 pl-md-0">
                      <div
                        className="main-content text-uppercase"
                        dangerouslySetInnerHTML={{ __html: panel.headerHtml }}
                      />
                    </div>
                    <div className="row align-items-center">
                      {panel.columns.map((column, colIndex) => (
                        <div
                          key={column.title}
                          className={`col-12 col-md-6 ${colIndex === 0 ? "pl-md-0" : "pr-md-0"}`}
                        >
                          <div className="sub-content">
                            <h5 className="text-uppercase main-font text-yellow">
                              {column.title}
                            </h5>
                            <div dangerouslySetInnerHTML={{ __html: column.bodyHtml }} />
                          </div>
                        </div>
                      ))}
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
