declare module "jquery.appear";
declare module "owl.carousel";

interface JQuery {
  pagepiling(options?: Record<string, unknown>): JQuery;
  appear(callback: () => void): JQuery;
  owlCarousel(options?: Record<string, unknown>): JQuery;
}
