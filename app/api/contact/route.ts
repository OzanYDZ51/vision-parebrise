import { NextRequest, NextResponse } from 'next/server';
import { createBookingEvent } from '@/lib/google-calendar';

interface ContactBody {
  name?: string;
  zip?: string;
  phone?: string;
  email?: string;
  service?: string;
  serviceLabel?: string;
  date?: string;
  time?: string;
  message?: string;
  website?: string; // honeypot anti-spam
}

// CRM Onify — webhook de réception des leads.
// La valeur par défaut garantit que les leads partent même si la variable d'env
// n'est pas définie sur Vercel (.env*.local n'est pas déployé). CRM_WEBHOOK_URL
// permet de surcharger (ex. environnement de test).
const CRM_WEBHOOK_URL =
  process.env.CRM_WEBHOOK_URL ||
  'https://app.onify.fr/api/v1/lead-webhook/5f2856d08be0ff4a1c9b24ca0aa84641';

const CRM_TIMEOUT_MS = 10_000;
const CRM_MAX_ATTEMPTS = 3;

type CrmResult = { ok: boolean; leadId?: unknown; error?: string };

async function sendToCRM(payload: Record<string, unknown>): Promise<CrmResult> {
  if (!CRM_WEBHOOK_URL) return { ok: false, error: 'CRM_WEBHOOK_URL non configurée' };

  let lastError = '';
  for (let attempt = 1; attempt <= CRM_MAX_ATTEMPTS; attempt++) {
    const controller = new AbortController();
    const timer = setTimeout(() => controller.abort(), CRM_TIMEOUT_MS);
    try {
      const res = await fetch(CRM_WEBHOOK_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
        signal: controller.signal,
      });
      const text = await res.text().catch(() => '');
      if (res.ok) {
        let leadId: unknown;
        try { leadId = JSON.parse(text)?.lead_id; } catch { /* réponse non-JSON, on ignore */ }
        return { ok: true, leadId };
      }
      lastError = `HTTP ${res.status}: ${text.slice(0, 300)}`;
    } catch (err) {
      lastError = err instanceof Error ? err.message : String(err);
    } finally {
      clearTimeout(timer);
    }
    // backoff léger entre les tentatives (sauf après la dernière)
    if (attempt < CRM_MAX_ATTEMPTS) {
      await new Promise(r => setTimeout(r, 400 * attempt));
    }
  }

  console.error(`[CRM] Échec d'envoi après ${CRM_MAX_ATTEMPTS} tentatives — ${lastError}`);
  return { ok: false, error: lastError };
}

export async function POST(request: NextRequest) {
  try {
    const body: ContactBody = await request.json();
    const { name, zip, phone, email, service, serviceLabel, date, time, message, website } = body;

    // Honeypot : un bot qui remplit le champ caché "website" est rejeté silencieusement.
    if (website && website.trim().length > 0) {
      return NextResponse.json({ success: true, message: 'Rendez-vous confirmé.' });
    }

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

    const cleanName = name.trim();
    const cleanPhone = phone.trim();
    const cleanZip = zip?.trim() || '';
    const cleanEmail = email?.trim() || '';
    const cleanMessage = message?.trim() || '';
    const cleanServiceLabel = serviceLabel || service;

    const spaceIdx = cleanName.indexOf(' ');
    const firstName = spaceIdx === -1 ? cleanName : cleanName.slice(0, spaceIdx);
    const lastName = spaceIdx === -1 ? '' : cleanName.slice(spaceIdx + 1);

    // Création du RDV dans Google Calendar (best-effort, ne bloque jamais le lead).
    let eventId: string | null = null;
    try {
      eventId = await createBookingEvent({
        date,
        time,
        name: cleanName,
        phone: cleanPhone,
        service: cleanServiceLabel,
        message: cleanMessage,
      });
    } catch (err) {
      console.error('Google Calendar event creation failed:', err);
    }

    // Résumé lisible : garantit que tout le contexte est visible dans le CRM,
    // même si certains champs structurés ne sont pas mappés côté Onify.
    const recap = [
      `Demande de RDV — ${cleanServiceLabel}`,
      `Créneau souhaité : ${date} à ${time}`,
      cleanZip ? `Code postal : ${cleanZip}` : '',
      cleanMessage ? `Précisions client : ${cleanMessage}` : '',
    ].filter(Boolean).join('\n');

    const submittedAt = new Date().toISOString();

    const crmPayload = {
      // Identité
      name: cleanName,
      first_name: firstName,
      last_name: lastName,
      phone: cleanPhone,
      email: cleanEmail,
      // Localisation
      zip: cleanZip,
      postal_code: cleanZip,
      // Demande
      service: cleanServiceLabel,
      service_id: service,
      rdv_date: date,
      rdv_time: time,
      rdv_datetime: `${date} ${time}`,
      message: recap,
      // Méta
      source: 'Site web — Prise de RDV en ligne',
      company: 'VISION PARE-BRISE',
      google_calendar_event_id: eventId || '',
      submitted_at: submittedAt,
    };

    const crm = await sendToCRM(crmPayload);

    // Trace serveur : en cas d'échec CRM, on logge le payload complet pour
    // pouvoir récupérer le lead manuellement depuis les logs.
    if (crm.ok) {
      console.log('[LEAD] Envoyé au CRM', { lead_id: crm.leadId, name: cleanName, phone: cleanPhone, service, date, time });
    } else {
      console.error('[LEAD] NON ENVOYÉ AU CRM — récupération manuelle requise:', JSON.stringify(crmPayload));
    }

    return NextResponse.json({ success: true, message: 'Rendez-vous confirmé.' });
  } catch {
    return NextResponse.json({ success: false, message: 'Erreur serveur. Veuillez réessayer.' }, { status: 500 });
  }
}
