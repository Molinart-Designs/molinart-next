import type { MetadataRoute } from "next";

import { locales, type Locale } from "@/content/i18n";
import { siteConfig } from "@/content/site";

const localePriority: Record<Locale, number> = {
  en: 1,
  es: 0.9,
};

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return [...locales]
    .sort((a, b) => localePriority[b] - localePriority[a])
    .map((lang) => ({
      url: `${siteConfig.url}/${lang}`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: localePriority[lang],
    }));
}
