import { NextRequest, NextResponse } from 'next/server';
import { cookies } from 'next/headers';

const NEXT_PUBLIC_BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3001';

export async function GET() {
  try {
    const cookieStore = await cookies();
    const token = cookieStore.get('admin_session');

    const response = await fetch(`${NEXT_PUBLIC_BASE_URL}/api/youtube-videos/admin`, {
      method: 'GET',
      headers: {
        'Cookie': token ? `admin_session=${token.value}` : '',
      },
    });

    const data = await response.json();
    return NextResponse.json(data, { status: response.status });
  } catch (error) {
    console.error('Error fetching YouTube videos:', error);
    return NextResponse.json({ error: 'Failed to fetch YouTube videos' }, { status: 500 });
  }
}

export async function POST(request: NextRequest) {
  try {
    const cookieStore = await cookies();
    const token = cookieStore.get('admin_session');
    const body = await request.json();

    const response = await fetch(`${NEXT_PUBLIC_BASE_URL}/api/youtube-videos`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Cookie': token ? `admin_session=${token.value}` : '',
      },
      body: JSON.stringify(body),
      credentials: 'include',
    });

    const data = await response.json();
    return NextResponse.json(data, { status: response.status });
  } catch (error) {
    console.error('Error creating YouTube video:', error);
    return NextResponse.json({ error: 'Failed to create YouTube video' }, { status: 500 });
  }
}
