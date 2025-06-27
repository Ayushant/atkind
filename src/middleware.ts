import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const response = NextResponse.next()

  // Add security headers for SEO and performance
  response.headers.set('X-DNS-Prefetch-Control', 'on')
  response.headers.set('Strict-Transport-Security', 'max-age=31536000; includeSubDomains')
  response.headers.set('X-Frame-Options', 'DENY')
  response.headers.set('X-Content-Type-Options', 'nosniff')
  response.headers.set('Referrer-Policy', 'origin-when-cross-origin')
  response.headers.set('X-XSS-Protection', '1; mode=block')
  
  // Performance headers
  response.headers.set('Cache-Control', 'public, max-age=31536000, immutable')
  
  // Add preload hints for critical resources
  if (request.nextUrl.pathname === '/') {
    response.headers.set('Link', '</fonts/inter.woff2>; rel=preload; as=font; type=font/woff2; crossorigin')
  }
  
  // Redirect trailing slashes for better SEO
  if (request.nextUrl.pathname.endsWith('/') && request.nextUrl.pathname !== '/') {
    const url = request.nextUrl.clone()
    url.pathname = url.pathname.slice(0, -1)
    return NextResponse.redirect(url, 301)
  }
  
  // CSP header for security and performance
  const csp = [
    "default-src 'self'",
    "script-src 'self' 'unsafe-inline' 'unsafe-eval' *.googletagmanager.com *.google-analytics.com",
    "style-src 'self' 'unsafe-inline' fonts.googleapis.com",
    "font-src 'self' fonts.gstatic.com",
    "img-src 'self' data: https: *.googleapis.com *.gstatic.com",
    "connect-src 'self' *.google-analytics.com *.analytics.google.com *.googletagmanager.com",
  ].join('; ')
  
  response.headers.set('Content-Security-Policy', csp)

  return response
}

export const config = {
  matcher: [
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
}
