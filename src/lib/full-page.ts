/** Mismo breakpoint que el sitio original (pagePiling solo en desktop). */
export const FULLPAGE_MEDIA_QUERY = "(min-width: 1280px)";
export const FULLPAGE_SCROLL_MS = 500;

export const fullPageSectionClass =
  "xl:h-dvh xl:min-h-0 xl:snap-start xl:snap-always xl:overflow-hidden xl:scroll-mt-0 xl:flex xl:flex-col";

export const fullPageSectionInnerClass =
  "xl:flex-1 xl:min-h-0 xl:overflow-y-auto xl:overscroll-contain fullpage-section-scroll";

/** Scroll anidado (p. ej. hilo del chat) dentro de una sección full-page. */
export const fullPageNestedScrollClass =
  "overflow-y-auto overscroll-contain fullpage-section-scroll";

const SCROLL_EDGE_EPSILON = 2;

function isVerticallyScrollable(element: HTMLElement): boolean {
  const { overflowY } = window.getComputedStyle(element);
  if (
    overflowY !== "auto" &&
    overflowY !== "scroll" &&
    overflowY !== "overlay"
  ) {
    return false;
  }
  return element.scrollHeight > element.clientHeight + SCROLL_EDGE_EPSILON;
}

/** Contenedor scrollable más interno bajo el puntero, dentro de `boundary`. */
export function findScrollableElementInPath(
  start: EventTarget | null,
  boundary: HTMLElement,
): HTMLElement | null {
  if (!(start instanceof Node)) {
    return null;
  }

  let element: HTMLElement | null =
    start instanceof HTMLElement ? start : start.parentElement;

  while (element && boundary.contains(element)) {
    if (isVerticallyScrollable(element)) {
      return element;
    }
    element = element.parentElement;
  }

  return null;
}

export function canScrollElementInDirection(
  element: HTMLElement,
  deltaY: number,
): boolean {
  if (deltaY > 0) {
    return (
      element.scrollTop + element.clientHeight <
      element.scrollHeight - SCROLL_EDGE_EPSILON
    );
  }
  if (deltaY < 0) {
    return element.scrollTop > SCROLL_EDGE_EPSILON;
  }
  return false;
}

/** Si el wheel debe desplazar contenido interno en lugar de cambiar de sección. */
export function shouldDelegateWheelToInnerScroll(
  target: EventTarget | null,
  activeSection: HTMLElement | null,
  deltaY: number,
): boolean {
  if (!activeSection || deltaY === 0) {
    return false;
  }

  const scrollable = findScrollableElementInPath(target, activeSection);
  if (!scrollable) {
    return false;
  }

  return canScrollElementInDirection(scrollable, deltaY);
}

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
