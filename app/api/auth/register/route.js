import { NextResponse } from 'next/server';
import connectDB from '@/lib/db';
import User from '@/models/user';
import { sendOTPEmail } from '@/lib/mail';

export async function POST(req) {
  
 
  
  try {
    await connectDB();
    
    const { email, username, status, role } = await req.json();

    // Validate input
    if (!email || !username) {
      return NextResponse.json(
        { error: 'Email and username are required' },
        { status: 400 }
      );
    }

    // Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return NextResponse.json(
        { error: 'Email already registered' },
        { status: 409 }
      );
    }

    // Create new user without username field
    const userData = {
      email,
      username: username,
      role: role || 'user',
      status: status || 'ACTIVE',
    };

    // Only add OTP fields if role is not admin
    if (role !== 'admin') {
      // Generate OTP
      const otp = Math.floor(Math.random() * 9000 + 1000).toString();
      const otpExpiry = new Date(Date.now() + 10 * 60 * 1000); // 10 minutes
      
      userData.otp = {
        code: otp,
        expiresAt: otpExpiry,
      };
    }

    const user = await User.create(userData);

    // Send OTP email only if role is not admin
    if (role !== 'admin') {
      try {
        await sendOTPEmail(email, userData.otp.code);
      } catch (emailError) {
        console.error('Email sending error:', emailError);
        // Delete the created user if email fails
        await User.findByIdAndDelete(user._id);
        return NextResponse.json(
          { error: 'Failed to send verification email' },
          { status: 500 }
        );
      }
    }

    return NextResponse.json({ 
      message: 'Registration successful',
      user: {
        id: user._id,
        email: user.email,
        role: user.role,
        username: user.username
      }
    });

  } catch (error) {
    console.error('Registration error:', {
      message: error.message,
      code: error.code,
      stack: error.stack
    });

    if (error.code === 11000) {
      const field = Object.keys(error.keyPattern)[0];
      return NextResponse.json(
        { error: `This ${field} is already registered` },
        { status: 409 }
      );
    }

    return NextResponse.json(
      { error: error },
      { status: 500 }
    );
  }
} 