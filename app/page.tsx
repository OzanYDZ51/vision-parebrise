import type { Metadata } from 'next';
import Link from 'next/link';
import SkyHero from '@/components/SkyHero';
import USPBar from '@/components/USPBar';
import InsuranceMarquee from '@/components/InsuranceMarquee';
import ServiceBentoCard from '@/components/ServiceBentoCard';
import OfferBanner from '@/components/OfferBanner';
import ProcessTimeline from '@/components/ProcessTimeline';
import TestimonialCarousel from '@/components/TestimonialCarousel';
import ZonePreview from '@/components/ZonePreview';
import FaqAccordion from '@/components/FaqAccordion';
import ScrollReveal from '@/components/ScrollReveal';
import CloudDivider from '@/components/CloudDivider';
import FloatingClouds from '@/components/FloatingClouds';
import EyeMascot from '@/components/EyeMascot';
import { COMPANY, FAQ_ITEMS } from '@/lib/constants';
import { faqSchema } from '@/lib/schema';
import { Shield, Wrench, Car, Camera, Home, FileCheck } from 'lucide-react';
import { Phone, Calendar } from 'lucide-react';

export const metadata: Metadata = {
  alternates: { canonical: '/' },
  openGraph: {
    title: `${COMPANY.name} — Remplacement & Réparation Pare-brise Le Mans | Jusqu'à 250€ Offerts`,
    description:
      'Remplacement et réparation de pare-brise au Mans et en Sarthe. Jusqu\'à 250€ offerts, toutes assurances sans avance de frais, service à domicile. Ouvert 7j/7.',
    url: '/',
    images: [{ url: '/images/og-image.jpg', width: 1200, height: 630, alt: `Technicien ${COMPANY.name} au Mans` }],
  },
};

const services = [
  { icon: Shield, title: 'Remplacement pare-brise', description: 'Vitrage certifié, intervention rapide à domicile dans toute la Sarthe.', href: '/services/remplacement-pare-brise', size: 'large' as const },
  { icon: Wrench, title: "Réparation d'impact", description: "30 min chrono, 100% gratuit avec l'assurance.", href: '/services/reparation-impact', size: 'medium' as const },
  { icon: Car, title: 'Vitres latérales', description: 'Remplacement toutes marques, sécurisation rapide.', href: '/services/vitres-laterales', size: 'medium' as const },
  { icon: Shield, title: 'Lunette arrière', description: 'Dégivrage préservé, garantie pièces et pose.', href: '/services/lunette-arriere', size: 'medium' as const },
  { icon: Camera, title: 'Calibrage ADAS', description: 'Recalibrage caméras et capteurs, inclus.', href: '/services/calibrage-adas', size: 'medium' as const },
  { icon: Home, title: 'À domicile', description: 'Service gratuit, on vient chez vous.', href: '/services/intervention-domicile', size: 'medium' as const },
];

export default function HomePage() {
  return (
    <>
      <SkyHero />
      <USPBar />
      <InsuranceMarquee />

      {/* Services Bento Grid */}
      <section className="py-20 bg-bg-alt" aria-labelledby="services-title">
        <div className="max-w-[1200px] mx-auto px-5 md:px-8">
          <ScrollReveal animation="fade-up">
            <div className="text-center mb-12">
              <span className="section-label">Nos prestations</span>
              <h2 id="services-title" className="text-3xl md:text-4xl font-display font-extrabold text-text">
                Ce qu&apos;on fait pour <span className="text-primary">votre véhicule</span>
              </h2>
            </div>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {services.map((s, i) => (
              <ScrollReveal key={s.href} delay={i * 80} animation="fade-up">
                <ServiceBentoCard {...s} />
              </ScrollReveal>
            ))}
          </div>
          <ScrollReveal animation="fade-in" delay={500}>
            <div className="text-center mt-8">
              <Link href="/services/prise-en-charge-assurance" className="btn-vision btn-secondary text-sm">
                <FileCheck className="w-4 h-4" /> Prise en charge assurance
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <OfferBanner />

      <ProcessTimeline />

      <TestimonialCarousel />

      <ZonePreview />

      {/* FAQ */}
      <section className="py-20 bg-bg-alt" aria-labelledby="faq-title">
        <div className="max-w-[1200px] mx-auto px-5 md:px-8">
          <ScrollReveal animation="fade-up">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
              <div>
                <span className="section-label">FAQ</span>
                <h2 id="faq-title" className="text-3xl md:text-4xl font-display font-extrabold text-text">
                  <span className="text-primary">Questions</span> fréquentes
                </h2>
                <p className="mt-3 text-text-muted">Tout savoir avant de prendre rendez-vous.</p>
              </div>
              <Link href="/prendre-rdv" className="btn-vision btn-secondary text-sm self-start">Nous contacter</Link>
            </div>
          </ScrollReveal>
          <ScrollReveal animation="fade-up" delay={200}>
            <div className="max-w-[800px]">
              <FaqAccordion items={FAQ_ITEMS.slice(0, 5).map(i => ({ question: i.question, answer: i.answer }))} />
            </div>
          </ScrollReveal>
          <ScrollReveal animation="fade-in" delay={400}>
            <div className="text-center mt-8">
              <Link href="/faq" className="text-sm font-semibold text-primary hover:underline">Voir toutes les questions →</Link>
            </div>
          </ScrollReveal>
        </div>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(FAQ_ITEMS.slice(0, 5).map(i => ({ question: i.question, answer: i.answer })))) }} />
      </section>

      {/* CTA */}
      <section className="relative py-24 text-center overflow-hidden bg-sky-gradient" aria-labelledby="cta-title">
        <FloatingClouds count={5} />

        {/* Decorative circles */}
        <div className="absolute top-[-80px] left-[-80px] w-64 h-64 border border-white/10 rounded-full animate-rotate-slow" />
        <div className="absolute bottom-[-60px] right-[-60px] w-48 h-48 border border-white/10 rounded-full animate-rotate-slow" style={{ animationDirection: 'reverse' }} />

        <ScrollReveal animation="scale-in">
          <div className="max-w-[600px] mx-auto px-5 md:px-8 relative z-10">
            <EyeMascot size={70} variant="happy" className="mx-auto mb-6" />
            <h2 id="cta-title" className="text-3xl md:text-5xl font-display font-extrabold text-white leading-tight">
              Pare-brise fissuré ?<br />On a l&apos;oeil !
            </h2>
            <p className="text-white/60 mt-4 leading-relaxed text-lg">
              Prenez rendez-vous et bénéficiez de jusqu&apos;à 250€ offerts* + franchise offerte*. Sans avance de frais.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4 mt-8">
              <Link href="/prendre-rdv" className="btn-vision btn-accent animate-pulse-soft text-base">
                <Calendar className="w-5 h-5" /> Prendre rendez-vous
              </Link>
              <a href={COMPANY.phoneLink} className="btn-vision btn-outline-white text-base">
                <Phone className="w-5 h-5" /> {COMPANY.phone}
              </a>
            </div>
          </div>
        </ScrollReveal>
      </section>
    </>
  );
}
