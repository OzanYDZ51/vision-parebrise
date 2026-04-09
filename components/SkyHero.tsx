'use client';

import Link from 'next/link';
import { Phone, Calendar, Star } from 'lucide-react';
import { COMPANY } from '@/lib/constants';
import FloatingClouds from './FloatingClouds';
import EyeMascot from './EyeMascot';
import AnimatedCounter from './AnimatedCounter';

interface SkyHeroProps {
  title?: string;
  subtitle?: string;
  variant?: 'homepage' | 'service' | 'zone';
}

export default function SkyHero({ title, subtitle, variant = 'homepage' }: SkyHeroProps) {
  if (variant !== 'homepage') {
    return (
      <section className="relative bg-teal-gradient pt-[100px] pb-16 overflow-hidden">
        <FloatingClouds count={3} />
        <div className="max-w-[1200px] mx-auto px-5 md:px-8 relative z-10">
          <h1 className="text-3xl md:text-5xl font-display font-extrabold text-white leading-tight">
            {title}
          </h1>
          {subtitle && (
            <p className="mt-4 text-white/70 text-lg max-w-[600px] leading-relaxed">{subtitle}</p>
          )}
        </div>
      </section>
    );
  }

  return (
    <section className="relative min-h-[100vh] flex items-center justify-center bg-sky-gradient overflow-hidden">
      <FloatingClouds count={7} />

      {/* Decorative circles */}
      <div className="absolute top-[15%] right-[10%] w-[300px] h-[300px] border border-white/5 rounded-full animate-rotate-slow" />
      <div className="absolute bottom-[20%] left-[5%] w-[200px] h-[200px] border border-white/5 rounded-full animate-rotate-slow" style={{ animationDirection: 'reverse' }} />

      <div className="max-w-[1200px] mx-auto px-5 md:px-8 relative z-10 text-center py-32">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/10 text-white/80 text-sm mb-8">
          <span className="flex items-center gap-1">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
            ))}
          </span>
          <span>
            <AnimatedCounter end={4.9} decimals={1} className="font-bold text-white" />/5 sur{' '}
            <AnimatedCounter end={87} className="font-bold text-white" /> avis
          </span>
        </div>

        <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-extrabold text-white leading-[1.1] max-w-[800px] mx-auto">
          Votre pare-brise,{' '}
          <span className="text-primary-light">on s&apos;en occupe.</span>
        </h1>

        <p className="mt-6 text-white/60 text-lg md:text-xl max-w-[600px] mx-auto leading-relaxed">
          Intervention à domicile dans toute la Sarthe. Prise en charge par votre assurance, 0€ à avancer.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4 mt-10">
          <Link href="/prendre-rdv" className="btn-vision btn-accent text-base animate-pulse-soft">
            <Calendar className="w-5 h-5" /> Prendre rendez-vous
          </Link>
          <a href={COMPANY.phoneLink} className="btn-vision btn-outline-white text-base">
            <Phone className="w-5 h-5" /> {COMPANY.phone}
          </a>
        </div>

        {/* Mascot */}
        <div className="mt-12 flex justify-center">
          <EyeMascot size={80} variant="happy" />
        </div>
      </div>
    </section>
  );
}
