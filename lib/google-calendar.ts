import { google } from 'googleapis';

const SCOPES = ['https://www.googleapis.com/auth/calendar'];
const CALENDAR_ID = process.env.GOOGLE_CALENDAR_ID || 'direction@visionparebrise.fr';
const TZ = 'Europe/Paris';

const SLOT_START_HOUR = 9;
const SLOT_END_HOUR = 16.5;
const SLOT_INTERVAL = 1.5;
const MIN_ADVANCE_MINUTES = 30;

export function generateSlots(): string[] {
  const slots: string[] = [];
  for (let h = SLOT_START_HOUR; h <= SLOT_END_HOUR; h += SLOT_INTERVAL) {
    const hours = Math.floor(h);
    const minutes = (h % 1) * 60;
    slots.push(`${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}`);
  }
  return slots;
}

function parisDate(dateStr: string, time: string): Date {
  const formatter = new Intl.DateTimeFormat('en-US', {
    timeZone: TZ,
    year: 'numeric', month: '2-digit', day: '2-digit',
    hour: '2-digit', minute: '2-digit', second: '2-digit',
    hour12: false,
  });
  const utcDate = new Date(`${dateStr}T${time}:00Z`);
  const parisStr = formatter.format(utcDate);
  const parisTime = new Date(parisStr);
  const offsetMs = utcDate.getTime() - parisTime.getTime();
  return new Date(utcDate.getTime() - offsetMs);
}

function parisNow(): Date {
  return new Date();
}

function getCalendarClient() {
  const credentials = process.env.GOOGLE_SERVICE_ACCOUNT_KEY;
  if (!credentials) throw new Error('GOOGLE_SERVICE_ACCOUNT_KEY env var not set');
  const key = JSON.parse(credentials);
  const auth = new google.auth.JWT({
    email: key.client_email,
    key: key.private_key,
    scopes: SCOPES,
  });
  return google.calendar({ version: 'v3', auth });
}

export async function getAvailableSlots(dateStr: string): Promise<string[]> {
  const calendar = getCalendarClient();
  const allSlots = generateSlots();

  const dayStart = parisDate(dateStr, '00:00');
  const dayEnd = parisDate(dateStr, '23:59');

  const res = await calendar.freebusy.query({
    requestBody: {
      timeMin: dayStart.toISOString(),
      timeMax: dayEnd.toISOString(),
      timeZone: TZ,
      items: [{ id: CALENDAR_ID }],
    },
  });

  const busyPeriods = res.data.calendars?.[CALENDAR_ID]?.busy || [];
  const now = parisNow();
  const minTime = new Date(now.getTime() + MIN_ADVANCE_MINUTES * 60 * 1000);

  return allSlots.filter(slot => {
    const slotStart = parisDate(dateStr, slot);
    const slotEnd = new Date(slotStart.getTime() + SLOT_INTERVAL * 60 * 60 * 1000);
    if (slotStart <= minTime) return false;
    for (const busy of busyPeriods) {
      const busyStart = new Date(busy.start!);
      const busyEnd = new Date(busy.end!);
      if (slotStart < busyEnd && slotEnd > busyStart) return false;
    }
    return true;
  });
}

export async function createBookingEvent(params: {
  date: string;
  time: string;
  name: string;
  phone: string;
  service: string;
  message?: string;
}): Promise<string | null> {
  const calendar = getCalendarClient();
  const { date, time, name, phone, service, message } = params;

  const startDateTime = `${date}T${time}:00`;
  const [hh, mm] = time.split(':').map(Number);
  const endMinutes = hh * 60 + mm + SLOT_INTERVAL * 60;
  const endHH = Math.floor(endMinutes / 60).toString().padStart(2, '0');
  const endMM = (endMinutes % 60).toString().padStart(2, '0');
  const endDateTime = `${date}T${endHH}:${endMM}:00`;

  const event = await calendar.events.insert({
    calendarId: CALENDAR_ID,
    requestBody: {
      summary: `RDV Vision Pare-Brise — ${name}`,
      description: [
        `Client : ${name}`,
        `Téléphone : ${phone}`,
        `Service : ${service}`,
        message ? `Précisions : ${message}` : '',
        '',
        'Réservé via le site visionparebrise.fr',
      ].filter(Boolean).join('\n'),
      start: { dateTime: startDateTime, timeZone: TZ },
      end: { dateTime: endDateTime, timeZone: TZ },
      reminders: {
        useDefault: false,
        overrides: [
          { method: 'popup', minutes: 60 },
          { method: 'popup', minutes: 15 },
        ],
      },
    },
  });

  return event.data.id || null;
}
