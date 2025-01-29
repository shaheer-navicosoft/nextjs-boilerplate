'use client'
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export function useAdminAuth(adminOnly = true) {
  const router = useRouter();

  useEffect(() => {
    // Only access localStorage on the client side
    const hasAuthToken = typeof window !== 'undefined' 
      ? localStorage.getItem('auth_token')
      : null;
    
    const isAdmin = typeof window !== 'undefined'
      ? localStorage.getItem('is_admin') === 'true'
      : false;
    
    if (!hasAuthToken) {
      // Redirect to home if user is not authenticated
      router.push('/');
      return;
    }

    // If adminOnly is false, redirect admins away from this page
    if (!adminOnly && isAdmin) {
      router.push('/admin');
      return;
    }

    // If adminOnly is true, redirect non-admins away from this page
    if (adminOnly && !isAdmin) {
      router.push('/');
      return;
    }
  }, [router, adminOnly]);

  const isAdmin = typeof window !== 'undefined'
    ? localStorage.getItem('is_admin') === 'true'
    : false;

  return { isAdmin };
} 