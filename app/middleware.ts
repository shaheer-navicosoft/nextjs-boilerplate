import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { verifyJWT } from '@/lib/jwt';

export function middleware(request: NextRequest) {
  // Remove middleware completely or make it very simple since we'll handle auth client-side
  return NextResponse.next();
}

export const config = {
  matcher: []
}; 