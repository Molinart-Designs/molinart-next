"use client";

import Link from "next/link";

import type { NavigationItem } from "@/content/site";
import { useFullPageScroll } from "@/contexts/full-page-scroll-context";
import { cn } from "@/lib/utils";

type SectionNavProps = {
  items: readonly NavigationItem[];
  activeId: string;
};

export function SectionNav({ items, activeId }: SectionNavProps) {
  const { getSectionLinkProps } = useFullPageScroll();

  return (
    <nav
      className="fixed top-1/2 right-4 z-40 hidden -translate-y-1/2 lg:block xl:right-6"
      aria-label="Section navigation"
    >
      <ul className="flex flex-col items-end gap-1">
        {items.map((item) => {
          const isActive = item.id === activeId;
          const linkProps = getSectionLinkProps(item.id, item.href);

          return (
            <li key={item.id}>
              <Link
                {...linkProps}
                title={item.label}
                aria-label={item.label}
                aria-current={isActive ? "true" : undefined}
                className="group flex items-center justify-end gap-3 py-2"
              >
                <span
                  className={cn(
                    "max-w-0 overflow-hidden text-right text-xs tracking-wide whitespace-nowrap uppercase opacity-0 transition-all duration-300 ease-out",
                    "group-hover:max-w-56 group-hover:opacity-100",
                    isActive && "max-w-56 text-molinart-yellow opacity-100",
                    !isActive && "group-hover:text-white",
                  )}
                >
                  {item.label}
                </span>
                <span
                  className={cn(
                    "relative size-[14px] shrink-0 rounded-full transition-all duration-300",
                    isActive
                      ? "bg-molinart-yellow shadow-[0_0_0_2px_#dabd1d]"
                      : "bg-transparent shadow-[inset_0_0_0_2px_rgba(255,255,255,0.55)] group-hover:shadow-[inset_0_0_0_2px_#dabd1d]",
                  )}
                  aria-hidden
                />
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
