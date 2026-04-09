import type { Metadata } from 'next';
import SkyHero from '@/components/SkyHero';
import CloudDivider from '@/components/CloudDivider';
import Breadcrumbs from '@/components/Breadcrumbs';
import BookingTunnel from '@/components/BookingTunnel';
import { COMPANY } from '@/lib/constants';

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
        </div>
      </section>
    </>
  );
}
