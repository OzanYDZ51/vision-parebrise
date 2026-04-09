import { NextRequest, NextResponse } from 'next/server';
import { createBookingEvent } from '@/lib/google-calendar';

interface ContactBody {
  name?: string;
  zip?: string;
  phone?: string;
  service?: string;
  serviceLabel?: string;
  date?: string;
  time?: string;
  message?: string;
}

// TODO: Replace with Vision Pare-Brise CRM webhook URL
const CRM_WEBHOOK_URL = process.env.CRM_WEBHOOK_URL || '';

async function sendToCRM(payload: Record<string, unknown>) {
  if (!CRM_WEBHOOK_URL) return;
  try {
    const res = await fetch(CRM_WEBHOOK_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    });
    if (!res.ok) {
      console.error('CRM webhook failed:', res.status, await res.text().catch(() => ''));
    }
  } catch (err) {
    console.error('CRM webhook error:', err);
  }
}

export async function POST(request: NextRequest) {
  try {
    const body: ContactBody = await request.json();
    const { name, zip, phone, service, serviceLabel, date, time, message } = body;

    if (!name || name.trim().length < 2) {
      return NextResponse.json({ success: false, message: 'Nom invalide.' }, { status: 400 });
    }
    if (!phone || !/^(?:(?:\+33|0)\s?[1-9])(?:[\s.\-]?\d{2}){4}$/.test(phone.trim())) {
      return NextResponse.json({ success: false, message: 'Numéro de téléphone invalide.' }, { status: 400 });
    }
    if (!service) {
      return NextResponse.json({ success: false, message: 'Service non sélectionné.' }, { status: 400 });
    }
    if (!date || !time) {
      return NextResponse.json({ success: false, message: 'Créneau non sélectionné.' }, { status: 400 });
    }

    let eventId: string | null = null;
    try {
      eventId = await createBookingEvent({
        date,
        time,
        name: name.trim(),
        phone: phone.trim(),
        service: serviceLabel || service,
        message: message?.trim(),
      });
    } catch (err) {
      console.error('Google Calendar event creation failed:', err);
    }

    console.log('New booking:', {
      name: name.trim(),
      zip: zip?.trim() || '',
      phone: phone.trim(),
      service, date, time,
      message: message?.trim() || '',
      calendarEventId: eventId,
      timestamp: new Date().toISOString(),
    });

    const fullName = name.trim();
    const spaceIdx = fullName.indexOf(' ');
    const firstName = spaceIdx === -1 ? fullName : fullName.slice(0, spaceIdx);
    const lastName = spaceIdx === -1 ? '' : fullName.slice(spaceIdx + 1);

    await sendToCRM({
      first_name: firstName,
      last_name: lastName,
      phone: phone.trim(),
      city: zip?.trim() || '',
      company: 'visionparebrise.fr',
      source: 'Site web visionparebrise.fr',
      service: serviceLabel || service || '',
      service_id: service || '',
      rdv_date: date || '',
      rdv_time: time || '',
      rdv_datetime: date && time ? `${date} ${time}` : '',
      zip: zip?.trim() || '',
      message: message?.trim() || '',
      google_calendar_event_id: eventId || '',
      submitted_at: new Date().toISOString(),
    });

    return NextResponse.json({ success: true, message: 'Rendez-vous confirmé.' });
  } catch {
    return NextResponse.json({ success: false, message: 'Erreur serveur. Veuillez réessayer.' }, { status: 500 });
  }
}
