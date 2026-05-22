import { notFound } from "next/navigation";

import { PagePilingSite } from "@/components/molinart/page-piling-site";
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

  return <PagePilingSite locale={lang} />;
}
