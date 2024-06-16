import { NextResponse } from "next/server";
import { type NextRequest } from "next/server";
import { verifyToken } from "./app/_lib/actions";

/**
 * 可以在这里实现鉴权、重定向等等
 * 下面例子访问'/auth-page/'，会重定向到'/login'
 */

export async function middleware(request: NextRequest) {
  const token = await verifyToken();
  if (token) {
    return NextResponse.next();
  } else {
    return Response.redirect(new URL("/login", request.url));
  }
}

export const config = {
  matcher: "/auth-page/:path*",
};
