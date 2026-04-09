import type { Metadata } from 'next';
import SkyHero from '@/components/SkyHero';
import CloudDivider from '@/components/CloudDivider';
import Breadcrumbs from '@/components/Breadcrumbs';
import { COMPANY } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Mentions Légales',
  description: `Mentions légales du site ${COMPANY.name}.`,
  alternates: { canonical: '/mentions-legales' },
  robots: { index: false },
};

export default function MentionsLegalesPage() {
  return (
    <>
      <SkyHero variant="service" title="Mentions légales" />
      <CloudDivider variant="cloud" color="#ffffff" />

      <section className="py-16">
        <div className="max-w-[800px] mx-auto px-5 md:px-8">
          <Breadcrumbs items={[{ name: 'Mentions légales', url: '/mentions-legales' }]} />

          <div className="prose prose-sm max-w-none text-text-muted">
            <h2 className="text-xl font-display font-bold text-text">Éditeur du site</h2>
            <p>
              <strong>{COMPANY.name}</strong><br />
              {COMPANY.address}<br />
              {COMPANY.city}<br />
              Téléphone : <a href={COMPANY.phoneLink} className="text-primary">{COMPANY.phone}</a><br />
              E-mail : <a href={`mailto:${COMPANY.email}`} className="text-primary">{COMPANY.email}</a>
            </p>

            <h2 className="text-xl font-display font-bold text-text mt-8">Hébergement</h2>
            <p>
              Ce site est hébergé par Vercel Inc.<br />
              440 N Barranca Ave #4133, Covina, CA 91723, États-Unis
            </p>

            <h2 className="text-xl font-display font-bold text-text mt-8">Propriété intellectuelle</h2>
            <p>
              L&apos;ensemble du contenu de ce site (textes, images, logos, icônes, vidéos) est la propriété
              exclusive de {COMPANY.name} ou de ses partenaires. Toute reproduction, représentation,
              modification ou exploitation, même partielle, est interdite sans autorisation préalable.
            </p>

            <h2 className="text-xl font-display font-bold text-text mt-8">Responsabilité</h2>
            <p>
              {COMPANY.name} s&apos;efforce d&apos;assurer l&apos;exactitude des informations diffusées sur ce site.
              Toutefois, elle ne saurait être tenue responsable des erreurs ou omissions, ni des résultats
              obtenus par l&apos;utilisation de ces informations.
            </p>

            <h2 className="text-xl font-display font-bold text-text mt-8">Cookies</h2>
            <p>
              Ce site peut utiliser des cookies à des fins de mesure d&apos;audience et d&apos;amélioration de
              l&apos;expérience utilisateur. Vous pouvez configurer votre navigateur pour refuser les cookies.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
