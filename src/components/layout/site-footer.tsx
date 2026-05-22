import type { Locale } from "@/content/i18n";
import { siteContent } from "@/content/site";
import { SocialLinks } from "@/components/layout/social-links";
import { cn } from "@/lib/utils";

type SiteFooterProps = {
  locale: Locale;
  className?: string;
};

export function SiteFooter({ locale, className }: SiteFooterProps) {
  const year = new Date().getFullYear();

  return (
    <footer
      className={cn(
        "border-t border-white/10 bg-molinart-darker px-4 py-8 md:px-8 lg:px-12",
        className,
      )}
    >
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 md:flex-row">
        <SocialLinks />
        <p className="text-center text-sm text-molinart-muted md:text-right">
          {siteContent[locale].footer.copyright(year)}
        </p>
      </div>
    </footer>
  );
}
