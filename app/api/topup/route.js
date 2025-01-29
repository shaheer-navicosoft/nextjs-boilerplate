import { NextResponse } from 'next/server';
import connectDB from '@/lib/db';
import Topup from '@/models/topup';
import { getServerSession } from "next-auth/next";
 
//get all topups of registered user by user id
export async function GET(request) {
  try {
    await connectDB();
    const { searchParams } = new URL(request.url);
    const userId = searchParams.get('userId');
    
    // If userId is provided, return topups for that specific user
    if (userId) {
      const topups = await Topup.find({ user: userId });
      if (!topups) {
        return NextResponse.json({ error: 'No topups found' }, { status: 404 });
      }
      return NextResponse.json({ topups }, { status: 200 });
    }
    
    // If no userId is provided, return all topups (admin route)
    const topups = await Topup.find({});
    return NextResponse.json({ topups }, { status: 200 });
    
  } catch (error) {
    console.error('Error fetching topups:', error);
    return NextResponse.json({ error: 'Failed to fetch topups' }, { status: 500 });
  }
}

export async function POST(request) {
  try {
    await connectDB();
    
    // Get the authenticated user
    

    const data = await request.json();
    
    // Create new topup document
    const topup = await Topup.create({
      user: data.user,
      amount: data.amount,
      coin: data.coinId, 
      status: data.status
    });

    return NextResponse.json({
      message: 'Topup created successfully',
      data: topup
    }, { status: 201 });

  } catch (error) {
    console.error('Error creating topup:', error);
    return NextResponse.json(
      { error: error.message || 'Failed to create topup' },
      { status: 500 }
    );
  }
} 