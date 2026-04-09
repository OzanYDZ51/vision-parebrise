import type { Metadata } from 'next';
import Link from 'next/link';
import SkyHero from '@/components/SkyHero';
import CloudDivider from '@/components/CloudDivider';
import Breadcrumbs from '@/components/Breadcrumbs';
import FaqAccordion from '@/components/FaqAccordion';
import ScrollReveal from '@/components/ScrollReveal';
import { COMPANY, FAQ_ITEMS } from '@/lib/constants';
import { faqSchema } from '@/lib/schema';
import { Calendar, Phone } from 'lucide-react';

export const metadata: Metadata = {
  title: 'FAQ — Questions Fréquentes Pare-brise',
  description: `Toutes les réponses à vos questions sur le remplacement et la réparation de pare-brise avec ${COMPANY.name}. Assurance, tarifs, délais, offres.`,
  alternates: { canonical: '/faq' },
};

export default function FaqPage() {
  return (
    <>
      <SkyHero variant="service" title="Questions fréquentes" subtitle="Tout ce qu'il faut savoir avant de prendre rendez-vous." />
      <CloudDivider variant="cloud" color="#ffffff" />

      <section className="py-16">
        <div className="max-w-[1200px] mx-auto px-5 md:px-8">
          <Breadcrumbs items={[{ name: 'FAQ', url: '/faq' }]} />

          <ScrollReveal animation="fade-up">
            <div className="max-w-[800px] mx-auto">
              <FaqAccordion items={FAQ_ITEMS.map(i => ({ question: i.question, answer: i.answer }))} />
            </div>
          </ScrollReveal>

          <ScrollReveal animation="scale-in" delay={300}>
            <div className="mt-16 bg-teal-gradient rounded-[28px] p-10 text-center text-white max-w-[800px] mx-auto">
              <h2 className="text-2xl font-display font-extrabold">Vous avez une autre question ?</h2>
              <p className="text-white/60 mt-2">Contactez-nous directement, on vous répond avec plaisir.</p>
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

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(FAQ_ITEMS.map(i => ({ question: i.question, answer: i.answer })))) }}
      />
    </>
  );
}
