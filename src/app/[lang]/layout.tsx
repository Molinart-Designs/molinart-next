import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Oswald, Roboto } from "next/font/google";

import { hasLocale, locales } from "@/content/i18n";
import { siteConfig, siteMetadata } from "@/content/site";

import "../globals.css";

const oswald = Oswald({
  variable: "--font-oswald",
  subsets: ["latin"],
  weight: ["500", "700"],
});

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
});

export function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;

  if (!hasLocale(lang)) {
    return {};
  }

  const metadata = siteMetadata[lang];

  return {
    metadataBase: new URL(siteConfig.url),
    title: metadata.title,
    description: metadata.description,
    authors: [{ name: siteConfig.author }],
    keywords: [...metadata.keywords],
    alternates: {
      canonical: `/${lang}`,
      languages: {
        es: "/es",
        en: "/en",
      },
    },
    openGraph: {
      type: "website",
      locale: metadata.locale,
      url: `/${lang}`,
      siteName: siteConfig.name,
      title: metadata.title,
      description: metadata.description,
    },
  };
}

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}>) {
  const { lang } = await params;

  if (!hasLocale(lang)) {
    notFound();
  }

  return (
    <html lang={lang} className={`${oswald.variable} ${roboto.variable}`}>
      <head>
        <link rel="icon" href="/images/favicon.ico" />
      </head>
      <body>{children}</body>
    </html>
  );
}
