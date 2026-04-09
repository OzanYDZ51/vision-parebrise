export interface CityData {
  slug: string;
  name: string;
  department: string;
  departmentCode: string;
  region: string;
  metaTitle: string;
  metaDescription: string;
  heroTitle: string;
  heroSubtitle: string;
  intro: string;
  whyUs: string[];
  localInfo: string;
  distance: string;
  nearbyCommunes: string[];
  geo: { latitude: number; longitude: number };
  population: string;
}

export const CITIES_DATA: Record<string, CityData> = {
  'le-mans': {
    slug: 'le-mans',
    name: 'Le Mans',
    department: 'Sarthe',
    departmentCode: '72',
    region: 'Pays de la Loire',
    metaTitle: 'Pare-brise Le Mans — Jusqu\'à 250€ Offerts + Franchise Offerte | Vision Pare-Brise',
    metaDescription:
      'Remplacement et réparation de pare-brise au Mans. Jusqu\'à 250€ offerts + franchise offerte. Toutes assurances, 0€ à avancer. Service à domicile 7j/7. VISION PARE-BRISE.',
    heroTitle: 'Pare-brise au Mans',
    heroSubtitle:
      'Jusqu\'à 250€ offerts + franchise offerte* pour tout remplacement. On vient chez vous.',
    intro:
      "VISION PARE-BRISE est votre expert du vitrage automobile au Mans. Du centre-ville historique à Pontlieue, des Sablons à la Californie en passant par le quartier de l'Université, notre technicien se déplace gratuitement à votre domicile pour le remplacement ou la réparation de votre pare-brise. Disponible 7j/7 de 9h à 17h sur toute l'agglomération mancelle.",
    whyUs: [
      'Intervention à domicile gratuite dans tout Le Mans et ses alentours',
      'Réactivité : intervention sous 48h, souvent dès le lendemain',
      'Jusqu\'à 250€ offerts + franchise offerte pour chaque remplacement',
      'Toutes assurances acceptées, 0€ à avancer',
      'Calibrage ADAS systématiquement inclus',
      'Disponible 7 jours sur 7, de 9h à 17h',
      'Vitrage certifié de qualité équivalente origine',
    ],
    localInfo:
      "Le Mans, célèbre dans le monde entier pour ses 24 Heures et capitale de la Sarthe, rassemble plus de 145 000 habitants. Entre les ruelles de la Cité Plantagenêt, les grands axes comme l'avenue Bollée ou le boulevard Demorieux, et la rocade souvent chargée, les pare-brise sont mis à rude épreuve. Gravillons, chocs thermiques, projections sur l'A11 : VISION PARE-BRISE traite tous les dommages vitrage au Mans et en Sarthe.",
    distance: 'Le Mans et agglomération',
    nearbyCommunes: [
      'Allonnes',
      'Coulaines',
      'Arnage',
      'Mulsanne',
      'Ruaudin',
      'Yvré-l\'Évêque',
      'Sargé-lès-le-Mans',
      'La Chapelle-Saint-Aubin',
    ],
    geo: { latitude: 47.9906, longitude: 0.2054 },
    population: '145 000',
  },
  allonnes: {
    slug: 'allonnes',
    name: 'Allonnes',
    department: 'Sarthe',
    departmentCode: '72',
    region: 'Pays de la Loire',
    metaTitle: 'Pare-brise Allonnes (72) — 250€ Offerts + Franchise Offerte | Vision Pare-Brise',
    metaDescription:
      'Remplacement et réparation de pare-brise à Allonnes (72). Jusqu\'à 250€ offerts, franchise offerte, intervention à domicile. VISION PARE-BRISE.',
    heroTitle: 'Pare-brise à Allonnes',
    heroSubtitle:
      'Jusqu\'à 250€ offerts + franchise offerte*. Intervention à domicile à Allonnes.',
    intro:
      "VISION PARE-BRISE intervient à Allonnes et dans toute la commune pour le remplacement et la réparation de pare-brise. Que vous habitiez au centre, à Chaoué, aux Perrières ou près du parc des Expositions, notre technicien mobile se déplace gratuitement chez vous.",
    whyUs: [
      'Intervention à domicile gratuite à Allonnes',
      'Technicien mobile avec équipement professionnel complet',
      'Jusqu\'à 250€ offerts + franchise offerte',
      'Toutes assurances acceptées, 0€ à avancer',
      'Rendez-vous rapide sous 48h',
      'Calibrage ADAS inclus dans le remplacement',
      'Réparation d\'impact gratuite avec assurance',
    ],
    localInfo:
      "Allonnes, deuxième commune de l'agglomération mancelle avec environ 11 000 habitants, se situe au sud-ouest du Mans. Les trajets quotidiens vers Le Mans via la D23 ou la rocade exposent les pare-brise aux projections de gravillons. VISION PARE-BRISE apporte un service rapide et professionnel aux Allonnais.",
    distance: 'À 5 km du Mans (≈ 10 min)',
    nearbyCommunes: [
      'Le Mans',
      'Arnage',
      'Mulsanne',
      'La Suze-sur-Sarthe',
      'Spay',
      'Voivres-lès-le-Mans',
    ],
    geo: { latitude: 47.9686, longitude: 0.1647 },
    population: '11 000',
  },
  coulaines: {
    slug: 'coulaines',
    name: 'Coulaines',
    department: 'Sarthe',
    departmentCode: '72',
    region: 'Pays de la Loire',
    metaTitle: 'Pare-brise Coulaines (72) — 250€ Offerts + Franchise Offerte | Vision Pare-Brise',
    metaDescription:
      'Remplacement et réparation de pare-brise à Coulaines (72). 250€ offerts, franchise offerte, service à domicile gratuit. VISION PARE-BRISE.',
    heroTitle: 'Pare-brise à Coulaines',
    heroSubtitle:
      'Jusqu\'à 250€ offerts + franchise offerte*. Service à domicile à Coulaines.',
    intro:
      "VISION PARE-BRISE se déplace à Coulaines pour la réparation et le remplacement de votre pare-brise. Commune résidentielle au nord du Mans, Coulaines bénéficie d'une intervention rapide de notre technicien mobile, directement chez vous.",
    whyUs: [
      'Intervention à domicile gratuite à Coulaines',
      'Proximité immédiate avec Le Mans',
      'Jusqu\'à 250€ offerts + franchise offerte',
      'Prise en charge directe par toutes les assurances',
      'Intervention rapide sous 48h',
      'Calibrage ADAS inclus',
      'Pièces de qualité équivalente origine',
    ],
    localInfo:
      "Coulaines, commune de 8 000 habitants au nord du Mans, est un cadre de vie prisé par les familles. Les déplacements quotidiens vers Le Mans via l'avenue Nationale et les routes départementales sont propices aux projections sur les pare-brise. VISION PARE-BRISE offre une intervention de proximité aux Coulainais.",
    distance: 'À 3 km du Mans (≈ 7 min)',
    nearbyCommunes: [
      'Le Mans',
      'Sargé-lès-le-Mans',
      'La Chapelle-Saint-Aubin',
      'Saint-Pavace',
      'Neuville-sur-Sarthe',
    ],
    geo: { latitude: 48.0162, longitude: 0.1881 },
    population: '8 000',
  },
  'la-fleche': {
    slug: 'la-fleche',
    name: 'La Flèche',
    department: 'Sarthe',
    departmentCode: '72',
    region: 'Pays de la Loire',
    metaTitle: 'Pare-brise La Flèche (72) — 250€ Offerts + Franchise Offerte | Vision Pare-Brise',
    metaDescription:
      'Remplacement et réparation de pare-brise à La Flèche. 250€ offerts, franchise offerte, intervention à domicile gratuite. VISION PARE-BRISE Sarthe.',
    heroTitle: 'Pare-brise à La Flèche',
    heroSubtitle:
      'Jusqu\'à 250€ offerts + franchise offerte*. On se déplace gratuitement à La Flèche.',
    intro:
      "VISION PARE-BRISE intervient à La Flèche et dans les communes alentour. Sous-préfecture de la Sarthe, La Flèche bénéficie de notre service à domicile gratuit pour tout remplacement ou réparation de pare-brise.",
    whyUs: [
      'Intervention à domicile gratuite à La Flèche',
      'Technicien mobile professionnel',
      'Jusqu\'à 250€ offerts + franchise offerte',
      'Toutes assurances acceptées, zéro avance',
      'Rendez-vous sous 48h',
      'Calibrage ADAS inclus',
      'Réparation d\'impact en 30 min',
    ],
    localInfo:
      "La Flèche, sous-préfecture de la Sarthe d'environ 15 000 habitants, est connue pour son Prytanée militaire et le Zoo de La Flèche. Les routes départementales vers Le Mans (D23, D306) et les axes vers Angers ou Tours sont fréquentés et exposent les pare-brise aux impacts. VISION PARE-BRISE assure une intervention de qualité aux Fléchois.",
    distance: 'À 45 km du Mans (≈ 40 min)',
    nearbyCommunes: [
      'Sainte-Colombe-de-la-Flèche',
      'Cré-sur-Loir',
      'Clermont-Créans',
      'Bazouges-sur-le-Loir',
      'Le Lude',
      'Malicorne-sur-Sarthe',
    ],
    geo: { latitude: 47.6974, longitude: -0.0778 },
    population: '15 000',
  },
  'sable-sur-sarthe': {
    slug: 'sable-sur-sarthe',
    name: 'Sablé-sur-Sarthe',
    department: 'Sarthe',
    departmentCode: '72',
    region: 'Pays de la Loire',
    metaTitle: 'Pare-brise Sablé-sur-Sarthe (72) — 250€ Offerts | Vision Pare-Brise',
    metaDescription:
      'Remplacement et réparation de pare-brise à Sablé-sur-Sarthe. 250€ offerts, franchise offerte, service à domicile. VISION PARE-BRISE.',
    heroTitle: 'Pare-brise à Sablé-sur-Sarthe',
    heroSubtitle:
      'Jusqu\'à 250€ offerts + franchise offerte*. Intervention à domicile à Sablé.',
    intro:
      "VISION PARE-BRISE se déplace à Sablé-sur-Sarthe et ses environs pour le remplacement et la réparation de votre pare-brise. Notre technicien mobile intervient gratuitement chez vous avec tout le matériel professionnel nécessaire.",
    whyUs: [
      'Intervention à domicile gratuite à Sablé-sur-Sarthe',
      'Matériel professionnel complet',
      'Jusqu\'à 250€ offerts + franchise offerte',
      'Prise en charge directe par votre assureur',
      'Intervention rapide sous 48h',
      'Calibrage ADAS inclus',
      'Pièces certifiées de qualité origine',
    ],
    localInfo:
      "Sablé-sur-Sarthe, ville de 13 000 habitants au nord-ouest de la Sarthe, est un noeud routier entre Le Mans, Laval et Angers. L'autoroute A11 et les routes départementales alentour sont fréquentées par les trajets quotidiens, exposant les pare-brise aux projections. VISION PARE-BRISE offre une solution rapide et fiable aux Saboliens.",
    distance: 'À 55 km du Mans (≈ 45 min)',
    nearbyCommunes: [
      'Précigné',
      'Solesmes',
      'Juigné-sur-Sarthe',
      'Auvers-le-Hamon',
      'Asnières-sur-Vègre',
      'Parcé-sur-Sarthe',
    ],
    geo: { latitude: 47.8395, longitude: -0.3341 },
    population: '13 000',
  },
};

export function getCityData(slug: string): CityData | undefined {
  return CITIES_DATA[slug];
}

export function getAllCitySlugs(): string[] {
  return Object.keys(CITIES_DATA);
}

export function getAllCities(): CityData[] {
  return Object.values(CITIES_DATA);
}
