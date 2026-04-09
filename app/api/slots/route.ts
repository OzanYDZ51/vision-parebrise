import { NextRequest, NextResponse } from 'next/server';
import { getAvailableSlots, generateSlots } from '@/lib/google-calendar';

export async function GET(request: NextRequest) {
  const date = request.nextUrl.searchParams.get('date');

  if (!date || !/^\d{4}-\d{2}-\d{2}$/.test(date)) {
    return NextResponse.json({ error: 'Paramètre date requis (YYYY-MM-DD)' }, { status: 400 });
  }

  const today = new Date().toLocaleDateString('en-CA', { timeZone: 'Europe/Paris' });
  if (date < today) {
    return NextResponse.json({ slots: [] });
  }

  try {
    const slots = await getAvailableSlots(date);
    return NextResponse.json({ slots });
  } catch (err: unknown) {
    console.error('Google Calendar API error:', err);
    const allSlots = generateSlots();
    const now = new Date();
    const minTime = new Date(now.getTime() + 30 * 60 * 1000);

    const fallbackSlots = allSlots.filter(slot => {
      const utc = new Date(`${date}T${slot}:00Z`);
      const parisStr = utc.toLocaleString('en-US', { timeZone: 'Europe/Paris' });
      const parisLocal = new Date(parisStr);
      const offsetMs = utc.getTime() - parisLocal.getTime();
      const slotDate = new Date(utc.getTime() - offsetMs);
      return slotDate > minTime;
    });

    return NextResponse.json({ slots: fallbackSlots, fallback: true });
  }
}
