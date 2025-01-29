"use client";
import './globals.css';
import { SessionProvider } from "next-auth/react";
import { Toaster } from "react-hot-toast";

export default function RootLayout({
  children,
}) {
  return (
    <html lang="en">
      <body>
        
          {children}
          <Toaster position="top-center" />
      
      </body>
    </html>
  )
}
