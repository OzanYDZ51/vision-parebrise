'use client';

import { useState, useRef, useCallback, useEffect } from 'react';
import { COMPANY } from '@/lib/constants';
import {
  Phone, CheckCircle, Loader2, ChevronLeft, ChevronDown, ChevronRight,
  Shield, ArrowRight, Gift, Calendar, Clock
} from 'lucide-react';
import EyeMascot from './EyeMascot';

interface BookingData {
  service: string;
  serviceLabel: string;
  date: string;
  time: string;
  name: string;
  zip: string;
  phone: string;
  message: string;
}
type StepErrors = Record<string, string>;

const VITRAGE_OPTIONS = [
  { id: 'pare-brise', label: 'Pare-brise' },
  { id: 'lunette-arriere', label: 'Lunette arrière' },
  { id: 'vitre-laterale', label: 'Vitres latérales' },
] as const;

const OTHER_SERVICES = [
  { id: 'toit-ouvrant', label: 'Toit ouvrant / panoramique' },
  { id: 'calibrage-adas', label: 'Calibrage caméra ADAS' },
  { id: 'reparation-impact', label: "Réparation d'impact" },
  { id: 'custode', label: 'Custode' },
  { id: 'autre', label: 'Autre / Je ne sais pas' },
] as const;

const STEPS = [
  { num: 1, label: 'Vitrage' },
  { num: 2, label: 'Créneau' },
  { num: 3, label: 'Coordonnées' },
] as const;

const JOURS = ['Dim', 'Lun', 'Mar', 'Mer', 'Jeu', 'Ven', 'Sam'];
const MOIS = ['janvier', 'février', 'mars', 'avril', 'mai', 'juin', 'juillet', 'août', 'septembre', 'octobre', 'novembre', 'décembre'];

function getNextDays(count: number) {
  const days: { dateStr: string; label: string; dayName: string; dayNum: number }[] = [];
  const now = new Date();
  for (let i = 0; i < count; i++) {
    const d = new Date(now);
    d.setDate(d.getDate() + i);
    const dateStr = d.toLocaleDateString('en-CA');
    const dayName = i === 0 ? 'Auj.' : i === 1 ? 'Dem.' : JOURS[d.getDay()];
    days.push({ dateStr, label: `${d.getDate()} ${MOIS[d.getMonth()]}`, dayName, dayNum: d.getDate() });
  }
  return days;
}

function formatDateFR(dateStr: string): string {
  const d = new Date(dateStr + 'T12:00:00');
  return `${JOURS[d.getDay()]} ${d.getDate()} ${MOIS[d.getMonth()]}`;
}

export default function BookingTunnel() {
  const [step, setStep] = useState(1);
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errors, setErrors] = useState<StepErrors>({});
  const [serverError, setServerError] = useState('');
  const [data, setData] = useState<BookingData>({
    service: '', serviceLabel: '', date: '', time: '', name: '', zip: '', phone: '', message: '',
  });
  const [showMessage, setShowMessage] = useState(false);
  const [otherOpen, setOtherOpen] = useState(false);
  const [availableSlots, setAvailableSlots] = useState<string[]>([]);
  const [slotsLoading, setSlotsLoading] = useState(false);
  const [dayScrollIndex, setDayScrollIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const availableDays = getNextDays(14);

  const update = useCallback((fields: Partial<BookingData>) => {
    setData(prev => ({ ...prev, ...fields }));
    setErrors(prev => {
      const next = { ...prev };
      for (const key of Object.keys(fields)) delete next[key];
      return next;
    });
  }, []);

  const scrollToTop = () => containerRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  const selectService = (id: string, label: string) => { update({ service: id, serviceLabel: label }); setErrors({}); setOtherOpen(false); };
  const goTo = (s: number) => { setStep(s); scrollToTop(); };

  const goNext = () => {
    if (step === 1 && !data.service) { setErrors({ service: 'Sélectionnez le vitrage concerné' }); return; }
    if (step === 2) {
      if (!data.date) { setErrors({ date: 'Choisissez une date' }); return; }
      if (!data.time) { setErrors({ time: 'Choisissez un créneau horaire' }); return; }
    }
    setStep(s => s + 1);
    scrollToTop();
  };

  const validateStep3 = (): StepErrors => {
    const errs: StepErrors = {};
    if (!data.name || data.name.trim().length < 2) errs.name = 'Entrez votre nom';
    if (!data.zip || !/^\d{5}$/.test(data.zip.trim())) errs.zip = 'Code postal à 5 chiffres';
    if (!data.phone || !/^(?:(?:\+33|0)\s?[1-9])(?:[\s.\-]?\d{2}){4}$/.test(data.phone.trim()))
      errs.phone = 'Numéro à 10 chiffres (ex: 06 12 34 56 78)';
    return errs;
  };

  useEffect(() => {
    if (!data.date) return;
    setSlotsLoading(true);
    setAvailableSlots([]);
    update({ time: '' });
    fetch(`/api/slots?date=${data.date}`)
      .then(r => r.json())
      .then(res => setAvailableSlots(res.slots || []))
      .catch(() => setAvailableSlots([]))
      .finally(() => setSlotsLoading(false));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data.date]);

  const handleSubmit = async () => {
    const errs = validateStep3();
    setErrors(errs);
    if (Object.keys(errs).length) return;
    setStatus('loading'); setServerError('');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        body: JSON.stringify({
          name: data.name.trim(), zip: data.zip.trim(), phone: data.phone.trim(),
          service: data.service, serviceLabel: data.serviceLabel,
          date: data.date, time: data.time, message: data.message?.trim() || '',
        }),
        headers: { 'Content-Type': 'application/json' },
      });
      const result = await res.json();
      if (result.success) {
        setStatus('success');
        if (typeof window !== 'undefined' && typeof window.gtag === 'function')
          window.gtag('event', 'form_submit', { event_category: 'contact', event_label: 'booking_tunnel' });
      } else { setStatus('error'); setServerError(result.message || 'Erreur.'); }
    } catch { setStatus('error'); setServerError('Erreur. Réessayez ou appelez-nous.'); }
  };

  const inputCls = (field?: string) => `
    w-full px-5 py-4 bg-white border-2 rounded-2xl transition-all duration-200 text-base
    focus:border-primary focus:ring-4 focus:ring-primary/10 focus:outline-none placeholder:text-text-light
    ${field && errors[field] ? 'border-error bg-error/5' : 'border-border'}
  `;

  const ProgressBar = () => (
    <div className="flex items-center justify-center gap-2 mb-10">
      {STEPS.map((s, i) => {
        const isActive = step === s.num;
        const isDone = step > s.num || status === 'success';
        return (
          <div key={s.num} className="flex items-center gap-2">
            {i > 0 && <div className={`w-8 md:w-12 h-[2px] rounded-full transition-colors duration-300 ${isDone ? 'bg-primary' : 'bg-border'}`} />}
            <button type="button" onClick={() => isDone ? goTo(s.num) : undefined} disabled={!isDone} className="flex items-center gap-1.5">
              <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold transition-all duration-300
                ${isDone ? 'bg-primary text-white cursor-pointer' : ''}
                ${isActive ? 'bg-primary text-white ring-4 ring-primary/15' : ''}
                ${!isActive && !isDone ? 'bg-bg-alt text-text-light border border-border' : ''}`}>
                {isDone ? <CheckCircle className="w-3.5 h-3.5" /> : s.num}
              </div>
              <span className={`text-xs font-semibold hidden sm:inline ${isActive || isDone ? 'text-primary' : 'text-text-light'}`}>{s.label}</span>
            </button>
          </div>
        );
      })}
    </div>
  );

  if (status === 'success') {
    return (
      <div ref={containerRef} className="max-w-lg mx-auto text-center">
        <div className="bg-white rounded-[28px] p-8 md:p-12 border border-border relative overflow-hidden">
          <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-success via-primary to-success" />
          <EyeMascot size={180} variant="happy" className="mx-auto mb-4" animate={false} />
          <h2 className="text-2xl md:text-3xl font-display font-extrabold text-text mb-3">Rendez-vous confirmé !</h2>
          <p className="text-text-muted mb-1">Merci <b className="text-text">{data.name}</b></p>
          <p className="text-text-muted mb-2 text-sm">Votre créneau est réservé. Un technicien vous rappelle pour confirmer les détails.</p>
          <p className="text-primary font-bold text-sm mb-8">Vous bénéficiez de jusqu&apos;à 250€ offerts* + franchise offerte*.</p>
          <div className="bg-bg-alt rounded-2xl p-4 text-left text-sm space-y-2 mb-8">
            {[
              { l: 'Vitrage', v: data.serviceLabel },
              { l: 'Date', v: formatDateFR(data.date) },
              { l: 'Heure', v: data.time },
              { l: 'Code postal', v: data.zip },
              { l: 'Téléphone', v: data.phone },
            ].map(r => (
              <div key={r.l} className="flex justify-between"><span className="text-text-muted">{r.l}</span><b className="text-text">{r.v}</b></div>
            ))}
          </div>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a href={COMPANY.phoneLink} className="btn-vision btn-primary"><Phone className="w-4 h-4" /> {COMPANY.phone}</a>
            <a href="/" className="btn-vision btn-secondary">Retour à l&apos;accueil</a>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div ref={containerRef}>
      <ProgressBar />

      {step === 1 && (
        <div className="flex flex-col items-center">
          <h1 className="font-display text-2xl md:text-3xl font-extrabold text-text mb-2 text-center">Sélectionnez le vitrage concerné</h1>
          <p className="text-text-muted text-sm mb-8 text-center">Quel vitrage de votre véhicule est endommagé ?</p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-6 mb-8 w-full max-w-[500px]">
            {VITRAGE_OPTIONS.map((opt) => {
              const isSelected = data.service === opt.id;
              return (
                <button key={opt.id} type="button" onClick={() => selectService(opt.id, opt.label)}
                  className={`flex-1 w-full sm:w-auto flex flex-col items-center gap-3 p-6 rounded-[20px] border-2 transition-all duration-200
                    ${isSelected ? 'border-primary bg-primary-light shadow-lg' : 'border-border bg-white hover:border-primary/40 hover:shadow-sm'}`}>
                  <div className={`w-14 h-14 rounded-full flex items-center justify-center ${isSelected ? 'bg-primary text-white' : 'bg-bg-alt text-text-muted'}`}>
                    <Shield className="w-7 h-7" />
                  </div>
                  <span className={`text-sm font-semibold ${isSelected ? 'text-primary' : 'text-text'}`}>{opt.label}</span>
                </button>
              );
            })}
          </div>
          <div className="w-full max-w-[340px] mb-8 relative">
            <button type="button" onClick={() => setOtherOpen(!otherOpen)}
              className={`w-full flex items-center justify-between px-5 py-3.5 rounded-xl border transition-all duration-200 text-sm
                ${OTHER_SERVICES.some(s => s.id === data.service) ? 'border-primary bg-primary/5 text-primary font-semibold' : 'border-border bg-white text-text-muted hover:border-primary/40'}`}>
              {OTHER_SERVICES.find(s => s.id === data.service)?.label || 'Autres prestations'}
              <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${otherOpen ? 'rotate-180' : ''}`} />
            </button>
            {otherOpen && (
              <div className="absolute top-full left-0 right-0 mt-1 bg-white border border-border rounded-xl shadow-lg overflow-hidden z-20">
                {OTHER_SERVICES.map((svc, i) => (
                  <button key={svc.id} type="button" onClick={() => selectService(svc.id, svc.label)}
                    className={`w-full text-left px-5 py-3 text-sm transition-colors
                      ${data.service === svc.id ? 'bg-primary/10 text-primary font-semibold' : 'text-text hover:bg-bg-alt'}
                      ${i < OTHER_SERVICES.length - 1 ? 'border-b border-border/50' : ''}`}>
                    {svc.label}
                  </button>
                ))}
              </div>
            )}
          </div>
          {errors.service && <p className="text-sm text-error mb-4 font-medium" role="alert">{errors.service}</p>}
          <button type="button" onClick={goNext} className="btn-vision btn-primary text-sm px-10">Suivant</button>
        </div>
      )}

      {step === 2 && (
        <div className="max-w-xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="font-display text-2xl md:text-3xl font-extrabold text-text mb-2">Choisissez votre créneau</h2>
            <p className="text-text-muted text-sm">Sélectionnez la date et l&apos;heure qui vous conviennent</p>
          </div>
          <div className="mb-6">
            <label className="block text-sm font-bold text-text mb-3">
              <Calendar className="w-4 h-4 inline-block mr-1.5 -mt-0.5 text-primary" /> Date
            </label>
            <div className="relative">
              {dayScrollIndex > 0 && (
                <button type="button" onClick={() => setDayScrollIndex(Math.max(0, dayScrollIndex - 4))}
                  className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-3 z-10 w-8 h-8 rounded-full bg-white border border-border shadow-md flex items-center justify-center hover:border-primary transition-colors">
                  <ChevronLeft className="w-4 h-4" />
                </button>
              )}
              {dayScrollIndex + 7 < availableDays.length && (
                <button type="button" onClick={() => setDayScrollIndex(Math.min(availableDays.length - 7, dayScrollIndex + 4))}
                  className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-3 z-10 w-8 h-8 rounded-full bg-white border border-border shadow-md flex items-center justify-center hover:border-primary transition-colors">
                  <ChevronRight className="w-4 h-4" />
                </button>
              )}
              <div className="flex gap-2 overflow-hidden">
                {availableDays.slice(dayScrollIndex, dayScrollIndex + 7).map((day) => {
                  const isSelected = data.date === day.dateStr;
                  return (
                    <button key={day.dateStr} type="button" onClick={() => update({ date: day.dateStr, time: '' })}
                      className={`flex-1 min-w-[70px] flex flex-col items-center py-3 px-2 rounded-xl border-2 transition-all duration-200
                        ${isSelected ? 'border-primary bg-primary text-white shadow-md' : 'border-border bg-white hover:border-primary/40 hover:shadow-sm'}`}>
                      <span className={`text-[10px] font-bold uppercase tracking-wide ${isSelected ? 'text-white/80' : 'text-text-light'}`}>{day.dayName}</span>
                      <span className={`text-lg font-extrabold ${isSelected ? 'text-white' : 'text-text'}`}>{day.dayNum}</span>
                    </button>
                  );
                })}
              </div>
            </div>
            {errors.date && <p className="text-sm text-error mt-2 font-medium" role="alert">{errors.date}</p>}
          </div>
          {data.date && (
            <div className="mb-8">
              <label className="block text-sm font-bold text-text mb-3">
                <Clock className="w-4 h-4 inline-block mr-1.5 -mt-0.5 text-primary" /> Créneau horaire
              </label>
              {slotsLoading ? (
                <div className="flex items-center justify-center py-8 text-text-muted">
                  <Loader2 className="w-5 h-5 animate-spin mr-2" /><span className="text-sm">Chargement des disponibilités...</span>
                </div>
              ) : availableSlots.length === 0 ? (
                <div className="text-center py-8 bg-bg-alt rounded-2xl">
                  <p className="text-text-muted text-sm font-medium">Aucun créneau disponible ce jour</p>
                  <p className="text-text-light text-xs mt-1">Essayez une autre date</p>
                </div>
              ) : (
                <div className="grid grid-cols-3 sm:grid-cols-4 gap-2">
                  {availableSlots.map((slot) => (
                    <button key={slot} type="button" onClick={() => update({ time: slot })}
                      className={`py-3 px-3 rounded-xl border-2 text-sm font-bold transition-all duration-200
                        ${data.time === slot ? 'border-primary bg-primary text-white shadow-md' : 'border-border bg-white text-text hover:border-primary/40'}`}>
                      {slot}
                    </button>
                  ))}
                </div>
              )}
              {errors.time && <p className="text-sm text-error mt-2 font-medium" role="alert">{errors.time}</p>}
            </div>
          )}
          <div className="flex justify-between items-center">
            <button type="button" onClick={() => goTo(1)} className="flex items-center gap-1 text-sm text-text-muted hover:text-primary transition-colors font-medium">
              <ChevronLeft className="w-4 h-4" /> Retour
            </button>
            <button type="button" onClick={goNext} className="btn-vision btn-primary text-sm px-10">Suivant <ArrowRight className="w-4 h-4" /></button>
          </div>
        </div>
      )}

      {step === 3 && (
        <div className="max-w-md mx-auto">
          <div className="flex flex-wrap justify-center gap-2 mb-6">
            <span className="inline-flex items-center gap-1.5 bg-primary/5 border border-primary/15 text-primary text-xs font-semibold px-3 py-1.5 rounded-full">
              <CheckCircle className="w-3 h-3" /> {data.serviceLabel}
            </span>
            <span className="inline-flex items-center gap-1.5 bg-primary/5 border border-primary/15 text-primary text-xs font-semibold px-3 py-1.5 rounded-full">
              <Calendar className="w-3 h-3" /> {formatDateFR(data.date)} à {data.time}
            </span>
          </div>
          <div className="text-center mb-8">
            <h2 className="font-display text-2xl md:text-3xl font-extrabold text-text mb-2">Dernière étape !</h2>
            <p className="text-text-muted text-sm">Vos coordonnées pour confirmer le rendez-vous</p>
          </div>
          {serverError && <div className="bg-error/5 border border-error/20 rounded-xl p-4 mb-6 text-error text-sm" role="alert">{serverError}</div>}
          <div className="absolute -left-[9999px] opacity-0 h-0 w-0 overflow-hidden" aria-hidden="true">
            <input type="text" name="website" id="website" tabIndex={-1} autoComplete="off" />
          </div>
          <div className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-bold text-text mb-2">Nom <span className="text-error">*</span></label>
              <input type="text" id="name" value={data.name} onChange={e => update({ name: e.target.value })} className={inputCls('name')} placeholder="Votre nom" autoComplete="name" />
              {errors.name && <p className="text-sm text-error mt-1.5" role="alert">{errors.name}</p>}
            </div>
            <div>
              <label htmlFor="zip" className="block text-sm font-bold text-text mb-2">Code postal <span className="text-error">*</span></label>
              <input type="text" id="zip" value={data.zip} onChange={e => update({ zip: e.target.value })} className={inputCls('zip')} placeholder="72100" inputMode="numeric" maxLength={5} autoComplete="postal-code" />
              {errors.zip && <p className="text-sm text-error mt-1.5" role="alert">{errors.zip}</p>}
            </div>
            <div>
              <label htmlFor="phone" className="block text-sm font-bold text-text mb-2">Téléphone <span className="text-error">*</span></label>
              <div className="relative">
                <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-text-light pointer-events-none" />
                <input type="tel" id="phone" value={data.phone} onChange={e => update({ phone: e.target.value })} className={`${inputCls('phone')} pl-12`} placeholder="06 12 34 56 78" inputMode="numeric" autoComplete="tel" />
              </div>
              {errors.phone && <p className="text-sm text-error mt-1.5" role="alert">{errors.phone}</p>}
            </div>
            {!showMessage ? (
              <button type="button" onClick={() => setShowMessage(true)} className="text-sm text-primary font-medium hover:underline">+ Ajouter une précision (optionnel)</button>
            ) : (
              <div>
                <label htmlFor="message" className="block text-sm font-bold text-text mb-2">Précisions <span className="text-text-light font-normal">(optionnel)</span></label>
                <textarea id="message" value={data.message} onChange={e => update({ message: e.target.value })}
                  className="w-full px-5 py-4 bg-white border-2 border-border rounded-2xl min-h-[80px] resize-y text-base focus:border-primary focus:ring-4 focus:ring-primary/10 focus:outline-none placeholder:text-text-light"
                  placeholder="Immatriculation, détails du dommage..." rows={2} autoFocus />
              </div>
            )}
            <div className="flex items-center gap-3 bg-primary/5 border border-primary/20 rounded-xl px-4 py-3">
              <Gift className="w-5 h-5 text-accent shrink-0" />
              <span className="text-sm text-text"><b className="text-primary">Jusqu&apos;à 250€ offerts* + franchise offerte*</b> pour toute prise de rendez-vous</span>
            </div>
            <div className="flex items-center gap-2 text-xs text-text-light bg-bg-alt rounded-xl px-4 py-3">
              <Shield className="w-4 h-4 text-success shrink-0" />
              <span>Vos données sont uniquement utilisées pour vous recontacter. Aucun engagement.</span>
            </div>
          </div>
          <div className="flex justify-between items-center mt-8">
            <button type="button" onClick={() => goTo(2)} className="flex items-center gap-1 text-sm text-text-muted hover:text-primary transition-colors font-medium">
              <ChevronLeft className="w-4 h-4" /> Retour
            </button>
            <button type="button" onClick={handleSubmit} disabled={status === 'loading'} className="btn-vision btn-accent text-sm disabled:opacity-60 disabled:cursor-not-allowed">
              {status === 'loading' ? <><Loader2 className="w-4 h-4 animate-spin" /> Envoi...</> : <>Prendre rendez-vous <ArrowRight className="w-4 h-4" /></>}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
