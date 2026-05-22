"use client";

import { useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

import { useMediaQuery } from "@/hooks/use-media-query";
import { cn } from "@/lib/utils";

type TimelineHorizontalNavProps = {
  years: readonly string[];
  activeIndex: number;
  onSelect: (index: number) => void;
  onPrevious: () => void;
  onNext: () => void;
  previousLabel: string;
  nextLabel: string;
};

/** Desktop: separación según el año (huecos reales en la carrera). */
function getChronologicalPositions(years: readonly string[]): number[] {
  const numericYears = years.map((year) => Number(year));
  const min = numericYears[0] ?? 0;
  const max = numericYears[numericYears.length - 1] ?? min;
  const range = max - min || 1;

  return numericYears.map((year) => 6 + ((year - min) / range) * 88);
}

/** Mobile: reparto uniforme para que no se solapen las etiquetas. */
function getEvenPositions(count: number): number[] {
  if (count <= 1) {
    return [50];
  }

  return Array.from({ length: count }, (_, index) => 6 + (index / (count - 1)) * 88);
}

export function TimelineHorizontalNav({
  years,
  activeIndex,
  onSelect,
  onPrevious,
  onNext,
  previousLabel,
  nextLabel,
}: TimelineHorizontalNavProps) {
  const isCompact = useMediaQuery("(max-width: 1023px)");
  const trackRef = useRef<HTMLDivElement>(null);
  const markerRefs = useRef<(HTMLButtonElement | null)[]>([]);

  const positions = isCompact
    ? getEvenPositions(years.length)
    : getChronologicalPositions(years);
  const fillPercent = positions[activeIndex] ?? 0;
  const canGoPrev = activeIndex > 0;
  const canGoNext = activeIndex < years.length - 1;

  useEffect(() => {
    if (!isCompact) {
      return;
    }

    const activeMarker = markerRefs.current[activeIndex];
    const track = trackRef.current;
    if (!activeMarker || !track) {
      return;
    }

    activeMarker.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
      inline: "center",
    });
  }, [activeIndex, isCompact]);

  return (
    <div className="relative mx-auto h-[100px] w-full max-w-5xl">
      <button
        type="button"
        onClick={onPrevious}
        disabled={!canGoPrev}
        aria-label={previousLabel}
        className={cn(
          "absolute top-1/2 left-0 z-10 flex size-[34px] -translate-y-1/2 items-center justify-center rounded-full border-2 transition-colors",
          canGoPrev
            ? "border-[#3c4142] text-molinart-yellow hover:border-molinart-yellow"
            : "cursor-not-allowed border-[#3c4142]/60 text-molinart-yellow/35",
        )}
      >
        <ChevronLeft className="size-4 stroke-[2.5]" aria-hidden />
      </button>

      <button
        type="button"
        onClick={onNext}
        disabled={!canGoNext}
        aria-label={nextLabel}
        className={cn(
          "absolute top-1/2 right-0 z-10 flex size-[34px] -translate-y-1/2 items-center justify-center rounded-full border-2 transition-colors",
          canGoNext
            ? "border-[#3c4142] text-molinart-yellow hover:border-molinart-yellow"
            : "cursor-not-allowed border-[#3c4142]/60 text-molinart-yellow/35",
        )}
      >
        <ChevronRight className="size-4 stroke-[2.5]" aria-hidden />
      </button>

      <div
        ref={trackRef}
        className={cn(
          "relative mx-9 h-full sm:mx-10",
          isCompact &&
            "overflow-x-auto overflow-y-hidden [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden",
        )}
      >
        <div
          className={cn("relative h-full", isCompact && "min-w-[34rem] sm:min-w-[38rem]")}
        >
          <div className="absolute top-[50px] right-0 left-0 h-0.5 bg-[#3c4142]" aria-hidden>
            <span
              className="absolute top-0 left-0 h-full w-full origin-left bg-molinart-yellow transition-transform duration-300 ease-out"
              style={{ transform: `scaleX(${fillPercent / 100})` }}
              aria-hidden
            />
          </div>

          <ol className="relative m-0 h-full list-none p-0">
            {years.map((year, index) => {
              const left = positions[index] ?? 0;
              const isActive = index === activeIndex;
              const isOlder = index < activeIndex;

              return (
                <li
                  key={`${year}-${index}`}
                  className="absolute top-0 z-[2] -translate-x-1/2"
                  style={{ left: `${left}%` }}
                >
                  <button
                    ref={(element) => {
                      markerRefs.current[index] = element;
                    }}
                    type="button"
                    onClick={() => onSelect(index)}
                    className="group flex min-w-[3.25rem] flex-col items-center sm:min-w-[3.5rem]"
                    aria-pressed={isActive}
                    aria-current={isActive ? "true" : undefined}
                  >
                    <span
                      className={cn(
                        "font-sans text-xs tracking-tight text-white transition-colors sm:text-sm lg:text-base",
                        isActive
                          ? "underline decoration-molinart-yellow decoration-2 underline-offset-[6px]"
                          : "group-hover:text-white/85",
                      )}
                    >
                      {year}
                    </span>
                    <span className="relative mt-[22px] flex size-3 items-center justify-center">
                      {isActive ? (
                        <>
                          <span
                            className="absolute size-3 animate-timeline-dot rounded-full bg-molinart-yellow"
                            aria-hidden
                          />
                          <span
                            className="absolute size-5 animate-ping rounded-full bg-molinart-yellow/40"
                            aria-hidden
                          />
                        </>
                      ) : (
                        <span
                          className={cn(
                            "size-3 rounded-full border-2 transition-colors group-hover:scale-110",
                            isOlder
                              ? "border-molinart-yellow bg-molinart-yellow"
                              : "border-[#dfdfdf] bg-[#f8f8f8] group-hover:border-[#313740] group-hover:bg-[#313740]",
                          )}
                          aria-hidden
                        />
                      )}
                    </span>
                  </button>
                </li>
              );
            })}
          </ol>
        </div>
      </div>
    </div>
  );
}
