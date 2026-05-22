"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useRef,
  type MouseEvent,
  type ReactNode,
  type RefObject,
} from "react";

import {
  FULLPAGE_MEDIA_QUERY,
  FULLPAGE_SCROLL_MS,
  getActiveSectionIndex,
  getFullPageSections,
} from "@/lib/full-page";
import { useMediaQuery } from "@/hooks/use-media-query";
import { cn } from "@/lib/utils";

type FullPageScrollContextValue = {
  enabled: boolean;
  scrollContainerRef: RefObject<HTMLDivElement | null>;
  scrollToSection: (id: string) => void;
  getSectionLinkProps: (id: string, href: string) => {
    href: string;
    onClick: (event: MouseEvent<HTMLAnchorElement>) => void;
  };
};

const FullPageScrollContext = createContext<FullPageScrollContextValue | null>(
  null,
);

type FullPageScrollProviderProps = {
  children: ReactNode;
  sectionIds: readonly string[];
};

export function FullPageScrollProvider({
  children,
  sectionIds,
}: FullPageScrollProviderProps) {
  const enabled = useMediaQuery(FULLPAGE_MEDIA_QUERY);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const isAnimatingRef = useRef(false);

  const scrollToSection = useCallback(
    (id: string) => {
      const container = scrollContainerRef.current;
      const section = document.getElementById(id);
      if (!container || !section) {
        return;
      }

      isAnimatingRef.current = true;
      section.scrollIntoView({
        behavior: enabled ? "smooth" : "auto",
        block: "start",
      });
      window.history.replaceState(null, "", `#${id}`);

      window.setTimeout(() => {
        isAnimatingRef.current = false;
      }, FULLPAGE_SCROLL_MS);
    },
    [enabled],
  );

  const getSectionLinkProps = useCallback(
    (id: string, href: string) => ({
      href,
      onClick: (event: MouseEvent<HTMLAnchorElement>) => {
        if (!enabled) {
          return;
        }
        event.preventDefault();
        scrollToSection(id);
      },
    }),
    [enabled, scrollToSection],
  );

  useEffect(() => {
    document.documentElement.classList.toggle("fullpage-active", enabled);
    return () => document.documentElement.classList.remove("fullpage-active");
  }, [enabled]);

  useEffect(() => {
    if (!enabled) {
      return;
    }

    const hash = window.location.hash.replace("#", "");
    if (hash && sectionIds.includes(hash)) {
      window.requestAnimationFrame(() => scrollToSection(hash));
    }
  }, [enabled, scrollToSection, sectionIds]);

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!enabled || !container) {
      return;
    }

    const goToIndex = (nextIndex: number) => {
      const sections = getFullPageSections(container, sectionIds);
      const target = sections[nextIndex];
      if (!target || isAnimatingRef.current) {
        return;
      }

      isAnimatingRef.current = true;
      target.scrollIntoView({ behavior: "smooth", block: "start" });
      window.setTimeout(() => {
        isAnimatingRef.current = false;
      }, FULLPAGE_SCROLL_MS);
    };

    const onWheel = (event: WheelEvent) => {
      if (isAnimatingRef.current) {
        event.preventDefault();
        return;
      }

      if (Math.abs(event.deltaY) < 8) {
        return;
      }

      const sections = getFullPageSections(container, sectionIds);
      const current = getActiveSectionIndex(container, sections);
      const next = event.deltaY > 0 ? current + 1 : current - 1;

      if (next < 0 || next >= sections.length) {
        return;
      }

      event.preventDefault();
      goToIndex(next);
    };

    const onKeyDown = (event: KeyboardEvent) => {
      if (isAnimatingRef.current) {
        return;
      }

      const downKeys = ["ArrowDown", "PageDown"];
      const upKeys = ["ArrowUp", "PageUp"];
      const isSpace = event.key === " ";

      if (
        !downKeys.includes(event.key) &&
        !upKeys.includes(event.key) &&
        !isSpace
      ) {
        return;
      }

      const sections = getFullPageSections(container, sectionIds);
      const current = getActiveSectionIndex(container, sections);
      const down = downKeys.includes(event.key) || (isSpace && !event.shiftKey);
      const next = down ? current + 1 : current - 1;

      if (next < 0 || next >= sections.length) {
        return;
      }

      event.preventDefault();
      goToIndex(next);
    };

    container.addEventListener("wheel", onWheel, { passive: false });
    window.addEventListener("keydown", onKeyDown);

    return () => {
      container.removeEventListener("wheel", onWheel);
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [enabled, sectionIds]);

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!enabled || !container) {
      return;
    }

    let timeoutId: number | undefined;

    const onScroll = () => {
      if (timeoutId !== undefined) {
        window.clearTimeout(timeoutId);
      }
      timeoutId = window.setTimeout(() => {
        const sections = getFullPageSections(container, sectionIds);
        const index = getActiveSectionIndex(container, sections);
        const id = sections[index]?.id;
        if (id && window.location.hash !== `#${id}`) {
          window.history.replaceState(null, "", `#${id}`);
        }
      }, 120);
    };

    container.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      container.removeEventListener("scroll", onScroll);
      window.clearTimeout(timeoutId);
    };
  }, [enabled, sectionIds]);

  return (
    <FullPageScrollContext.Provider
      value={{
        enabled,
        scrollContainerRef,
        scrollToSection,
        getSectionLinkProps,
      }}
    >
      {children}
    </FullPageScrollContext.Provider>
  );
}

export function FullPageScrollContainer({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  const { enabled, scrollContainerRef } = useFullPageScroll();

  return (
    <div
      ref={scrollContainerRef}
      className={cn(
        enabled &&
          "h-dvh snap-y snap-mandatory overflow-y-auto overscroll-none scroll-smooth",
        className,
      )}
    >
      {children}
    </div>
  );
}

export function useFullPageScroll() {
  const context = useContext(FullPageScrollContext);
  if (!context) {
    throw new Error("useFullPageScroll must be used within FullPageScrollProvider");
  }
  return context;
}
