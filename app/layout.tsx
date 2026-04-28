import type { Metadata } from 'next';
import { Outfit, Baloo_2 } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import StickyCta from '@/components/StickyCta';
import ChatWidget from '@/components/ChatWidget';
import { COMPANY } from '@/lib/constants';
import { localBusinessSchema, organizationSchema, webSiteSchema } from '@/lib/schema';
import { fetchGoogleReviews } from '@/lib/google-reviews';

const outfit = Outfit({
  subsets: ['latin'],
  variable: '--font-outfit',
  display: 'swap',
});

const baloo2 = Baloo_2({
  subsets: ['latin'],
  variable: '--font-baloo2',
  display: 'swap',
  weight: ['400', '500', '600', '700', '800'],
});

export const metadata: Metadata = {
  metadataBase: new URL(COMPANY.url),
  title: {
    template: `%s | ${COMPANY.name} Le Mans`,
    default: `${COMPANY.name} — Remplacement & Réparation Pare-brise Le Mans | Jusqu'à 250€ Offerts`,
  },
  description:
    'Remplacement et réparation de pare-brise au Mans et en Sarthe. Jusqu\'à 250€ offerts, franchise offerte, toutes assurances sans avance de frais. Service à domicile 7j/7.',
  keywords: [
    'pare-brise Le Mans',
    'remplacement pare-brise Le Mans',
    'réparation pare-brise Le Mans',
    'pare-brise Sarthe',
    'vitrage automobile Le Mans',
    'pare-brise assurance Le Mans',
    '250€ offerts pare-brise',
    'pare-brise domicile Le Mans',
    'calibrage ADAS Le Mans',
    'Vision Pare-Brise',
  ],
  authors: [{ name: COMPANY.name }],
  creator: COMPANY.name,
  publisher: COMPANY.name,
  robots: { index: true, follow: true },
  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    siteName: COMPANY.name,
    images: [{ url: '/images/og-image.jpg', width: 1200, height: 630, alt: `${COMPANY.name} Le Mans` }],
  },
  twitter: { card: 'summary_large_image' },
  manifest: '/manifest.json',
};

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const google = await fetchGoogleReviews();
  return (
    <html lang="fr" className={`${outfit.variable} ${baloo2.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema(google?.stats ?? null)) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema()) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(webSiteSchema()) }}
        />
      </head>
      <body className="font-sans antialiased bg-white text-text">
        <a href="#main-content" className="skip-link">
          Aller au contenu principal
        </a>
        <Header />
        <main id="main-content">{children}</main>
        <Footer />
        <StickyCta />
        <ChatWidget />
      </body>
    </html>
  );
}
