'use client'
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

export function useAuth(requireAuth = true) {
  const router = useRouter();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    try {
      const hasAuthToken = localStorage.getItem('auth_token');
      setIsAuthenticated(!!hasAuthToken);
      
      if (requireAuth && !hasAuthToken) {
        router.push('/');
      } else if (!requireAuth && hasAuthToken) {
        router.push('/dashboard');
      }
    } catch (error) {
      console.error('Auth check failed:', error);
    } finally {
      setIsLoading(false);
    }
  }, [router, requireAuth]);

  return { isAuthenticated, isLoading };
} 