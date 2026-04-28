import Link from 'next/link';
import Image from 'next/image';
import { Gift, Calendar, ArrowRight } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

interface OfferBannerProps {
  variant?: 'diagonal' | 'inline' | 'compact';
}

export default function OfferBanner({ variant = 'diagonal' }: OfferBannerProps) {
  if (variant === 'compact') {
    return (
      <div className="bg-primary-light border border-primary/20 rounded-[28px] p-6 text-center">
        <Gift className="w-8 h-8 text-accent mx-auto mb-2" />
        <p className="font-display font-bold text-xl text-text">Jusqu&apos;à 250€ offerts*</p>
        <p className="text-sm text-text-muted mt-1">+ franchise offerte pour tout remplacement</p>
        <Link href="/prendre-rdv" className="btn-vision btn-accent text-sm mt-4 !min-h-[40px] !py-2 !px-5">
          En profiter <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    );
  }

  if (variant === 'inline') {
    return (
      <ScrollReveal animation="fade-up">
        <div className="bg-teal-gradient rounded-[28px] p-8 md:p-10 text-white text-center">
          <Gift className="w-10 h-10 text-white/80 mx-auto mb-3" />
          <h3 className="font-display font-extrabold text-2xl md:text-3xl">Jusqu&apos;à 250€ offerts*</h3>
          <p className="text-white/60 mt-2">+ franchise offerte pour tout remplacement de pare-brise. Voir conditions.</p>
          <Link href="/prendre-rdv" className="btn-vision btn-accent mt-6">
            <Calendar className="w-5 h-5" /> Prendre rendez-vous
          </Link>
        </div>
      </ScrollReveal>
    );
  }

  // Diagonal variant (default)
  return (
    <section className="relative py-16 md:py-20 overflow-hidden bg-sunset-gradient" aria-label="Offre spéciale">
      <ScrollReveal animation="scale-in">
        <div className="max-w-[1200px] mx-auto px-5 md:px-8 relative z-10">
          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
            {/* Flyer image */}
            <div className="w-[220px] md:w-[280px] shrink-0">
              <Image
                src="/images/flyer-offre.jpg"
                alt="Offre Vision Pare-Brise — 200€ offerts ou trottinette électrique"
                width={1131}
                height={1600}
                className="w-full h-auto rounded-2xl shadow-2xl rotate-[-2deg] hover:rotate-0 transition-transform duration-500"
              />
            </div>
            {/* Text */}
            <div className="text-center md:text-left flex-1">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm text-white text-sm font-semibold mb-6">
                <Gift className="w-4 h-4" /> Offre exclusive
              </div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-extrabold text-white leading-tight">
                Jusqu&apos;à 250€ offerts*
              </h2>
              <p className="text-white/70 text-lg mt-4 max-w-[500px]">
                + franchise offerte pour tout remplacement de pare-brise. Sans avance de frais, toutes assurances.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mt-8 justify-center md:justify-start">
                <Link href="/prendre-rdv" className="btn-vision btn-white text-base">
                  <Calendar className="w-5 h-5" /> Prendre rendez-vous
                </Link>
              </div>
              <p className="text-white/50 text-xs mt-6">*Voir conditions en agence. Offre valable dans la limite des stocks.</p>
            </div>
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
}
