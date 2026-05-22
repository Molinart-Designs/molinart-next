"use client";

import { useEffect } from "react";

const SECTION_ANCHORS = new Set([
  "home",
  "about",
  "timeline",
  "portfolio",
  "technologies",
  "contact",
]);

declare global {
  interface Window {
    jQuery?: JQueryStatic;
    $?: JQueryStatic;
  }
}

function setupSectionLinks(jQuery: JQueryStatic) {
  jQuery(document).on("click.molinartSectionNav", "a[href^='#']", function (event) {
    const href = jQuery(this).attr("href");
    if (!href || href === "#") {
      return;
    }

    const anchor = href.slice(1);
    if (!SECTION_ANCHORS.has(anchor)) {
      return;
    }

    if (!document.documentElement.classList.contains("pp-enabled")) {
      return;
    }

    const pagePiling = jQuery.fn.pagepiling as
      | { moveTo?: (target: string | number) => void }
      | undefined;
    if (!pagePiling?.moveTo) {
      return;
    }

    event.preventDefault();
    pagePiling.moveTo(anchor);

    jQuery(".side-menu").removeClass("side-menu-active");
    jQuery("#close_side_menu").fadeOut(200);
  });
}

function dismissLoader() {
  const loader =
    document.getElementById("molinart-loader") ??
    document.querySelector<HTMLElement>(".loader-bg");
  if (loader) {
    loader.classList.add("is-hidden");
  }
}

export function LegacyInit({
  pagePilingTooltips,
}: {
  pagePilingTooltips: string[];
}) {
  useEffect(() => {
    let destroyed = false;

    const init = async () => {
      dismissLoader();

      const jQuery = (await import("jquery")).default;
      window.jQuery = jQuery;
      window.$ = jQuery;

      try {
        await import("jquery.appear");
        await import("owl.carousel");

        const usePagePiling =
          window.innerWidth >= 1280 && jQuery("#pagepiling").length;

        if (usePagePiling) {
          await loadScript("/js/jquery.pagepiling.min.js");

          if (destroyed) {
            return;
          }

          if (typeof jQuery.fn.pagepiling !== "function") {
            throw new Error("pagepiling plugin not available on jQuery");
          }

          document.documentElement.classList.add("pp-enabled");
          jQuery("#pagepiling").pagepiling({
            direction: "vertical",
            sectionsColor: [
              "#171717",
              "#171717",
              "#171717",
              "#171717",
              "#171717",
              "#171717",
            ],
            anchors: ["home", "about", "timeline", "portfolio", "technologies", "contact"],
            scrollingSpeed: 500,
            easing: "linear",
            loopBottom: false,
            loopTop: false,
            css3: true,
            navigation: {
              bulletsColor: "#535353",
              position: "right",
              tooltips: [...pagePilingTooltips],
            },
            onLeave: function () {
              jQuery(".navbar-top-default").fadeOut();
              jQuery(".slider-footer").fadeOut();
            },
          });
          setupSectionLinks(jQuery);
        } else {
          document.documentElement.classList.remove("pp-enabled");
          jQuery("html, body").css("overflow-y", "scroll");
        }

        // Side menu
        jQuery(".side-menu").removeClass("hidden");
        jQuery("#sidemenu_toggle").on("click", function (e) {
          e.preventDefault();
          jQuery(".side-menu").addClass("side-menu-active");
          jQuery("#close_side_menu").fadeIn(700);
        });
        jQuery("#close_side_menu, #btn_sideNavClose").on("click", function (e) {
          e.preventDefault();
          jQuery(".side-menu").removeClass("side-menu-active");
          jQuery("#close_side_menu").fadeOut(200);
        });
        jQuery(".side-nav .nav-link").on("click", function () {
          jQuery(".side-menu").removeClass("side-menu-active");
          jQuery("#close_side_menu").fadeOut(200);
        });

        // Progress bars
        jQuery(".progress-bar").each(function () {
          const bar = jQuery(this);
          if (typeof bar.appear !== "function") {
            return;
          }
          bar.appear(function () {
            bar.animate({ width: `${bar.attr("aria-valuenow")}%` }, 2000);
          });
        });

        // Owl carousel — experience
        const teamCarousel = jQuery(".team-classic.owl-team");
        if (teamCarousel.length && typeof teamCarousel.owlCarousel === "function") {
          teamCarousel.owlCarousel({
            items: 3,
            margin: 30,
            dots: false,
            nav: false,
            loop: true,
            autoplay: false,
            smartSpeed: 500,
            responsive: {
              992: { items: 3 },
              600: { items: 2 },
              320: { items: 1 },
              280: { items: 1 },
            },
          });
          jQuery(".ini-customNextBtn").on("click", function (e) {
            e.preventDefault();
            teamCarousel.trigger("next.owl.carousel");
          });
          jQuery(".ini-customPrevBtn").on("click", function (e) {
            e.preventDefault();
            teamCarousel.trigger("prev.owl.carousel", [300]);
          });
        }

        await loadScript("/js/timeline.js");
      } catch (error) {
        console.error("[LegacyInit]", error);
        document.documentElement.classList.remove("pp-enabled");
        window.jQuery?.("html, body").css("overflow-y", "scroll");
      } finally {
        dismissLoader();
      }
    };

    void init();

    return () => {
      destroyed = true;
      document.documentElement.classList.remove("pp-enabled");
      window.jQuery?.(document).off("click.molinartSectionNav");
      if (window.jQuery) {
        try {
          const pp = window.jQuery.fn.pagepiling as { destroy?: (mode: string) => void } | undefined;
          pp?.destroy?.("all");
        } catch {
          /* pagepiling may not be loaded on mobile */
        }
        window.jQuery("#sidemenu_toggle").off("click");
        window.jQuery("#close_side_menu, #btn_sideNavClose").off("click");
        window.jQuery(".side-nav .nav-link").off("click");
        window.jQuery(".ini-customNextBtn, .ini-customPrevBtn").off("click");
      }
    };
  }, [pagePilingTooltips]);

  return null;
}

function loadScript(src: string): Promise<void> {
  return new Promise((resolve, reject) => {
    if (document.querySelector(`script[src="${src}"]`)) {
      resolve();
      return;
    }
    const script = document.createElement("script");
    script.src = src;
    script.async = false;
    script.onload = () => resolve();
    script.onerror = () => reject(new Error(`Failed to load ${src}`));
    document.body.appendChild(script);
  });
}
