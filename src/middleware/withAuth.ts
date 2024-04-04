import next from "next";
import { getToken } from "next-auth/jwt";
import { NextFetchEvent, NextMiddleware, NextRequest, NextResponse } from "next/server";

export default function withAuth(
  middleware: NextMiddleware,
  requireAuth: string[] = []
) {
  return async (req: NextRequest, next: NextFetchEvent) => {
    const pathname = req.nextUrl.pathname;

    if (requireAuth.includes(pathname)) {
      const token = await getToken({
        req: req,
        secret: process.env.NEXTAUTH_URL,
      });

      if (!token) {
        const url = new URL('/', req.url);
        console.log(url);
        
        return NextResponse.redirect(url);
      }
    }

    return middleware(req, next)
  };
}
