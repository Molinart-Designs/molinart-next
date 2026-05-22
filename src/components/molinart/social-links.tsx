import Link from "next/link";

import { socialLinks } from "@/content/site";

const iconClass: Record<string, string> = {
  Facebook: "fab fa-facebook-f",
  Instagram: "fab fa-instagram",
  LinkedIn: "fab fa-linkedin-in",
};

type MolinartSocialLinksProps = {
  className?: string;
};

export function MolinartSocialLinks({ className = "social-icons-simple" }: MolinartSocialLinksProps) {
  return (
    <ul className={className}>
      {socialLinks.map((link) => (
        <li key={link.name}>
          <Link
            className="social-icon"
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={link.label}
          >
            <i className={iconClass[link.name]} aria-hidden />
          </Link>
        </li>
      ))}
    </ul>
  );
}
