import { NextResponse, type NextRequest } from "next/server";

function getLocale(request: NextRequest) {
  const preferredLanguages = request.headers
    .get("accept-language")
    ?.toLowerCase()
    .split(",")
    .map((language) => language.trim().split(";")[0]);

  return preferredLanguages?.some(
    (language) => language === "es" || language.startsWith("es-"),
  )
    ? "es"
    : "en";
}

export function proxy(request: NextRequest) {
  request.nextUrl.pathname = `/${getLocale(request)}`;
  return NextResponse.redirect(request.nextUrl);
}

export const config = {
  matcher: ["/"],
};
