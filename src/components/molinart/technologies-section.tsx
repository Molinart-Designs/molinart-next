import Image from "next/image";

import type { Locale } from "@/content/i18n";
import { technologiesContent } from "@/content/technologies";

export function MolinartTechnologiesSection({ locale }: { locale: Locale }) {
  const content = technologiesContent[locale];

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
          <p className="py-2 heading-row alt-font">
            {content.heading.description}
          </p>
        </div>
        <div className="col-12 col-md-5 text-md-right pt-4 pt-md-0">
          <h2 className="m-0 text-yellow main-font">{content.stats.value}</h2>
          <p className="alt-font">{content.stats.label}</p>
        </div>
      </div>

      <div className="row pt-3">
        <div className="col-12">
          <ul className="list-unstyled d-flex flex-wrap justify-content-center">
            {content.items.map((tech) => (
              <li key={tech.name} className="col-3 text-center mb-5">
                <Image
                  src={tech.iconUrl}
                  alt={tech.name}
                  title={tech.name}
                  width={48}
                  height={48}
                  className="icon"
                  style={{ filter: "invert(1)" }}
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
