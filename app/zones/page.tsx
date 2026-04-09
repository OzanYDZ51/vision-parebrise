import type { Metadata } from 'next';
import Link from 'next/link';
import { MapPin, ArrowRight, Phone, Calendar } from 'lucide-react';
import SkyHero from '@/components/SkyHero';
import CloudDivider from '@/components/CloudDivider';
import Breadcrumbs from '@/components/Breadcrumbs';
import ScrollReveal from '@/components/ScrollReveal';
import { getAllCities } from '@/lib/cities-data';
import { COMPANY } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Zones d\'intervention Sarthe — Service à Domicile',
  description: `${COMPANY.name} intervient au Mans et dans toute la Sarthe. Service à domicile gratuit, jusqu'à 250€ offerts, toutes assurances.`,
  alternates: { canonical: '/zones' },
};

export default function ZonesPage() {
  const cities = getAllCities();

  return (
    <>
      <SkyHero
        variant="service"
        title="Nos zones d'intervention"
        subtitle="Service à domicile gratuit dans toute la Sarthe. On vient à vous."
      />
      <CloudDivider variant="cloud" color="#ffffff" />

      <section className="py-16">
        <div className="max-w-[1200px] mx-auto px-5 md:px-8">
          <Breadcrumbs items={[{ name: 'Zones d\'intervention', url: '/zones' }]} />

          <ScrollReveal animation="fade-up">
            <p className="text-lg text-text-muted leading-relaxed max-w-[700px] mb-12">
              {COMPANY.name} intervient dans tout le département de la Sarthe (72).
              Notre technicien mobile se déplace gratuitement chez vous pour le remplacement
              ou la réparation de votre pare-brise.
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {cities.map((city, i) => (
              <ScrollReveal key={city.slug} animation="fade-up" delay={i * 100}>
                <Link
                  href={`/zones/${city.slug}`}
                  className="card-cloud p-6 group block"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-full bg-primary-light flex items-center justify-center group-hover:bg-primary transition-colors">
                      <MapPin className="w-5 h-5 text-primary group-hover:text-white transition-colors" />
                    </div>
                    <div>
                      <h2 className="font-display font-bold text-lg text-text group-hover:text-primary transition-colors">
                        {city.name}
                      </h2>
                      <p className="text-xs text-text-muted">{city.department} ({city.departmentCode})</p>
                    </div>
                  </div>
                  <p className="text-sm text-text-muted mb-3">{city.distance}</p>
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {city.nearbyCommunes.slice(0, 4).map((commune) => (
                      <span key={commune} className="text-xs px-2 py-0.5 bg-bg-alt rounded-full text-text-muted">
                        {commune}
                      </span>
                    ))}
                    {city.nearbyCommunes.length > 4 && (
                      <span className="text-xs px-2 py-0.5 bg-bg-alt rounded-full text-text-muted">
                        +{city.nearbyCommunes.length - 4}
                      </span>
                    )}
                  </div>
                  <span className="inline-flex items-center gap-1.5 text-primary text-sm font-semibold group-hover:gap-3 transition-all">
                    Voir cette zone <ArrowRight className="w-4 h-4" />
                  </span>
                </Link>
              </ScrollReveal>
            ))}
          </div>

          {/* CTA */}
          <ScrollReveal animation="scale-in" delay={300}>
            <div className="mt-16 bg-teal-gradient rounded-[28px] p-10 text-center text-white">
              <h2 className="text-2xl md:text-3xl font-display font-extrabold">
                Vous êtes dans la Sarthe ?
              </h2>
              <p className="text-white/60 mt-2">On se déplace gratuitement chez vous. Prenez rendez-vous maintenant.</p>
              <div className="flex flex-col sm:flex-row justify-center gap-4 mt-6">
                <Link href="/prendre-rdv" className="btn-vision btn-accent">
                  <Calendar className="w-5 h-5" /> Prendre rendez-vous
                </Link>
                <a href={COMPANY.phoneLink} className="btn-vision btn-outline-white">
                  <Phone className="w-5 h-5" /> {COMPANY.phone}
                </a>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
