import type { Locale } from "@/content/i18n";
import { personSameAsUrls, siteConfig } from "@/content/site";

const personKnowsAbout = [
  "Software Architecture",
  "Full-Stack Development",
  "AI Engineering",
  "LLM Applications",
  "RAG Systems",
  "PHP",
  "Laravel",
  "Node.js",
  "React",
  "Python",
  "AWS",
  "PostgreSQL",
  "Docker",
  "SaaS Platforms",
  "Legacy Modernization",
  "Technical Leadership",
] as const;

function buildPersonSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: siteConfig.author,
    url: `${siteConfig.url}/en`,
    jobTitle: "Principal Software Engineer",
    knowsAbout: [...personKnowsAbout],
    sameAs: personSameAsUrls,
  };
}

function buildWebSiteSchema(locale: Locale) {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteConfig.name,
    url: siteConfig.url,
    inLanguage: locale === "en" ? "en-US" : "es-MX",
  };
}

type StructuredDataProps = {
  locale: Locale;
};

export function StructuredData({ locale }: StructuredDataProps) {
  const personSchema = buildPersonSchema();
  const websiteSchema = buildWebSiteSchema(locale);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
    </>
  );
}
