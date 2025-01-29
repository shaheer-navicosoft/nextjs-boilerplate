import { NextResponse } from "next/server";
import connectDB from "@/lib/db";
import Staking from "@/models/staking";

// GET all stakes for a user
export async function GET(request) {
  try {
    await connectDB();
    const { searchParams } = new URL(request.url);
    const userId = searchParams.get('userId');

    if (!userId) {
      return NextResponse.json({ error: 'User ID is required' }, { status: 400 });
    }

    const stakes = await Staking.find({ user: userId })
      .populate('coin')
      .sort({ createdAt: -1 });

    return NextResponse.json({ stakes });
  } catch (error) {
    console.error('Error fetching stakes:', error);
    return NextResponse.json({ error: 'Failed to fetch stakes' }, { status: 500 });
  }
}

// POST new stake
export async function POST(request) {
  try {
    await connectDB();
    const body = await request.json();
    const { user, coin, stakingDetails } = body;

    if (!user || !coin || !stakingDetails) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    const newStaking = await Staking.create({
      user,
      coin: coin.id,
      stakingDetails: {
        duration: stakingDetails.duration,
        apy: stakingDetails.apy,
        lockedAmount: stakingDetails.lockedAmount,
        autoStakingEnabled: stakingDetails.autoStakingEnabled,
        startDate: new Date(stakingDetails.startDate),
        endDate: new Date(stakingDetails.endDate)
      }
    });

    return NextResponse.json({ staking: newStaking });
  } catch (error) {
    console.error('Error creating stake:', error);
    return NextResponse.json({ error: 'Failed to create stake' }, { status: 500 });
  }
}
