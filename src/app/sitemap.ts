import type { MetadataRoute } from "next";

import { locales } from "@/content/i18n";
import { siteConfig } from "@/content/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return locales.map((lang) => ({
    url: `${siteConfig.url}/${lang}`,
    lastModified,
    changeFrequency: "monthly",
    priority: lang === "es" ? 1 : 0.9,
  }));
}
