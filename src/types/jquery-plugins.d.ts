import "jquery";

declare module "jquery.appear";
declare module "owl.carousel";

interface PagePilingPlugin {
  (options?: Record<string, unknown>): JQuery;
  destroy?: (type: string) => void;
  moveTo?: (anchor: string | number) => void;
}

interface JQuery {
  pagepiling(options?: Record<string, unknown>): JQuery;
  appear(callback: () => void): JQuery;
  owlCarousel(options?: Record<string, unknown>): JQuery;
}

interface JQueryStatic {
  fn: {
    pagepiling?: PagePilingPlugin;
    owlCarousel?: unknown;
  };
}
