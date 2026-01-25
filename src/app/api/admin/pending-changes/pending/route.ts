import { NextResponse } from 'next/server';
import axios from 'axios';

const BACKEND_URL = process.env.BACKEND_URL || 'http://localhost:3001';

export async function GET(request: Request) {
  try {
    const cookieHeader = request.headers.get('cookie');

    if (!cookieHeader) {
      return NextResponse.json({ error: 'Not authenticated' }, { status: 401 });
    }

    // Get all pending changes (admin only)
    const response = await axios.get(`${BACKEND_URL}/api/pending-changes/pending`, {
      headers: {
        'Cookie': cookieHeader,
      },
      validateStatus: () => true,
    });

    if (response.status !== 200) {
      return NextResponse.json(response.data, { status: response.status });
    }

    return NextResponse.json(response.data);
  } catch (error) {
    console.error('Error fetching pending changes:', error);
    return NextResponse.json({ error: 'Failed to fetch pending changes' }, { status: 500 });
  }
}
