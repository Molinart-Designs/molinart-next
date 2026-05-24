import type { Components } from "react-markdown";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

import type { Locale } from "@/content/i18n";
import { siteConfig } from "@/content/site";
import { cn } from "@/lib/utils";

function resolveAssistantLinkHref(href: string | undefined, locale: Locale): string | undefined {
  if (!href) {
    return href;
  }

  try {
    const url = new URL(href, siteConfig.url);
    const host = url.hostname.replace(/^www\./, "");
    if (host !== "molinart.net") {
      return href;
    }

    const path = url.pathname.replace(/\/$/, "") || "/";
    const contactUrl = `${siteConfig.url}/${locale}#contact`;

    if (url.hash === "#contact") {
      return contactUrl;
    }

    // Homepage without section hash (common when the model points to the root site)
    if (path === "/" || path === "") {
      return contactUrl;
    }
  } catch {
    return href;
  }

  return href;
}

function createMarkdownComponents(locale: Locale): Components {
  return {
    a: ({ href, children }) => (
      <a
        href={resolveAssistantLinkHref(href, locale)}
        target="_blank"
        rel="noopener noreferrer"
        className="text-molinart-yellow underline underline-offset-2 transition-colors hover:text-white"
      >
        {children}
      </a>
    ),
  };
}

type AssistantMessageMarkdownProps = {
  content: string;
  locale: Locale;
  className?: string;
};

export function AssistantMessageMarkdown({
  content,
  locale,
  className,
}: AssistantMessageMarkdownProps) {
  return (
    <div
      className={cn(
        "text-sm leading-relaxed text-white/75",
        "[&_p]:mb-3 [&_p:last-child]:mb-0",
        "[&_ul]:my-2 [&_ul]:list-disc [&_ul]:space-y-1 [&_ul]:pl-5",
        "[&_ol]:my-2 [&_ol]:list-decimal [&_ol]:space-y-1 [&_ol]:pl-5",
        "[&_li]:pl-0.5",
        "[&_strong]:font-semibold [&_strong]:text-white/90",
        className,
      )}
    >
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        components={createMarkdownComponents(locale)}
      >
        {content}
      </ReactMarkdown>
    </div>
  );
}
