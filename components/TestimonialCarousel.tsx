'use client';

import { useState, useEffect, useCallback } from 'react';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';
import { TESTIMONIALS } from '@/lib/constants';
import type { Testimonial, GoogleStats } from '@/lib/google-reviews';
import ScrollReveal from './ScrollReveal';

interface TestimonialCarouselProps {
  testimonials?: readonly Testimonial[];
  stats?: GoogleStats | null;
}

export default function TestimonialCarousel({ testimonials, stats }: TestimonialCarouselProps = {}) {
  const items = testimonials && testimonials.length > 0 ? testimonials : TESTIMONIALS;
  const [current, setCurrent] = useState(0);
  const total = items.length;

  const next = useCallback(() => setCurrent((c) => (c + 1) % total), [total]);
  const prev = useCallback(() => setCurrent((c) => (c - 1 + total) % total), [total]);

  useEffect(() => {
    const interval = setInterval(next, 5000);
    return () => clearInterval(interval);
  }, [next]);

  const getIndex = (offset: number) => (current + offset + total) % total;

  return (
    <section className="py-20 overflow-hidden bg-sky-light" aria-labelledby="testimonials-title">
      <div className="max-w-[1200px] mx-auto px-5 md:px-8">
        <ScrollReveal animation="fade-up">
          <div className="text-center mb-12">
            <span className="section-label">Avis clients</span>
            <h2 id="testimonials-title" className="text-3xl md:text-4xl font-display font-extrabold text-text">
              Ce qu&apos;ils pensent <span className="text-primary">de nous</span>
            </h2>
            <p className="mt-3 text-text-muted">Nos clients dans la Sarthe nous font confiance. Voici pourquoi.</p>
            {stats && (
              <div className="mt-4 inline-flex items-center gap-2 text-sm text-text-muted">
                <span className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className={`w-4 h-4 ${i < Math.round(stats.rating) ? 'fill-amber-400 text-amber-400' : 'text-gray-200'}`} />
                  ))}
                </span>
                <span><span className="font-bold text-text">{stats.rating.toFixed(1)}</span>/5 sur <span className="font-bold text-text">{stats.total}</span> avis Google</span>
              </div>
            )}
          </div>
        </ScrollReveal>

        <div className="relative flex items-center justify-center min-h-[280px]">
          {/* Previous card */}
          <div className="hidden md:block absolute left-0 w-[300px] opacity-40 scale-90 blur-[1px] transition-all duration-500 pointer-events-none">
            <TestimonialCard {...items[getIndex(-1)]} />
          </div>

          {/* Current card */}
          <div className="w-full max-w-[500px] transition-all duration-500 z-10">
            <TestimonialCard {...items[current]} featured />
          </div>

          {/* Next card */}
          <div className="hidden md:block absolute right-0 w-[300px] opacity-40 scale-90 blur-[1px] transition-all duration-500 pointer-events-none">
            <TestimonialCard {...items[getIndex(1)]} />
          </div>
        </div>

        {/* Controls */}
        <div className="flex items-center justify-center gap-4 mt-8">
          <button onClick={prev} className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:border-primary hover:text-primary transition-colors" aria-label="Avis précédent">
            <ChevronLeft className="w-5 h-5" />
          </button>
          <div className="flex items-center gap-2">
            {items.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`w-2.5 h-2.5 rounded-full transition-all ${i === current ? 'bg-primary w-6' : 'bg-border hover:bg-primary/30'}`}
                aria-label={`Aller à l'avis ${i + 1}`}
              />
            ))}
          </div>
          <button onClick={next} className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:border-primary hover:text-primary transition-colors" aria-label="Avis suivant">
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
}

function TestimonialCard({ name, city, rating, text, featured }: { name: string; city: string; rating: number; text: string; date?: string; featured?: boolean }) {
  return (
    <div className={`bg-white rounded-[28px] border border-border p-8 ${featured ? 'shadow-xl' : 'shadow'}`}>
      <div className="flex items-center gap-1 mb-3">
        {[...Array(5)].map((_, i) => (
          <Star key={i} className={`w-4 h-4 ${i < rating ? 'fill-amber-400 text-amber-400' : 'text-gray-200'}`} />
        ))}
      </div>
      <p className="text-text leading-relaxed text-sm mb-4">&ldquo;{text}&rdquo;</p>
      <div className="flex items-center justify-between">
        <div>
          <p className="font-bold text-sm text-text">{name}</p>
          <p className="text-xs text-text-muted">{city}</p>
        </div>
        <div className="flex items-center gap-1.5 text-xs text-text-muted">
          <svg className="w-4 h-4" viewBox="0 0 24 24">
            <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 01-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" fill="#4285F4"/>
            <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
            <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
            <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
          </svg>
          Vérifié
        </div>
      </div>
    </div>
  );
}
