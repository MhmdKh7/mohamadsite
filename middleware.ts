import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

export function middleware(request: NextRequest) {
  const hostname = request.headers.get("host")?.split(":")[0] || ""
  if (hostname === "www.rollmachine.ir") {
    const path = request.nextUrl.pathname + request.nextUrl.search
    return NextResponse.redirect(new URL(path, "https://rollmachine.ir"), 301)
  }
  return NextResponse.next()
}

export const config = {
  matcher: ["/((?!_next/static|_next/image).*)"],
}
