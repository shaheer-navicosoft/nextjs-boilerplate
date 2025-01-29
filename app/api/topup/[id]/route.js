import { NextResponse } from 'next/server';
import connectDB from '@/lib/db';
import Topup from '@/models/topup';

export async function PUT(request, { params }) {
  try {
    await connectDB();
    const { id } = params;
    const data = await request.json();

    // Validate status
    if (!['CONFIRMED', 'REFUSED'].includes(data.status)) {
      return NextResponse.json(
        { error: 'Invalid status. Must be either CONFIRMED or REFUSED' },
        { status: 400 }
      );
    }

    // Update status
    const updatedStatus = data.status === 'CONFIRMED' ? 'APPROVED' : 'REFUSED';
    
    const topup = await Topup.findByIdAndUpdate(
      id,
      { status: updatedStatus },
      { new: true } // Returns the updated document
    );

    if (!topup) {
      return NextResponse.json(
        { error: 'Topup not found' },
        { status: 404 }
      );
    }

    return NextResponse.json({ 
      message: 'Topup status updated successfully',
      topup 
    }, { status: 200 });

  } catch (error) {
    console.error('Error updating topup:', error);
    return NextResponse.json(
      { error: 'Failed to update topup status' },
      { status: 500 }
    );
  }
} 