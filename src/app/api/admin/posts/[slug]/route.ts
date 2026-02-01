import { NextRequest, NextResponse } from 'next/server';
import { cookies } from 'next/headers';

const NEXT_PUBLIC_BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3001';

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ slug: string }> }
) {
  try {
    const cookieStore = await cookies();
    const token = cookieStore.get('admin_session');
    const { slug } = await params;

    const response = await fetch(`${NEXT_PUBLIC_BASE_URL}/api/posts/${slug}`, {
      method: 'GET',
      headers: {
        'Cookie': token ? `admin_session=${token.value}` : '',
      },
    });

    const data = await response.json();
    return NextResponse.json(data, { status: response.status });
  } catch (error) {
    console.error('Error fetching post:', error);
    return NextResponse.json({ error: 'Failed to fetch post' }, { status: 500 });
  }
}

export async function PUT(
  request: NextRequest,
  { params }: { params: Promise<{ slug: string }> }
) {
  try {
    const cookieStore = await cookies();
    const token = cookieStore.get('admin_session');
    const body = await request.json();
    const { slug } = await params;

    const response = await fetch(`${NEXT_PUBLIC_BASE_URL}/api/posts/${slug}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'Cookie': token ? `admin_session=${token.value}` : '',
      },
      body: JSON.stringify(body),
    });

    const data = await response.json();
    return NextResponse.json(data, { status: response.status });
  } catch (error) {
    console.error('Error updating post:', error);
    return NextResponse.json({ error: 'Failed to update post' }, { status: 500 });
  }
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: Promise<{ slug: string }> }
) {
  try {
    const cookieStore = await cookies();
    const token = cookieStore.get('admin_session');
    const { slug } = await params;

    const response = await fetch(`${NEXT_PUBLIC_BASE_URL}/api/posts/${slug}`, {
      method: 'DELETE',
      headers: {
        'Cookie': token ? `admin_session=${token.value}` : '',
      },
    });

    if (response.status === 204) {
      return new NextResponse(null, { status: 204 });
    }

    const data = await response.json();
    return NextResponse.json(data, { status: response.status });
  } catch (error) {
    console.error('Error deleting post:', error);
    return NextResponse.json({ error: 'Failed to delete post' }, { status: 500 });
  }
}
