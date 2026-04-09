import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { getServiceData, getAllServiceSlugs, SERVICES_DATA } from '@/lib/services-data';
import { serviceSchema } from '@/lib/schema';
import SkyHero from '@/components/SkyHero';
import CloudDivider from '@/components/CloudDivider';
import Breadcrumbs from '@/components/Breadcrumbs';
import ScrollReveal from '@/components/ScrollReveal';
import OfferBanner from '@/components/OfferBanner';
import { COMPANY } from '@/lib/constants';
import { CheckCircle, ArrowRight, Calendar, Phone } from 'lucide-react';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllServiceSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const data = getServiceData(slug);
  if (!data) return {};
  return {
    title: data.metaTitle,
    description: data.metaDescription,
    alternates: { canonical: `/services/${slug}` },
    openGraph: {
      title: data.metaTitle,
      description: data.metaDescription,
      url: `/services/${slug}`,
    },
  };
}

export default async function ServicePage({ params }: PageProps) {
  const { slug } = await params;
  const data = getServiceData(slug);
  if (!data) notFound();

  const otherServices = Object.values(SERVICES_DATA).filter((s) => s.slug !== slug).slice(0, 3);

  return (
    <>
      <SkyHero variant="service" title={data.heroTitle} subtitle={data.heroSubtitle} />
      <CloudDivider variant="cloud" color="#ffffff" />

      <section className="py-16">
        <div className="max-w-[1200px] mx-auto px-5 md:px-8">
          <Breadcrumbs items={[
            { name: 'Services', url: '/services/remplacement-pare-brise' },
            { name: data.title, url: `/services/${slug}` },
          ]} />

          {/* Intro */}
          <ScrollReveal animation="fade-up">
            <div className="max-w-[800px] mb-14">
              <p className="text-lg text-text-muted leading-relaxed">{data.intro}</p>
            </div>
          </ScrollReveal>

          {/* Features grid */}
          <ScrollReveal animation="fade-up" delay={100}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-14">
              {data.features.map((feature, i) => (
                <div key={i} className="flex items-start gap-3 p-4 rounded-2xl bg-primary-light/50 border border-primary/10">
                  <CheckCircle className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  <span className="text-sm text-text leading-relaxed">{feature}</span>
                </div>
              ))}
            </div>
          </ScrollReveal>

          {/* Process steps */}
          <ScrollReveal animation="fade-up" delay={200}>
            <div className="mb-14">
              <h2 className="text-2xl font-display font-extrabold text-text mb-6">
                Les étapes de l&apos;intervention
              </h2>
              <div className="flex flex-col gap-4">
                {data.process.map((step, i) => (
                  <div key={i} className="flex gap-4 items-start">
                    <div className="w-10 h-10 rounded-full bg-primary text-white font-bold flex items-center justify-center shrink-0 text-sm">
                      {i + 1}
                    </div>
                    <div>
                      <h3 className="font-bold text-text">{step.step}</h3>
                      <p className="text-sm text-text-muted mt-0.5">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>

          {/* Offer */}
          <ScrollReveal animation="fade-up" delay={300}>
            <OfferBanner variant="inline" />
          </ScrollReveal>

          {/* Related services */}
          <ScrollReveal animation="fade-up" delay={400}>
            <div className="mt-14">
              <h2 className="text-2xl font-display font-extrabold text-text mb-6">Autres services</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {otherServices.map((s) => (
                  <Link key={s.slug} href={`/services/${s.slug}`} className="card-cloud p-6 group">
                    <h3 className="font-display font-bold text-text group-hover:text-primary transition-colors">{s.title}</h3>
                    <p className="text-sm text-text-muted mt-2 line-clamp-2">{s.heroSubtitle}</p>
                    <span className="inline-flex items-center gap-1 text-primary text-sm font-semibold mt-3">
                      Découvrir <ArrowRight className="w-3.5 h-3.5" />
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          </ScrollReveal>

          {/* CTA */}
          <ScrollReveal animation="scale-in" delay={500}>
            <div className="mt-14 bg-teal-gradient rounded-[28px] p-10 text-center text-white">
              <h2 className="text-2xl md:text-3xl font-display font-extrabold">Besoin de ce service ?</h2>
              <p className="text-white/60 mt-2">Prenez rendez-vous en 2 minutes, on s&apos;occupe du reste.</p>
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
          __html: JSON.stringify(serviceSchema(data.title, data.metaDescription, `/services/${slug}`)),
        }}
      />
    </>
  );
}
