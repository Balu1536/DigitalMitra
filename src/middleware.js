import { NextResponse } from "next/server";

export const config = {
  matcher: "/integrations/:path*",
};

export function middleware(request) {
  const requestHeaders = new Headers(request.headers);
  requestHeaders.set("x-createxyz-project-id", "90539dbb-5773-4d12-9034-890593dc71a0");
  requestHeaders.set("x-createxyz-project-group-id", "33a169a6-ea3a-4bb8-8111-cf5d09ab98bc");


  request.nextUrl.href = `https://www.create.xyz/${request.nextUrl.pathname}`;

  return NextResponse.rewrite(request.nextUrl, {
    request: {
      headers: requestHeaders,
    },
  });
}