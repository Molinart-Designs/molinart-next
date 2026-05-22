/** Mismo breakpoint que el sitio original (pagePiling solo en desktop). */
export const FULLPAGE_MEDIA_QUERY = "(min-width: 1280px)";
export const FULLPAGE_SCROLL_MS = 500;

export const fullPageSectionClass =
  "xl:h-dvh xl:min-h-0 xl:snap-start xl:snap-always xl:overflow-hidden xl:scroll-mt-0 xl:flex xl:flex-col";

export const fullPageSectionInnerClass =
  "xl:flex-1 xl:min-h-0 xl:overflow-y-auto xl:overscroll-contain";

export function getFullPageSections(
  container: HTMLElement,
  sectionIds: readonly string[],
): HTMLElement[] {
  return sectionIds
    .map((id) => container.querySelector<HTMLElement>(`#${CSS.escape(id)}`))
    .filter((element): element is HTMLElement => element !== null);
}

export function getActiveSectionIndex(
  container: HTMLElement,
  sections: readonly HTMLElement[],
): number {
  const scrollTop = container.scrollTop;
  let index = 0;
  let minDistance = Number.POSITIVE_INFINITY;

  sections.forEach((section, i) => {
    const distance = Math.abs(section.offsetTop - scrollTop);
    if (distance < minDistance) {
      minDistance = distance;
      index = i;
    }
  });

  return index;
}
