"use client";

import type { ReactNode } from "react";
import type { Components } from "react-markdown";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

import { siteConfig } from "@/content/site";
import { useFullPageScroll } from "@/contexts/full-page-scroll-context";
import { cn } from "@/lib/utils";

const linkClassName =
  "text-molinart-yellow underline underline-offset-2 transition-colors hover:text-white";

function isContactAssistantLink(href: string | undefined): boolean {
  if (!href) {
    return false;
  }

  if (href === "#contact" || href.endsWith("#contact")) {
    return true;
  }

  try {
    const url = new URL(href, siteConfig.url);
    const host = url.hostname.replace(/^www\./, "");
    if (host !== "molinart.net") {
      return false;
    }

    if (url.hash === "#contact") {
      return true;
    }

    const path = url.pathname.replace(/\/$/, "") || "/";
    return path === "/" || path === "";
  } catch {
    return false;
  }
}

function AssistantMarkdownLink({
  href,
  children,
}: {
  href?: string;
  children?: ReactNode;
}) {
  const { getSectionLinkProps } = useFullPageScroll();

  if (isContactAssistantLink(href)) {
    const { href: contactHref, onClick } = getSectionLinkProps("contact", "#contact");
    return (
      <a href={contactHref} onClick={onClick} className={linkClassName}>
        {children}
      </a>
    );
  }

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={linkClassName}
    >
      {children}
    </a>
  );
}

function createMarkdownComponents(): Components {
  return {
    a: ({ href, children }) => (
      <AssistantMarkdownLink href={href}>{children}</AssistantMarkdownLink>
    ),
  };
}

type AssistantMessageMarkdownProps = {
  content: string;
  className?: string;
};

export function AssistantMessageMarkdown({
  content,
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
        components={createMarkdownComponents()}
      >
        {content}
      </ReactMarkdown>
    </div>
  );
}
