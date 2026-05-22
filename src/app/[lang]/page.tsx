import { notFound } from "next/navigation";

import { PortfolioSite } from "@/components/portfolio-site";
import { hasLocale } from "@/content/i18n";

export default async function HomePage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;

  if (!hasLocale(lang)) {
    notFound();
  }

  return <PortfolioSite locale={lang} />;
}
