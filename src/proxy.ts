import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { getToken } from "next-auth/jwt";

// Protect these app routes server-side. Adjust list as your app grows.
const PROTECTED_PREFIXES = [
  "/dashboard",
  "/assignments",
  "/courses",
  "/exams",
  "/students",
  "/profile",
];

export async function proxy(req: NextRequest) {
  const { pathname } = req.nextUrl;

  // Allow static files, _next internals and public API/auth routes
  if (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/api") ||
    pathname.startsWith("/static") ||
    pathname.startsWith("/public") ||
    pathname === "/" ||
    pathname === "/login" ||
    pathname === "/signup"
  ) {
    return NextResponse.next();
  }

  // Only run token check for protected prefixes
  if (!PROTECTED_PREFIXES.some((p) => pathname.startsWith(p))) {
    return NextResponse.next();
  }

  const token = await getToken({ req, secret: process.env.NEXTAUTH_SECRET });
  if (!token) {
    const loginUrl = new URL("/login", req.url);
    loginUrl.searchParams.set("callbackUrl", req.nextUrl.pathname);
    return NextResponse.redirect(loginUrl);
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/dashboard/:path*",
    "/assignments/:path*",
    "/courses/:path*",
    "/exams/:path*",
    "/students/:path*",
    "/profile/:path*",
  ],
};
