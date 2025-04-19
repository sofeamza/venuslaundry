import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"
import { getToken } from "next-auth/jwt"

export async function middleware(request: NextRequest) {
  const path = request.nextUrl.pathname
  const isAdminPath = path.startsWith("/admin")
  const isLoginPath = path === "/admin/login"
  const isApiAuthPath = path.startsWith("/api/auth")

  // Skip middleware for API auth routes and static files
  if (isApiAuthPath || path.match(/\.(png|jpg|jpeg|gif|ico|svg|css|js)$/)) {
    return NextResponse.next()
  }

  // Get the token
  const token = await getToken({
    req: request,
    secret: process.env.NEXTAUTH_SECRET,
    secureCookie: process.env.NODE_ENV === "production",
  })

  // Debugging logs (remove in production)
  console.log("\n--- Middleware Debug ---")
  console.log("Path:", path)
  console.log("Token:", token ? `exists (role: ${token.role})` : "does not exist")
  console.log("Is admin path:", isAdminPath)
  console.log("Is login path:", isLoginPath)

  // Handle admin route protection
  if (isAdminPath && !isLoginPath) {
    if (!token) {
      console.log("Unauthenticated admin access attempt")
      const url = new URL("/admin/login", request.url)
      url.searchParams.set("callbackUrl", path)
      return NextResponse.redirect(url)
    }

    if (token.role !== "admin") {
      console.log("Non-admin user attempting to access admin area")
      return NextResponse.redirect(new URL("/", request.url))
    }
  }

  // Handle login page redirection if already authenticated
  if (isLoginPath && token?.role === "admin") {
    const callbackUrl = request.nextUrl.searchParams.get("callbackUrl")
    const redirectUrl = callbackUrl && callbackUrl.startsWith("/admin")
      ? callbackUrl
      : "/admin"
    return NextResponse.redirect(new URL(redirectUrl, request.url))
  }

  return NextResponse.next()
}

export const config = {
  matcher: [
    /*
     * Match all request paths except:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - images (image files)
     * - public folder files
     */
    "/((?!_next/static|_next/image|favicon.ico|images|public).*)",
  ],
}