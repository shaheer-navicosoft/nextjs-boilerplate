import { NextResponse } from 'next/server';
import { writeFile } from 'fs/promises';
import path from 'path';

import connectDB from '@/lib/db';
import Coin from '@/models/coin';

export async function POST(request) {
  try {
    await connectDB();

    const formData = await request.formData();
    const logo = formData.get('logo');
    const qrcode = formData.get('qrcode');
    const data = JSON.parse(formData.get('data'));

    let logoUrl = null;
    let qrcodeUrl = null;
    
    // Create uploads directory if it doesn't exist
    const uploadsDir = path.join(process.cwd(), 'public/uploads');
    
    // Handle logo upload
    if (logo && logo instanceof File) {
      try {
        await writeFile(`${uploadsDir}/${logo.name}`, Buffer.from(await logo.arrayBuffer()));
        logoUrl = `/uploads/${logo.name}`;
      } catch (error) {
        console.error('Error saving logo:', error);
        return NextResponse.json(
          { error: 'Failed to save logo image' },
          { status: 500 }
        );
      }
    }

    // Handle QR code upload
    if (qrcode && qrcode instanceof File) {
      try {
        await writeFile(`${uploadsDir}/${qrcode.name}`, Buffer.from(await qrcode.arrayBuffer()));
        qrcodeUrl = `/uploads/${qrcode.name}`;
      } catch (error) {
        console.error('Error saving QR code:', error);
        return NextResponse.json(
          { error: 'Failed to save QR code image' },
          { status: 500 }
        );
      }
    }

    // Create new coin document
    const coin = await Coin.create({
      name: data.name,
      walletAddress: data.walletAddress,
      logoUrl: logoUrl,
      qrcode: qrcodeUrl,
      durationDays: data.durationDays,
      apy: data.apy,
      durations: data.durations
    });

    return NextResponse.json({
      message: 'Coin created successfully',
      data: coin
    }, { status: 200 });

  } catch (error) {
    console.error('Error creating coin:', error);
    return NextResponse.json(
      { error: error.message || 'Failed to create coin' },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    await connectDB();
    
    const coins = await Coin.find({})
      .sort({ createdAt: -1 }); // Sort by newest first

    return NextResponse.json({ coins });
  } catch (error) {
    console.error('Error fetching coins:', error);
    return NextResponse.json(
      { error: 'Failed to fetch coins' },
      { status: 500 }
    );
  }
}

export async function PUT(request) {
  const { id, data } = await request.json();
  await Coin.findByIdAndUpdate(id, data);
  return NextResponse.json({ message: 'Coin updated successfully' });
}