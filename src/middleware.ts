import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export async function middleware(req: NextRequest) {
  // Allow all requests to proceed
  return NextResponse.next();
}

export const config = {
  matcher: ['/login', '/dashboard/:path*']
}; 