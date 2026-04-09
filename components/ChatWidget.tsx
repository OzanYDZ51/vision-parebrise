'use client';

import { useState } from 'react';
import { MessageCircle, X, Phone, Calendar, ArrowRight, ChevronLeft } from 'lucide-react';
import { COMPANY } from '@/lib/constants';
import EyeMascot from './EyeMascot';

type FlowKey = 'impact' | 'remplacement' | 'assurance' | 'offre' | 'rdv' | 'autre';

const FLOWS: Record<FlowKey, { question: string; answer: string; cta?: { label: string; href: string } }> = {
  impact: {
    question: "J'ai un impact sur mon pare-brise",
    answer: "Si l'impact est plus petit qu'une pièce de 2€ et hors du champ de vision, il est réparable en 30 minutes. C'est 100% gratuit avec votre assurance, sans franchise !",
    cta: { label: 'Prendre RDV', href: '/prendre-rdv' },
  },
  remplacement: {
    question: 'Mon pare-brise est fissuré/cassé',
    answer: "Pas de panique ! On se déplace chez vous pour le remplacer en environ 1h. Avec notre offre, vous pouvez bénéficier de jusqu'à 250€ offerts et la franchise est offerte.",
    cta: { label: 'Prendre RDV', href: '/prendre-rdv' },
  },
  assurance: {
    question: 'Comment ça marche avec mon assurance ?',
    answer: "C'est très simple : on gère tout le dossier avec votre assureur. Vous n'avancez aucun frais (tiers payant intégral). Toutes les compagnies d'assurance sont acceptées.",
  },
  offre: {
    question: "C'est quoi l'offre 250€ ?",
    answer: "Pour chaque remplacement de pare-brise, VISION PARE-BRISE vous offre jusqu'à 250€ par virement bancaire + votre franchise est prise en charge. Dans la majorité des cas, c'est 0€ à payer !",
    cta: { label: 'En profiter', href: '/prendre-rdv' },
  },
  rdv: {
    question: 'Je veux prendre rendez-vous',
    answer: "Super ! Vous pouvez réserver votre créneau en ligne en 2 minutes, ou nous appeler directement. On intervient 7j/7 dans toute la Sarthe.",
    cta: { label: 'Réserver en ligne', href: '/prendre-rdv' },
  },
  autre: {
    question: 'Autre question',
    answer: `N'hésitez pas à nous appeler au ${COMPANY.phone}, nous serons ravis de vous répondre ! Disponible 7j/7 de 9h à 17h.`,
  },
};

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [view, setView] = useState<'menu' | FlowKey>('menu');

  const reset = () => setView('menu');

  return (
    <>
      {/* Toggle button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-20 lg:bottom-6 right-4 z-50 w-14 h-14 rounded-full bg-primary text-white shadow-lg hover:shadow-xl hover:scale-105 transition-all flex items-center justify-center"
          aria-label="Ouvrir le chat"
        >
          <MessageCircle className="w-6 h-6" />
        </button>
      )}

      {/* Chat panel */}
      {isOpen && (
        <div className="fixed bottom-20 lg:bottom-6 right-4 z-50 w-[340px] max-h-[480px] bg-white rounded-[24px] shadow-2xl border border-border overflow-hidden animate-slide-in flex flex-col">
          {/* Header */}
          <div className="bg-teal-gradient p-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <EyeMascot size={32} variant="happy" animate={false} />
              <div>
                <p className="text-white font-bold text-sm">{COMPANY.name}</p>
                <p className="text-white/60 text-xs">En ligne — Réponse instantanée</p>
              </div>
            </div>
            <button onClick={() => { setIsOpen(false); reset(); }} className="text-white/80 hover:text-white" aria-label="Fermer le chat">
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Body */}
          <div className="flex-1 overflow-y-auto p-4">
            {view === 'menu' ? (
              <div>
                <div className="bg-primary-light rounded-2xl p-3 mb-4">
                  <p className="text-sm text-text">
                    Bonjour ! Comment puis-je vous aider ? 😊
                  </p>
                </div>
                <div className="flex flex-col gap-2">
                  {(Object.keys(FLOWS) as FlowKey[]).map((key) => (
                    <button
                      key={key}
                      onClick={() => setView(key)}
                      className="w-full text-left px-4 py-3 rounded-2xl border border-border hover:border-primary hover:bg-primary-light transition-all text-sm font-medium text-text flex items-center justify-between group"
                    >
                      {FLOWS[key].question}
                      <ArrowRight className="w-4 h-4 text-text-muted group-hover:text-primary" />
                    </button>
                  ))}
                </div>
              </div>
            ) : (
              <div>
                {/* User message */}
                <div className="flex justify-end mb-3">
                  <div className="bg-primary text-white text-sm rounded-2xl rounded-br-md px-4 py-2.5 max-w-[85%]">
                    {FLOWS[view].question}
                  </div>
                </div>
                {/* Bot response */}
                <div className="flex gap-2 mb-4">
                  <EyeMascot size={24} variant="happy" animate={false} className="shrink-0 mt-1" />
                  <div className="bg-primary-light rounded-2xl rounded-tl-md px-4 py-2.5 max-w-[85%]">
                    <p className="text-sm text-text">{FLOWS[view].answer}</p>
                  </div>
                </div>
                {/* CTA */}
                {FLOWS[view].cta && (
                  <div className="flex justify-center mb-3">
                    <a href={FLOWS[view].cta!.href} className="btn-vision btn-accent text-sm !min-h-[40px] !py-2">
                      <Calendar className="w-4 h-4" /> {FLOWS[view].cta!.label}
                    </a>
                  </div>
                )}
                <button onClick={reset} className="flex items-center gap-1 text-sm text-primary font-medium hover:underline mx-auto">
                  <ChevronLeft className="w-4 h-4" /> Autre question
                </button>
              </div>
            )}
          </div>

          {/* Footer */}
          <div className="border-t border-border p-3 flex items-center justify-center gap-3">
            <a href={COMPANY.phoneLink} className="flex items-center gap-1.5 text-xs text-text-muted hover:text-primary transition-colors">
              <Phone className="w-3.5 h-3.5" /> {COMPANY.phone}
            </a>
          </div>
        </div>
      )}
    </>
  );
}
