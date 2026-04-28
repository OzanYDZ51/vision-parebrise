export interface ServiceData {
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  heroTitle: string;
  heroSubtitle: string;
  intro: string;
  features: string[];
  process: { step: string; desc: string }[];
}

export const SERVICES_DATA: Record<string, ServiceData> = {
  'remplacement-pare-brise': {
    slug: 'remplacement-pare-brise',
    title: 'Remplacement de pare-brise',
    metaTitle: 'Remplacement Pare-brise Le Mans — Jusqu\'à 250€ Offerts | Vision Pare-Brise',
    metaDescription: 'Remplacement de pare-brise au Mans et en Sarthe. Jusqu\'à 250€ offerts, franchise offerte, toutes assurances. Intervention à domicile en 1h. Appelez le 02 55 99 62 25.',
    heroTitle: 'Remplacement de pare-brise au Mans',
    heroSubtitle: 'Jusqu\'à 250€ offerts pour chaque remplacement. Intervention chez vous, sans avance de frais.',
    intro: "Pare-brise fissuré, impacté ou brisé ? VISION PARE-BRISE intervient directement à votre domicile dans toute la Sarthe pour remplacer votre vitrage avec des pièces certifiées d'origine. Toutes les assurances sont acceptées et vous ne déboursez rien.",
    features: [
      'Vitrage certifié de qualité équivalente origine',
      'Intervention réalisée en environ 1 heure',
      'Compatible avec toutes les marques et tous les modèles',
      'Jusqu\'à 250€ offerts sur chaque intervention',
      'Facturation directe à votre assureur',
      'Calibrage des caméras ADAS inclus sans supplément',
      'Déplacement gratuit dans toute la Sarthe',
      'Garantie à vie sur la qualité de pose',
    ],
    process: [
      { step: 'Réservez', desc: 'Appelez-nous ou remplissez le formulaire en ligne pour fixer un créneau.' },
      { step: 'On gère l\'assurance', desc: 'Nous prenons en charge 100% du dossier administratif avec votre assureur.' },
      { step: 'Intervention chez vous', desc: 'Notre technicien se déplace et remplace votre pare-brise en 1h.' },
      { step: 'Calibrage & vérification', desc: 'Calibrage ADAS et contrôle qualité avant de vous rendre les clés.' },
    ],
  },
  'reparation-impact': {
    slug: 'reparation-impact',
    title: "Réparation d'impact",
    metaTitle: "Réparation Impact Pare-brise Le Mans — Gratuit avec Assurance | Vision Pare-Brise",
    metaDescription: "Réparation d'impact sur pare-brise au Mans. 100% gratuit avec assurance bris de glace, sans franchise. Intervention rapide en 30 min. VISION PARE-BRISE.",
    heroTitle: "Réparation d'impact au Mans",
    heroSubtitle: "100% gratuit avec votre assurance. Sans franchise, sans avance. 30 minutes chrono.",
    intro: "Un éclat sur votre pare-brise ? S'il est détecté assez tôt, une réparation suffit pour éviter le remplacement complet. VISION PARE-BRISE répare votre impact gratuitement grâce à votre assurance bris de glace, sans franchise et sans aucun frais à avancer.",
    features: [
      'Réparation express en 30 minutes',
      'Entièrement gratuit avec assurance bris de glace',
      'Zéro franchise à régler',
      'Technique de résine professionnelle certifiée',
      'Résultat quasiment invisible à l\'oeil nu',
      'Évite le remplacement complet du pare-brise',
      'Aucun frais à avancer',
      'Conservation du vitrage d\'origine de votre véhicule',
    ],
    process: [
      { step: 'Diagnostic', desc: 'Analyse de l\'impact : dimension, localisation et profondeur.' },
      { step: 'Préparation', desc: 'Nettoyage minutieux et installation de l\'outillage de réparation.' },
      { step: 'Injection résine', desc: 'Application d\'une résine spéciale qui colmate et renforce l\'impact.' },
      { step: 'Finition', desc: 'Polissage de surface et contrôle qualité. Résultat quasi invisible.' },
    ],
  },
  'vitres-laterales': {
    slug: 'vitres-laterales',
    title: 'Remplacement vitres latérales',
    metaTitle: 'Remplacement Vitres Latérales Le Mans — Toutes Assurances | Vision Pare-Brise',
    metaDescription: 'Remplacement de vitres latérales au Mans et en Sarthe. Toutes marques, prise en charge assurance. Intervention rapide à domicile. VISION PARE-BRISE.',
    heroTitle: 'Remplacement de vitres latérales',
    heroSubtitle: 'Toutes marques, toutes assurances. Intervention rapide dans toute la Sarthe.',
    intro: "Vitre latérale brisée à la suite d'un vandalisme, d'un accident ou d'une tentative d'effraction ? VISION PARE-BRISE assure le remplacement express de vos vitres latérales avant et arrière, quelle que soit la marque de votre véhicule.",
    features: [
      'Vitres latérales avant et arrière',
      'Toutes marques et tous modèles de véhicules',
      'Prise en charge par votre assurance',
      'Intervention rapide à domicile',
      'Pièces de qualité équivalente origine',
      'Déplacement gratuit dans toute la Sarthe',
    ],
    process: [
      { step: 'Contactez-nous', desc: 'Par téléphone ou via notre formulaire de prise de rendez-vous.' },
      { step: 'Commande pièce', desc: 'Nous commandons la vitre exacte correspondant à votre véhicule.' },
      { step: 'Pose à domicile', desc: 'Remplacement rapide directement chez vous.' },
      { step: 'Vérification', desc: 'Test d\'étanchéité et de bon fonctionnement de la vitre.' },
    ],
  },
  'lunette-arriere': {
    slug: 'lunette-arriere',
    title: 'Remplacement lunette arrière',
    metaTitle: 'Remplacement Lunette Arrière Le Mans — Dégivrage Inclus | Vision Pare-Brise',
    metaDescription: 'Remplacement de lunette arrière au Mans avec système de dégivrage. Toutes assurances, intervention professionnelle. VISION PARE-BRISE Sarthe.',
    heroTitle: 'Remplacement de lunette arrière',
    heroSubtitle: 'Système de dégivrage préservé. Toutes assurances, intervention soignée.',
    intro: "La lunette arrière de votre véhicule est endommagée ? VISION PARE-BRISE procède à son remplacement en intégrant le système de dégivrage d'origine. Intervention prise en charge par votre assurance bris de glace.",
    features: [
      'Système de dégivrage intégré',
      'Compatible toutes marques automobiles',
      'Prise en charge par votre assurance',
      'Vitrage de qualité équivalente origine',
      'Pose professionnelle avec collage certifié',
      'Contrôle d\'étanchéité systématique',
    ],
    process: [
      { step: 'Rendez-vous', desc: 'Planification et vérification de la référence exacte.' },
      { step: 'Commande', desc: 'Approvisionnement de la lunette arrière adaptée.' },
      { step: 'Pose', desc: 'Dépose de l\'ancienne et pose de la nouvelle avec collage professionnel.' },
      { step: 'Tests', desc: 'Vérification du dégivrage et test complet d\'étanchéité.' },
    ],
  },
  'calibrage-adas': {
    slug: 'calibrage-adas',
    title: 'Calibrage caméra ADAS',
    metaTitle: 'Calibrage ADAS Le Mans — Caméra & Capteurs Inclus | Vision Pare-Brise',
    metaDescription: 'Calibrage professionnel des caméras et capteurs ADAS après remplacement pare-brise au Mans. Inclus dans la prestation. VISION PARE-BRISE.',
    heroTitle: 'Calibrage caméra ADAS',
    heroSubtitle: 'Recalibrage professionnel de vos systèmes d\'aide à la conduite, inclus dans le remplacement.',
    intro: "Les véhicules récents embarquent des caméras et capteurs ADAS (systèmes d'aide à la conduite) fixés au pare-brise. Après chaque remplacement, VISION PARE-BRISE effectue le recalibrage avec un équipement professionnel pour garantir le bon fonctionnement de vos assistances de conduite.",
    features: [
      'Calibrage statique et dynamique',
      'Matériel professionnel de dernière génération',
      'Inclus dans chaque remplacement de pare-brise',
      'Compatible avec toutes les marques',
      'Sécurité de conduite garantie',
      'Technicien formé et certifié',
    ],
    process: [
      { step: 'Identification', desc: 'Repérage des capteurs et caméras ADAS de votre véhicule.' },
      { step: 'Remplacement', desc: 'Pose du nouveau pare-brise avec fixations caméra.' },
      { step: 'Calibrage', desc: 'Recalibrage précis avec équipement professionnel dédié.' },
      { step: 'Validation', desc: 'Test complet de fonctionnement de tous les systèmes ADAS.' },
    ],
  },
  'intervention-domicile': {
    slug: 'intervention-domicile',
    title: 'Intervention à domicile',
    metaTitle: 'Pare-brise à Domicile Le Mans & Sarthe — Service Gratuit | Vision Pare-Brise',
    metaDescription: 'Remplacement et réparation de pare-brise à domicile au Mans et dans toute la Sarthe. Service gratuit, technicien mobile, toutes assurances. VISION PARE-BRISE.',
    heroTitle: 'Intervention à domicile',
    heroSubtitle: 'Service gratuit dans toute la Sarthe. Notre technicien se déplace chez vous.',
    intro: "Pas le temps de vous déplacer ? C'est notre spécialité. Le technicien VISION PARE-BRISE vient directement chez vous, à votre bureau ou partout dans la Sarthe avec tout le matériel nécessaire. Le déplacement est 100% gratuit.",
    features: [
      'Déplacement entièrement gratuit',
      'Couverture de toute la Sarthe (72)',
      'Intervention chez vous ou sur votre lieu de travail',
      'Matériel professionnel complet embarqué',
      'Mêmes garanties qu\'en atelier',
      'Créneau à votre convenance, 7j/7',
    ],
    process: [
      { step: 'Choisissez', desc: 'Indiquez le lieu et l\'horaire qui vous arrangent.' },
      { step: 'On arrive', desc: 'Notre technicien vient équipé de tout le nécessaire.' },
      { step: 'Intervention', desc: 'Remplacement ou réparation réalisé directement sur place.' },
      { step: 'Calibrage', desc: 'Calibrage ADAS effectué si besoin, toujours sur place.' },
    ],
  },
  'prise-en-charge-assurance': {
    slug: 'prise-en-charge-assurance',
    title: 'Prise en charge assurance',
    metaTitle: 'Prise en Charge Assurance Pare-brise — 0€ à Avancer | Vision Pare-Brise',
    metaDescription: 'Gestion intégrale de votre dossier assurance pare-brise. Tiers payant avec toutes les compagnies. Aucune avance de frais. VISION PARE-BRISE Le Mans.',
    heroTitle: 'Prise en charge assurance',
    heroSubtitle: 'Zéro démarche, zéro avance de frais. VISION PARE-BRISE s\'occupe de tout.',
    intro: "Pas envie de gérer la paperasse ? VISION PARE-BRISE prend en charge l'intégralité de votre dossier d'assurance. Nous travaillons en tiers payant avec toutes les compagnies d'assurance du marché. Résultat : vous n'avancez pas un euro.",
    features: [
      'Compatible avec toutes les compagnies d\'assurance',
      'Tiers payant intégral : 0€ à avancer',
      'Prise en charge complète du dossier de A à Z',
      'Contact direct avec votre assureur',
      'Factures transmises sans intervention de votre part',
      'Aucune démarche administrative pour vous',
    ],
    process: [
      { step: 'Vos documents', desc: 'Préparez votre carte verte, carte grise et contrôle technique.' },
      { step: 'Déclaration', desc: 'Nous effectuons la déclaration de sinistre auprès de votre assurance.' },
      { step: 'Accord', desc: 'Obtention de l\'accord de prise en charge par votre assureur.' },
      { step: 'Intervention', desc: 'Remplacement ou réparation réalisé, 0€ à débourser.' },
    ],
  },
};

export function getServiceData(slug: string): ServiceData | undefined {
  return SERVICES_DATA[slug];
}

export function getAllServiceSlugs(): string[] {
  return Object.keys(SERVICES_DATA);
}
