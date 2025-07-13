import { NextRequest, NextResponse } from 'next/server';
import { auth } from './src/lib/auth';

export async function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;
  
  // Récupérer la session utilisateur
  const session = await auth.api.getSession({
    headers: request.headers,
  });
  
  const isLoggedIn = !!session?.user;
  
  // Si l'utilisateur est connecté et essaie d'accéder à /login
  if (isLoggedIn && pathname === '/login') {
    return NextResponse.redirect(new URL('/', request.url));
  }
  
  // Si l'utilisateur n'est pas connecté et essaie d'accéder aux pages game
  if (!isLoggedIn && (pathname.startsWith('/game') || pathname === '/game')) {
    return NextResponse.redirect(new URL('/login', request.url));
  }
  
  return NextResponse.next();
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
};