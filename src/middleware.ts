import { NextRequest, NextResponse } from "next/server";
import { analyticsUtil } from "./lib/utils/analytics";

export default async function middleware(req: NextRequest) {
  if (req.nextUrl.pathname === "/") {
    try {
      analyticsUtil.track("landing-page", {
        page: "/",
        country: req.geo?.country,
      });
    } catch (error) {
      console.log(error);
    }
  }
  return NextResponse.next();
}

export const matcher = {
  matcher: ["/"],
};
