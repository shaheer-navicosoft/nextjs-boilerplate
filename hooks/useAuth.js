'use client'
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export function useAuth(requireAuth = true) {
  const router = useRouter();

  useEffect(() => {
    // Only access localStorage on the client side
    const hasAuthToken = typeof window !== 'undefined' 
      ? localStorage.getItem('auth_token')
      : null;
    
    if (requireAuth && !hasAuthToken) {
      // Redirect to home if auth is required but user is not authenticated
      router.push('/');
    } else if (!requireAuth && hasAuthToken) {
      // Redirect to dashboard if user is already authenticated
      router.push('/dashboard');
    }
  }, [router, requireAuth]);

  // Check for client-side before accessing localStorage
  const isAuthenticated = typeof window !== 'undefined' 
    ? !!localStorage.getItem('auth_token')
    : false;

  return { isAuthenticated };
} 