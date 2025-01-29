import { NextResponse } from 'next/server';
import connectDB from '@/lib/db';
import User from '@/models/user';
import { cookies } from 'next/headers';
import { signJWT } from '@/lib/jwt';

export async function POST(req) {
  try {
    await connectDB();
    
    const { email, otp } = await req.json();
    
    const user = await User.findOne({ email });
    
    if (!user) {
      return NextResponse.json(
        { error: 'User not found' },
        { status: 404 }
      );
    }

    if (!user.otp || !user.otp.code || !user.otp.expiresAt) {
      return NextResponse.json(
        { error: 'No OTP found' },
        { status: 400 }
      );
    }

    if (new Date() > new Date(user.otp.expiresAt)) {
      return NextResponse.json(
        { error: 'OTP has expired' },
        { status: 400 }
      );
    }

    if (user.otp.code !== otp) {
      return NextResponse.json(
        { error: 'Invalid OTP' },
        { status: 400 }
      );
    }

    // Update user verification status
    user.verified = true;
    user.otp = undefined;
    await user.save();

    // Create and set JWT token after successful verification
    const token = signJWT({
      userId: user._id.toString(),
      email: user.email,
    });

    console.log(token, user, cookies());

   
    // Set authentication cookie
    cookies().set({
      name: 'auth_token',
      value: token,
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      path: '/',
      maxAge: 60 * 60 * 24 * 7, // 1 week
    });
    
    // Send token in response body as well
    return NextResponse.json({ 
      message: 'Email verified successfully',
      token: token,
      user: {
        id: user._id.toString(),
        email: user.email,
        username: user.username,
        status: user.status,
        verified: user.verified
      }
    });

    // return NextResponse.json({ message: 'Email verified successfully' });
  } catch (error) {
    console.error('Verification error:', error);
    return NextResponse.json(
      { error: 'Verification failed' },
      { status: 500 }
    );
  }
}