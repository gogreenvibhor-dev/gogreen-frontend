import { NextResponse } from 'next/server';

const NEXT_PUBLIC_BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3001';

export async function GET() {
  try {
    const response = await fetch(`${NEXT_PUBLIC_BASE_URL}/api/youtube-videos`, {
      method: 'GET',
      next: { 
        revalidate: 3600, // Revalidate every hour
        tags: ['youtube-videos'] 
      },
    });

    const data = await response.json();
    return NextResponse.json(data, { status: response.status });
  } catch (error) {
    console.error('Error fetching YouTube videos:', error);
    return NextResponse.json({ error: 'Failed to fetch YouTube videos' }, { status: 500 });
  }
}
