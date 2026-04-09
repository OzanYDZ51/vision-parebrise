import Link from 'next/link';
import { MapPin, ArrowRight } from 'lucide-react';
import ScrollReveal from './ScrollReveal';
import { ZONES_SUBMENU } from '@/lib/constants';

export default function ZonePreview() {
  return (
    <section className="py-20 bg-bg-alt" aria-labelledby="zones-title">
      <div className="max-w-[1200px] mx-auto px-5 md:px-8">
        <ScrollReveal animation="fade-up">
          <div className="text-center mb-12">
            <span className="section-label">Zones d&apos;intervention</span>
            <h2 id="zones-title" className="text-3xl md:text-4xl font-display font-extrabold text-text">
              On intervient <span className="text-primary">près de chez vous</span>
            </h2>
            <p className="mt-3 text-text-muted">
              Service à domicile gratuit au Mans et dans toute la Sarthe.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal animation="fade-up" delay={200}>
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            {ZONES_SUBMENU.map((zone) => (
              <Link
                key={zone.href}
                href={zone.href}
                className="inline-flex items-center gap-2 px-5 py-3 bg-white border border-border rounded-full hover:border-primary hover:text-primary hover:bg-primary-light transition-all duration-300 group"
              >
                <MapPin className="w-4 h-4 text-primary" />
                <span className="text-sm font-semibold text-text group-hover:text-primary">{zone.label}</span>
                <ArrowRight className="w-3.5 h-3.5 text-text-muted group-hover:text-primary opacity-0 group-hover:opacity-100 -ml-1 group-hover:ml-0 transition-all" />
              </Link>
            ))}
          </div>
        </ScrollReveal>

        <ScrollReveal animation="fade-in" delay={300}>
          <div className="text-center">
            <Link href="/zones" className="btn-vision btn-secondary text-sm">
              Voir toutes les zones <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
