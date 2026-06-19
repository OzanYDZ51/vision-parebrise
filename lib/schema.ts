import { COMPANY } from './constants';
import type { GoogleStats } from './google-reviews';
import { getAllCities, type CityData } from './cities-data';

const OPENING_HOURS = {
  '@type': 'OpeningHoursSpecification',
  dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
  opens: '09:00',
  closes: '17:00',
};

// Aire desservie complète : chaque ville + ses communes limitrophes (dédupliquées),
// plus le département et la région — signal "service area" exhaustif pour le SEO local.
function buildAreaServed() {
  const names = new Set<string>();
  for (const c of getAllCities()) {
    names.add(c.name);
    for (const n of c.nearbyCommunes) names.add(n);
  }
  return [
    ...Array.from(names).map((name) => ({ '@type': 'City', name })),
    { '@type': 'AdministrativeArea', name: 'Sarthe' },
    { '@type': 'AdministrativeArea', name: 'Pays de la Loire' },
  ];
}

export function localBusinessSchema(stats?: GoogleStats | null) {
  return {
    '@context': 'https://schema.org',
    '@type': 'AutoRepair',
    '@id': `${COMPANY.url}/#organization`,
    name: COMPANY.name,
    description:
      'Spécialiste du remplacement et de la réparation de pare-brise au Mans et dans toute la Sarthe. Jusqu\'à 250€ offerts, toutes assurances, intervention à domicile.',
    url: COMPANY.url,
    telephone: COMPANY.phoneLink,
    email: COMPANY.email,
    logo: {
      '@type': 'ImageObject',
      url: `${COMPANY.url}/images/logo-vision.png`,
      width: 512,
      height: 512,
    },
    image: [
      `${COMPANY.url}/images/og-image.jpg`,
    ],
    address: {
      '@type': 'PostalAddress',
      streetAddress: COMPANY.address,
      addressLocality: 'Le Mans',
      postalCode: '72100',
      addressRegion: 'Sarthe',
      addressCountry: 'FR',
    },
    geo: { '@type': 'GeoCoordinates', latitude: 47.9906, longitude: 0.2054 },
    openingHoursSpecification: OPENING_HOURS,
    priceRange: '€€',
    currenciesAccepted: 'EUR',
    paymentAccepted: 'Cash, Credit Card, Insurance',
    hasMap: COMPANY.mapsDirections,
    sameAs: [COMPANY.social.instagram, COMPANY.social.facebook],
    areaServed: buildAreaServed(),
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Services vitrage automobile',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Remplacement de pare-brise',
            description: 'Jusqu\'à 250€ offerts pour tout remplacement. Prise en charge assurance sans avance de frais.',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: "Réparation d'impact",
            description: 'Réparation en 30 minutes, gratuit avec assurance bris de glace.',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Calibrage ADAS',
            description: 'Recalibrage caméras et capteurs inclus dans le remplacement.',
          },
        },
      ],
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: stats ? stats.rating.toFixed(1) : '4.9',
      reviewCount: stats ? String(stats.total) : '87',
      bestRating: '5',
      worstRating: '1',
    },
  };
}

export function organizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': `${COMPANY.url}/#org`,
    name: COMPANY.name,
    url: COMPANY.url,
    logo: `${COMPANY.url}/images/logo-vision.png`,
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: COMPANY.phoneLink,
      contactType: 'customer service',
      availableLanguage: 'French',
      areaServed: 'FR',
    },
    sameAs: [COMPANY.social.instagram, COMPANY.social.facebook],
  };
}

export function webSiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${COMPANY.url}/#website`,
    name: COMPANY.name,
    url: COMPANY.url,
    publisher: { '@id': `${COMPANY.url}/#org` },
    inLanguage: 'fr-FR',
  };
}

export function webPageSchema(name: string, description: string, url: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name,
    description,
    url: `${COMPANY.url}${url}`,
    isPartOf: { '@id': `${COMPANY.url}/#website` },
    about: { '@id': `${COMPANY.url}/#organization` },
    inLanguage: 'fr-FR',
  };
}

export function serviceSchema(
  name: string,
  description: string,
  url: string,
  areaServed: string[] = ['Le Mans', 'Sarthe'],
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name,
    serviceType: 'Vitrage automobile',
    description,
    url: `${COMPANY.url}${url}`,
    provider: { '@id': `${COMPANY.url}/#organization` },
    areaServed: areaServed.map((name) => ({ '@type': 'City', name })),
    offers: {
      '@type': 'Offer',
      description:
        'Jusqu\'à 250€ offerts pour tout remplacement de pare-brise. Prise en charge par toutes les assurances sans avance de frais.',
      priceCurrency: 'EUR',
    },
  };
}

export function faqSchema(items: { question: string; answer: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: { '@type': 'Answer', text: item.answer },
    })),
  };
}

export function breadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.name,
      item: `${COMPANY.url}${item.url}`,
    })),
  };
}

// LocalBusiness localisé pour chaque page zone : géo de la ville, aire desservie =
// ville + communes limitrophes, rattaché à l'organisation mère. Renforce le ranking local.
export function cityBusinessSchema(city: CityData, stats?: GoogleStats | null) {
  const area = [city.name, ...city.nearbyCommunes].map((name) => ({ '@type': 'City', name }));
  return {
    '@context': 'https://schema.org',
    '@type': 'AutoRepair',
    '@id': `${COMPANY.url}/zones/${city.slug}#business`,
    name: `${COMPANY.name} — Pare-brise ${city.name}`,
    description: city.metaDescription,
    url: `${COMPANY.url}/zones/${city.slug}`,
    telephone: COMPANY.phoneLink,
    email: COMPANY.email,
    image: [`${COMPANY.url}/images/og-image.jpg`],
    logo: `${COMPANY.url}/images/logo-vision.png`,
    address: {
      '@type': 'PostalAddress',
      streetAddress: COMPANY.address,
      addressLocality: 'Le Mans',
      postalCode: '72100',
      addressRegion: 'Sarthe',
      addressCountry: 'FR',
    },
    geo: { '@type': 'GeoCoordinates', latitude: city.geo.latitude, longitude: city.geo.longitude },
    areaServed: area,
    openingHoursSpecification: OPENING_HOURS,
    priceRange: '€€',
    currenciesAccepted: 'EUR',
    paymentAccepted: 'Cash, Credit Card, Insurance',
    parentOrganization: { '@id': `${COMPANY.url}/#organization` },
    sameAs: [COMPANY.social.instagram, COMPANY.social.facebook],
    ...(stats
      ? {
          aggregateRating: {
            '@type': 'AggregateRating',
            ratingValue: stats.rating.toFixed(1),
            reviewCount: String(stats.total),
            bestRating: '5',
            worstRating: '1',
          },
        }
      : {}),
  };
}
