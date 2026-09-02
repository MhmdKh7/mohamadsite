import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

export function middleware(request: NextRequest) {
  const hostname = request.headers.get("host")?.split(":")[0] || ""
  if (hostname === "www.rollmachine.ir") {
    const url = request.nextUrl.clone()
    url.hostname = "rollmachine.ir"
    url.protocol = "https:"
    return NextResponse.redirect(url, 301)
  }
  return NextResponse.next()
}

export const config = {
  matcher: ["/((?!_next/static|_next/image).*)"],
}
