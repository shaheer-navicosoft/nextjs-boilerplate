'use client'
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

export function useAdminAuth(adminOnly = true) {
  const router = useRouter();
  const [isAdmin, setIsAdmin] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    try {
      const hasAuthToken = localStorage.getItem('auth_token');
      const adminStatus = localStorage.getItem('is_admin') === 'true';
      
      setIsAdmin(adminStatus);

      if (!hasAuthToken) {
        router.push('/');
      } else if (!adminOnly && adminStatus) {
        router.push('/admin');
      } else if (adminOnly && !adminStatus) {
        router.push('/');
      }
    } catch (error) {
      console.error('Auth check failed:', error);
    } finally {
      setIsLoading(false);
    }
  }, [router, adminOnly]);

  return { isAdmin, isLoading };
} 