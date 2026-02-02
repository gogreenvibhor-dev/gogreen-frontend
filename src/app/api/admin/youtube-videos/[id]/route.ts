import { NextRequest, NextResponse } from 'next/server';
import { cookies } from 'next/headers';

const NEXT_PUBLIC_BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3001';

export async function PATCH(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const cookieStore = await cookies();
    const token = cookieStore.get('admin_session');
    const { id } = await params;
    const body = await request.json();

    const response = await fetch(`${NEXT_PUBLIC_BASE_URL}/api/youtube-videos/${id}`, {
      method: 'PATCH',
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
    console.error('Error updating YouTube video:', error);
    return NextResponse.json({ error: 'Failed to update YouTube video' }, { status: 500 });
  }
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const cookieStore = await cookies();
    const token = cookieStore.get('admin_session');
    const { id } = await params;

    const response = await fetch(`${NEXT_PUBLIC_BASE_URL}/api/youtube-videos/${id}`, {
      method: 'DELETE',
      headers: {
        'Cookie': token ? `admin_session=${token.value}` : '',
      },
      credentials: 'include',
    });

    const data = await response.json();
    return NextResponse.json(data, { status: response.status });
  } catch (error) {
    console.error('Error deleting YouTube video:', error);
    return NextResponse.json({ error: 'Failed to delete YouTube video' }, { status: 500 });
  }
}
