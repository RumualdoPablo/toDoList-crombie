import { NextRequest, NextResponse } from "next/server";
import { getToken } from "next-auth/jwt";

export async function middleware(req: NextRequest) {
  const token = await getToken({ req, secret: process.env.AUTH_SECRET! });
  console.log(token?.role, req.url, "HOLAAA");

  if (!token) {
    return NextResponse.redirect(new URL("/login", req.url));
  }

  // Verificar si el usuario tiene el rol de ADMIN
  if (req.nextUrl.pathname.startsWith("/tasks") && token.role !== "ADMIN") {
    return NextResponse.redirect(new URL("/unauthorized", req.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/tasks/:path*"], // Aplica el middleware solo a rutas específicas
};
