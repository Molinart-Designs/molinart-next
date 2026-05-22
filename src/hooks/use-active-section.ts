"use client";

import { useEffect, useState, type RefObject } from "react";

type UseActiveSectionOptions = {
  rootRef?: RefObject<HTMLElement | null>;
  fullPage?: boolean;
};

export function useActiveSection(
  sectionIds: readonly string[],
  options: UseActiveSectionOptions = {},
) {
  const { rootRef, fullPage = false } = options;
  const [activeId, setActiveId] = useState(sectionIds[0] ?? "home");

  useEffect(() => {
    const elements = sectionIds
      .map((id) => document.getElementById(id))
      .filter((element): element is HTMLElement => element !== null);

    if (elements.length === 0) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visible[0]?.target.id) {
          setActiveId(visible[0].target.id);
        }
      },
      fullPage
        ? {
            root: rootRef?.current ?? null,
            threshold: [0.45, 0.6, 0.75],
          }
        : {
            rootMargin: "-35% 0px -45% 0px",
            threshold: [0.15, 0.35, 0.55],
          },
    );

    elements.forEach((element) => observer.observe(element));

    const root = rootRef?.current;
    if (fullPage && root) {
      const onScroll = () => {
        const scrollTop = root.scrollTop;
        let bestId = sectionIds[0] ?? "home";
        let bestDistance = Number.POSITIVE_INFINITY;

        elements.forEach((element) => {
          const distance = Math.abs(element.offsetTop - scrollTop);
          if (distance < bestDistance) {
            bestDistance = distance;
            bestId = element.id;
          }
        });

        setActiveId(bestId);
      };

      root.addEventListener("scroll", onScroll, { passive: true });
      onScroll();

      return () => {
        observer.disconnect();
        root.removeEventListener("scroll", onScroll);
      };
    }

    return () => observer.disconnect();
  }, [sectionIds, rootRef, fullPage]);

  return activeId;
}
