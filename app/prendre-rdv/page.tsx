import type { Metadata } from 'next';
import SkyHero from '@/components/SkyHero';
import CloudDivider from '@/components/CloudDivider';
import Breadcrumbs from '@/components/Breadcrumbs';
import BookingTunnel from '@/components/BookingTunnel';
import MapEmbed from '@/components/MapEmbed';
import { COMPANY } from '@/lib/constants';
import { MapPin, Phone, Smartphone, Mail, Clock } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Prendre Rendez-vous — Pare-brise Le Mans',
  description: `Prenez rendez-vous en ligne pour le remplacement ou la réparation de votre pare-brise avec ${COMPANY.name}. Jusqu'à 250€ offerts, intervention à domicile.`,
  alternates: { canonical: '/prendre-rdv' },
};

export default function BookingPage() {
  return (
    <>
      <SkyHero
        variant="service"
        title="Prendre rendez-vous"
        subtitle="Réservez votre créneau en 2 minutes. On s'occupe du reste."
      />
      <CloudDivider variant="cloud" color="#ffffff" />

      <section className="py-16">
        <div className="max-w-[1200px] mx-auto px-5 md:px-8">
          <Breadcrumbs items={[{ name: 'Prendre rendez-vous', url: '/prendre-rdv' }]} />
          <BookingTunnel />

          {/* Contact + carte (OpenStreetMap) */}
          <div className="mt-20 grid md:grid-cols-2 gap-8 items-start">
            <div className="card-cloud p-7">
              <h2 className="text-xl font-display font-bold text-text mb-5">Nous contacter</h2>
              <ul className="flex flex-col gap-4 text-sm">
                <li className="flex items-start gap-3 text-text">
                  <MapPin className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  <span>{COMPANY.address}, {COMPANY.city}</span>
                </li>
                <li>
                  <a href={COMPANY.phoneLink} className="flex items-center gap-3 text-text hover:text-primary transition-colors">
                    <Phone className="w-5 h-5 text-primary shrink-0" /> {COMPANY.phone}
                  </a>
                </li>
                <li>
                  <a href={COMPANY.mobileLink} className="flex items-center gap-3 text-text hover:text-primary transition-colors">
                    <Smartphone className="w-5 h-5 text-primary shrink-0" /> {COMPANY.mobile}
                  </a>
                </li>
                <li>
                  <a href={`mailto:${COMPANY.email}`} className="flex items-center gap-3 text-text hover:text-primary transition-colors">
                    <Mail className="w-5 h-5 text-primary shrink-0" /> {COMPANY.email}
                  </a>
                </li>
                <li className="flex items-center gap-3 text-text">
                  <Clock className="w-5 h-5 text-primary shrink-0" /> 7j/7, de 9h à 17h
                </li>
              </ul>
            </div>
            <div>
              <h2 className="text-xl font-display font-bold text-text mb-4">Où nous trouver</h2>
              <MapEmbed
                lat={COMPANY.geo.latitude}
                lon={COMPANY.geo.longitude}
                label={`${COMPANY.address}, ${COMPANY.city}`}
                delta={0.01}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
