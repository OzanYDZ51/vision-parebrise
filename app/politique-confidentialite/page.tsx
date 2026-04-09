import type { Metadata } from 'next';
import SkyHero from '@/components/SkyHero';
import CloudDivider from '@/components/CloudDivider';
import Breadcrumbs from '@/components/Breadcrumbs';
import { COMPANY } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Politique de Confidentialité',
  description: `Politique de confidentialité et protection des données personnelles de ${COMPANY.name}.`,
  alternates: { canonical: '/politique-confidentialite' },
  robots: { index: false },
};

export default function PolitiqueConfidentialitePage() {
  return (
    <>
      <SkyHero variant="service" title="Politique de confidentialité" />
      <CloudDivider variant="cloud" color="#ffffff" />

      <section className="py-16">
        <div className="max-w-[800px] mx-auto px-5 md:px-8">
          <Breadcrumbs items={[{ name: 'Politique de confidentialité', url: '/politique-confidentialite' }]} />

          <div className="prose prose-sm max-w-none text-text-muted">
            <h2 className="text-xl font-display font-bold text-text">Collecte des données</h2>
            <p>
              {COMPANY.name} collecte uniquement les données personnelles nécessaires au traitement
              de votre demande de rendez-vous : nom, numéro de téléphone, code postal et
              éventuellement un message. Ces données sont transmises via un formulaire sécurisé.
            </p>

            <h2 className="text-xl font-display font-bold text-text mt-8">Utilisation des données</h2>
            <p>Vos données personnelles sont utilisées exclusivement pour :</p>
            <ul>
              <li>Vous recontacter pour confirmer votre rendez-vous</li>
              <li>Planifier l&apos;intervention de notre technicien</li>
              <li>Gérer votre dossier d&apos;assurance le cas échéant</li>
            </ul>
            <p>Vos données ne sont jamais vendues, louées ou transmises à des tiers à des fins commerciales.</p>

            <h2 className="text-xl font-display font-bold text-text mt-8">Conservation</h2>
            <p>
              Les données collectées sont conservées pendant une durée maximale de 3 ans après
              le dernier contact, conformément aux recommandations de la CNIL.
            </p>

            <h2 className="text-xl font-display font-bold text-text mt-8">Vos droits</h2>
            <p>
              Conformément au RGPD, vous disposez d&apos;un droit d&apos;accès, de rectification, de
              suppression et d&apos;opposition sur vos données personnelles. Pour exercer ces droits,
              contactez-nous à <a href={`mailto:${COMPANY.email}`} className="text-primary">{COMPANY.email}</a>.
            </p>

            <h2 className="text-xl font-display font-bold text-text mt-8">Sécurité</h2>
            <p>
              Nous mettons en oeuvre des mesures techniques et organisationnelles appropriées pour
              protéger vos données contre tout accès non autorisé, toute modification, divulgation
              ou destruction.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
