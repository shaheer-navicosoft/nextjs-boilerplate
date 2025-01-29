"use client"
import RegisterForm from "@/components/auth/RegisterForm"
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/hooks/useAuth';
import './globals.css'

 
export default function Home() {
  useAuth(false);


  const router = useRouter();

   
  
  return <div > <RegisterForm /></div>
}