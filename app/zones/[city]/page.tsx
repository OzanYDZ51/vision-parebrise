import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { getCityData, getAllCitySlugs, getAllCities } from '@/lib/cities-data';
import { serviceSchema } from '@/lib/schema';
import SkyHero from '@/components/SkyHero';
import CloudDivider from '@/components/CloudDivider';
import Breadcrumbs from '@/components/Breadcrumbs';
import ScrollReveal from '@/components/ScrollReveal';
import OfferBanner from '@/components/OfferBanner';
import { COMPANY, SERVICES_SUBMENU } from '@/lib/constants';
import { CheckCircle, MapPin, Users, Clock, Shield, ArrowRight, Phone, Calendar } from 'lucide-react';

interface PageProps {
  params: Promise<{ city: string }>;
}

export async function generateStaticParams() {
  return getAllCitySlugs().map((city) => ({ city }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { city } = await params;
  const data = getCityData(city);
  if (!data) return {};
  return {
    title: data.metaTitle,
    description: data.metaDescription,
    alternates: { canonical: `/zones/${city}` },
    openGraph: {
      title: data.metaTitle,
      description: data.metaDescription,
      url: `/zones/${city}`,
    },
  };
}

export default async function CityPage({ params }: PageProps) {
  const { city } = await params;
  const data = getCityData(city);
  if (!data) notFound();

  const otherCities = getAllCities().filter((c) => c.slug !== city).slice(0, 4);

  return (
    <>
      <SkyHero variant="zone" title={data.heroTitle} subtitle={data.heroSubtitle} />
      <CloudDivider variant="cloud" color="#ffffff" />

      <section className="py-16">
        <div className="max-w-[1200px] mx-auto px-5 md:px-8">
          <Breadcrumbs items={[
            { name: 'Zones d\'intervention', url: '/zones' },
            { name: data.name, url: `/zones/${city}` },
          ]} />

          {/* Stats bar */}
          <ScrollReveal animation="fade-up">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
              <div className="bg-primary-light rounded-[20px] p-5 text-center">
                <MapPin className="w-6 h-6 text-primary mx-auto mb-2" />
                <p className="text-sm font-bold text-text">{data.distance}</p>
              </div>
              <div className="bg-primary-light rounded-[20px] p-5 text-center">
                <Users className="w-6 h-6 text-primary mx-auto mb-2" />
                <p className="text-sm font-bold text-text">{data.population} hab.</p>
              </div>
              <div className="bg-primary-light rounded-[20px] p-5 text-center">
                <Clock className="w-6 h-6 text-primary mx-auto mb-2" />
                <p className="text-sm font-bold text-text">7j/7, 9h-17h</p>
              </div>
              <div className="bg-primary-light rounded-[20px] p-5 text-center">
                <Shield className="w-6 h-6 text-primary mx-auto mb-2" />
                <p className="text-sm font-bold text-text">250€ offerts*</p>
              </div>
            </div>
          </ScrollReveal>

          {/* Intro */}
          <ScrollReveal animation="fade-up" delay={100}>
            <div className="max-w-[800px] mb-12">
              <p className="text-lg text-text-muted leading-relaxed">{data.intro}</p>
            </div>
          </ScrollReveal>

          {/* Why us */}
          <ScrollReveal animation="fade-up" delay={200}>
            <div className="mb-12">
              <h2 className="text-2xl font-display font-extrabold text-text mb-6">
                Pourquoi choisir {COMPANY.name} à {data.name} ?
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {data.whyUs.map((item, i) => (
                  <div key={i} className="flex items-start gap-3 p-4 rounded-2xl bg-primary-light/50 border border-primary/10">
                    <CheckCircle className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <span className="text-sm text-text">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>

          {/* Services */}
          <ScrollReveal animation="fade-up" delay={300}>
            <div className="mb-12">
              <h2 className="text-2xl font-display font-extrabold text-text mb-6">
                Nos services à {data.name}
              </h2>
              <div className="flex flex-wrap gap-3">
                {SERVICES_SUBMENU.map((s) => (
                  <Link key={s.href} href={s.href} className="card-cloud px-5 py-3 group inline-flex items-center gap-2">
                    <span className="text-sm font-semibold text-text group-hover:text-primary">{s.label}</span>
                    <ArrowRight className="w-3.5 h-3.5 text-text-muted group-hover:text-primary" />
                  </Link>
                ))}
              </div>
            </div>
          </ScrollReveal>

          {/* Local info */}
          <ScrollReveal animation="fade-up" delay={350}>
            <div className="bg-bg-alt rounded-[28px] p-8 mb-12">
              <h2 className="text-xl font-display font-bold text-text mb-3">
                Le pare-brise à {data.name}
              </h2>
              <p className="text-sm text-text-muted leading-relaxed">{data.localInfo}</p>
            </div>
          </ScrollReveal>

          {/* Nearby communes */}
          <ScrollReveal animation="fade-up" delay={400}>
            <div className="mb-12">
              <h2 className="text-xl font-display font-bold text-text mb-4">
                Communes desservies autour de {data.name}
              </h2>
              <div className="flex flex-wrap gap-2">
                {data.nearbyCommunes.map((commune) => (
                  <span key={commune} className="px-4 py-2 bg-primary-light rounded-full text-sm text-primary font-medium">
                    {commune}
                  </span>
                ))}
              </div>
            </div>
          </ScrollReveal>

          {/* Offer */}
          <ScrollReveal animation="fade-up" delay={450}>
            <OfferBanner variant="inline" />
          </ScrollReveal>

          {/* Other cities */}
          <ScrollReveal animation="fade-up" delay={500}>
            <div className="mt-12">
              <h2 className="text-xl font-display font-bold text-text mb-4">Autres zones d&apos;intervention</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                {otherCities.map((c) => (
                  <Link key={c.slug} href={`/zones/${c.slug}`} className="card-cloud p-4 group text-center">
                    <MapPin className="w-5 h-5 text-primary mx-auto mb-2" />
                    <p className="font-bold text-sm text-text group-hover:text-primary">{c.name}</p>
                    <p className="text-xs text-text-muted">{c.departmentCode}</p>
                  </Link>
                ))}
              </div>
            </div>
          </ScrollReveal>

          {/* CTA */}
          <ScrollReveal animation="scale-in" delay={600}>
            <div className="mt-14 bg-teal-gradient rounded-[28px] p-10 text-center text-white">
              <h2 className="text-2xl md:text-3xl font-display font-extrabold">
                Besoin d&apos;un pare-brise à {data.name} ?
              </h2>
              <p className="text-white/60 mt-2">On se déplace gratuitement. Prenez rendez-vous maintenant.</p>
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
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(serviceSchema(
            `Pare-brise ${data.name}`,
            data.metaDescription,
            `/zones/${city}`,
          )),
        }}
      />
    </>
  );
}
