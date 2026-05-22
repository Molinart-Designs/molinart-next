"use client";

import Image from "next/image";

import { MolinartSocialLinks } from "@/components/molinart/social-links";
import type { Locale } from "@/content/i18n";
import { siteContent } from "@/content/site";

export function MolinartHeader({ locale }: { locale: Locale }) {
  const year = new Date().getFullYear();
  const content = siteContent[locale];
  const nextLocale = locale === "es" ? "en" : "es";

  return (
    <header>
      <nav className="navbar navbar-top-default navbar-expand-lg navbar-simple nav-line molinart-top-navbar">
        <a href="#home" title="Logo" className="logo molinart-header-logo">
          <div className="mega-logo">
            <Image
              src="/images/logo.png"
              alt="Molinart"
              width={80}
              height={40}
              className="m-0"
              priority
            />
          </div>
        </a>

        <div className="navigation-toggle">
          <ul className="slider-social toggle-btn my-0 molinart-header-actions">
            <li>
              <a
                href="#"
                className="sidemenu_btn"
                id="sidemenu_toggle"
                aria-label={content.menu.open}
              >
                <span />
                <span />
                <span />
              </a>
            </li>
            <li>
              <a
                href={`/${nextLocale}`}
                className="molinart-language-toggle"
                aria-label={content.language.label}
                title={content.language.label}
              >
                {nextLocale.toUpperCase()}
              </a>
            </li>
          </ul>
        </div>
      </nav>

      <div className="side-menu hidden">
        <span id="btn_sideNavClose">
          <i className="las la-times btn-close" aria-hidden />
        </span>
        <div className="inner-wrapper">
          <nav className="side-nav w-100">
            <a href="#home" title="Logo" className="logo navbar-brand">
              <Image src="/images/logo.png" alt="Molinart" width={150} height={75} />
            </a>
            <ul className="navbar-nav text-capitalize">
              {content.navigation.map((item) => (
                <li key={item.id} className="nav-item">
                  <a className="nav-link" href={item.href}>
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
            <div className="text-center sidebar_btn">
              <a
                href={content.resume.href}
                download={content.resume.filename}
                className="btn btn-medium btn-rounded btn-yellow text-capitalize"
              >
                {content.resume.label}
              </a>
            </div>
          </nav>

          <div className="side-footer w-100">
            <MolinartSocialLinks className="social-icons-simple" />
            <p>{content.footer.copyright(year)}</p>
          </div>
        </div>
      </div>
      <a id="close_side_menu" href="#" aria-label={content.menu.close} />
    </header>
  );
}
