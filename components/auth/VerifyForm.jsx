'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { useEffect } from 'react';

export default function VerifyForm() {
  const [otp, setOtp] = useState('');
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();
  useEffect(() => {
    const url = new URL(window.location.href);
    const email = url.searchParams.get('email');
    if (email) {
      setEmail(email);
    }
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    
    const combinedOtp = otp.split('').join('');
    
    try {
      const res = await fetch('/api/auth/verify', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, otp: combinedOtp }),
        credentials: 'include',
      });

      const data = await res.json();
      
      if (res.ok) {
        localStorage.setItem('auth_token', data.token);
        localStorage.setItem('user', JSON.stringify(data.user));
        router.push('/dashboard');
      } else {
        const errorMessage = data.error || 
          (res.status === 401 ? 'Invalid verification code' :
           res.status === 404 ? 'Email not found' :
           'Verification failed. Please try again.');
        setError(errorMessage);
      }
    } catch (error) {
      console.error('Verification request failed:', error);
      setError('Network error. Please check your connection and try again.');
    }
  };

  // Handle OTP input changes
  const handleOtpChange = (index, value) => {
    if (value.length <= 1 && /^\d*$/.test(value)) {
      const newOtp = otp.split('');
      newOtp[index] = value;
      setOtp(newOtp.join(''));
      
      // Auto-focus next input
      if (value && index < 3) {
        const nextInput = document.querySelector(`input[name="otp-${index + 1}"]`);
        if (nextInput) nextInput.focus();
      }
    }
  };

  return (
    <div className="bg-[#10141B] min-h-screen">
      <div className="flex items-center bg-[#10141B] p-6">
        <svg width="45" height="42" viewBox="0 0 45 42" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect y="0.5" width="45" height="41" rx="6" fill="#48FF2C" />
          <circle cx="22.5" cy="21" r="13.5" fill="black" />
          <path d="M28.9722 20.6593L27.0405 20.1075C25.264 19.5996 23.8998 18.236 23.3919 16.4588L22.8401 14.5272C22.753 14.2233 22.2458 14.2233 22.1587 14.5272L21.6069 16.4588C21.0991 18.236 19.7348 19.6003 17.9583 20.1075L16.0267 20.6593C15.8744 20.7025 15.7695 20.842 15.7695 21C15.7695 21.1579 15.8744 21.2968 16.0267 21.3407L17.9583 21.8925C19.7348 22.4004 21.0991 23.7639 21.6069 25.5411L22.1587 27.4727C22.2026 27.625 22.3415 27.7299 22.4994 27.7299C22.6574 27.7299 22.7962 27.625 22.8401 27.4727L23.3919 25.5411C23.8998 23.7639 25.264 22.3996 27.0405 21.8925L28.9722 21.3407C29.1245 21.2975 29.2293 21.1579 29.2293 21C29.2293 20.842 29.1245 20.7032 28.9722 20.6593Z" fill="white" />
        </svg>
        <p className="ml-4 text-2xl font-bold tracking-wide text-white">Staking</p>
      </div>

      <div className="flex min-h-screen items-center justify-center">
        <div className="w-[400px] space-y-8">
          <div>
            <svg width="45" height="42" viewBox="0 0 45 42" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect y="0.5" width="45" height="41" rx="6" fill="#48FF2C" />
              <circle cx="22.5" cy="21" r="13.5" fill="black" />
              <path d="M28.9722 20.6593L27.0405 20.1075C25.264 19.5996 23.8998 18.236 23.3919 16.4588L22.8401 14.5272C22.753 14.2233 22.2458 14.2233 22.1587 14.5272L21.6069 16.4588C21.0991 18.236 19.7348 19.6003 17.9583 20.1075L16.0267 20.6593C15.8744 20.7025 15.7695 20.842 15.7695 21C15.7695 21.1579 15.8744 21.2968 16.0267 21.3407L17.9583 21.8925C19.7348 22.4004 21.0991 23.7639 21.6069 25.5411L22.1587 27.4727C22.2026 27.625 22.3415 27.7299 22.4994 27.7299C22.6574 27.7299 22.7962 27.625 22.8401 27.4727L23.3919 25.5411C23.8998 23.7639 25.264 22.3996 27.0405 21.8925L28.9722 21.3407C29.1245 21.2975 29.2293 21.1579 29.2293 21C29.2293 20.842 29.1245 20.7032 28.9722 20.6593Z" fill="white" />
            </svg>
            <h1 className="mb-1 mt-[20px] text-[20px] font-semibold tracking-wider text-white">Enter Verification Code</h1>
            <p className="text-[16px] text-[#525866]">We've sent a code to<span className="text-white"> {email} </span></p>
          </div>

          {error && (
            <div className="p-3 text-sm text-red-500 bg-red-100 rounded-md">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit}>
            <input
              type="hidden"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            
            <div className="flex justify-between space-x-2">
              {[0, 1, 2, 3].map((index) => (
                <input
                  key={index}
                  type="text"
                  name={`otp-${index}`}
                  maxLength={1}
                  value={otp[index] || ''}
                  onChange={(e) => handleOtpChange(index, e.target.value)}
                  className="h-[64px] w-[80px] rounded-lg border border-[#3D4240] bg-[#0C0B0E] text-center text-2xl text-white focus:outline-none"
                />
              ))}
            </div>

            <button
              type="submit"
              className="mt-8 w-full rounded-xl bg-[#48FF2C] py-2 font-semibold text-black hover:bg-green-500"
            >
              Verify
            </button>
          </form>

          <div className="mt-4">
            <Link href="/">
              <button className="w-full rounded-xl border border-gray-700 py-2 text-white">
                Home Page
              </button>
            </Link>
          </div>

          <div className="text-center">
            <p className="text-[14px] text-gray-500">Experiencing issues receiving the code?</p>
            <a href="#" className="text-white underline">Resend code</a>
          </div>
        </div>
      </div>
    </div>
  );
} 