import { NextResponse } from "next/server";

export function middleware(req) {
  const token = req.cookies.get("mahy_portal_auth")?.value;
  const company = req.cookies.get("mahy_company")?.value;

  const pathname = req.nextUrl.pathname;
  const redirectTarget = `${pathname}${req.nextUrl.search}`;

  const isCustomer =
    pathname.startsWith("/contact-us/customer-registration");
  const isVendor =
    pathname.startsWith("/contact-us/vendor-registration");

  if (isCustomer || isVendor) {
    if (!token) {
      const url = new URL("/portal/login", req.url);
      url.searchParams.set("redirect", redirectTarget);
      return NextResponse.redirect(url);
    }
    if (!company) {
      const url = new URL("/portal/company-select", req.url);
      url.searchParams.set("redirect", redirectTarget);
      return NextResponse.redirect(url);
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/contact-us/customer-registration/:path*",
    "/contact-us/vendor-registration/:path*",
  ],
};
