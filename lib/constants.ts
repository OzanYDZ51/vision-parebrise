export const COMPANY = {
  name: 'VISION PARE-BRISE',
  phone: '02 55 99 62 25',
  phoneLink: 'tel:+33255996225',
  mobile: '06 50 99 12 04',
  mobileLink: 'tel:+33650991204',
  email: 'contact@visionparebrise.fr',
  address: '179 rue de Laigné',
  city: '72100 Le Mans',
  slogan: 'On a l\'oeil sur votre pare-brise',
  url: 'https://vision-parebrise.vercel.app',
  offer: '250€',
  mapsUrl: 'https://www.google.com/maps/embed/v1/place?key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8&q=179+rue+de+Laign%C3%A9,72100+Le+Mans,France&zoom=15',
  mapsDirections: 'https://maps.google.com/?q=179+rue+de+Laign%C3%A9+72100+Le+Mans',
  whatsapp: '+33650991204',
  social: {
    instagram: 'https://www.instagram.com/visionparebrise',
    facebook: 'https://www.facebook.com/visionparebrise',
  },
  siret: '',
  experience: '3+',
} as const;

export const NAV_ITEMS = [
  { slug: 'accueil', label: 'Accueil', href: '/' },
  { slug: 'services', label: 'Services', href: '/services/remplacement-pare-brise' },
  { slug: 'zones', label: 'Zones d\'intervention', href: '/zones' },
  { slug: 'faq', label: 'FAQ', href: '/faq' },
] as const;

export const ZONES_SUBMENU = [
  { label: 'Le Mans (72)', href: '/zones/le-mans' },
  { label: 'Allonnes (72)', href: '/zones/allonnes' },
  { label: 'Coulaines (72)', href: '/zones/coulaines' },
  { label: 'La Flèche (72)', href: '/zones/la-fleche' },
  { label: 'Sablé-sur-Sarthe (72)', href: '/zones/sable-sur-sarthe' },
] as const;

export const SERVICES_SUBMENU = [
  { label: 'Remplacement pare-brise', href: '/services/remplacement-pare-brise' },
  { label: "Réparation d'impact", href: '/services/reparation-impact' },
  { label: 'Vitres latérales', href: '/services/vitres-laterales' },
  { label: 'Lunette arrière', href: '/services/lunette-arriere' },
  { label: 'Calibrage ADAS', href: '/services/calibrage-adas' },
  { label: 'Intervention à domicile', href: '/services/intervention-domicile' },
  { label: 'Prise en charge assurance', href: '/services/prise-en-charge-assurance' },
] as const;

export const FAQ_ITEMS = [
  {
    question: 'Est-ce que mon assurance couvre le changement de pare-brise ?',
    answer: "Absolument ! Dès lors que vous disposez d'une garantie bris de glace, votre assurance prend en charge le remplacement intégral. Chez VISION PARE-BRISE, nous nous occupons de tout le dossier administratif. Vous n'avez rien à avancer : c'est le tiers payant.",
  },
  {
    question: "C'est quoi exactement l'offre 250€ + franchise offerte ?",
    answer: "Pour chaque remplacement de pare-brise, VISION PARE-BRISE vous fait bénéficier d'un avantage pouvant aller jusqu'à 250€ par virement bancaire, en plus de la prise en charge de votre franchise. Concrètement, dans la plupart des situations, vous ne déboursez pas un centime. Conditions disponibles sur demande.",
  },
  {
    question: 'Ça prend combien de temps un remplacement ?',
    answer: "Comptez environ 1 heure pour le remplacement en lui-même. Ensuite, il faut patienter 1 à 2 heures pour le séchage de la colle avant de reprendre le volant. Pour une simple réparation d'impact, c'est réglé en 30 minutes chrono.",
  },
  {
    question: 'Vous vous déplacez à domicile ?',
    answer: "Oui, c'est même notre spécialité ! Notre technicien intervient gratuitement chez vous, sur votre lieu de travail ou où vous le souhaitez dans toute la Sarthe. Il arrive équipé de tout le matériel professionnel nécessaire.",
  },
  {
    question: 'Comment savoir si mon impact est réparable ou s\'il faut tout changer ?',
    answer: "Si votre impact est plus petit qu'une pièce de 2€ et qu'il se situe en dehors du champ de vision direct du conducteur, il est généralement réparable. La réparation dure 30 minutes et ne coûte rien avec votre assurance (pas de franchise). Au-delà, un remplacement complet s'impose.",
  },
  {
    question: 'Quels types de véhicules acceptez-vous ?',
    answer: "Tous sans exception : citadines, berlines, SUV, utilitaires, camionnettes… Nous travaillons sur toutes les marques : Peugeot, Renault, Citroën, Volkswagen, BMW, Mercedes, Audi, Toyota, Hyundai, Kia, et bien d'autres encore.",
  },
  {
    question: 'Je dois avancer de l\'argent ?',
    answer: "Jamais. VISION PARE-BRISE pratique le tiers payant intégral avec l'ensemble des compagnies d'assurance françaises. Nous facturons directement votre assureur. Zéro surprise, zéro frais pour vous.",
  },
  {
    question: 'Le recalibrage de la caméra ADAS est compris ?',
    answer: "Oui ! Si votre véhicule est équipé de systèmes d'aide à la conduite (caméra frontale, capteurs de distance…), le calibrage ADAS est systématiquement inclus dans notre prestation de remplacement. Aucun supplément à prévoir.",
  },
  {
    question: 'Quels sont vos jours et horaires d\'ouverture ?',
    answer: "Nous sommes disponibles 7 jours sur 7, de 9h à 17h. Vous pouvez nous joindre par téléphone, ou réserver directement votre créneau en ligne via notre formulaire de prise de rendez-vous.",
  },
  {
    question: 'Quels papiers dois-je préparer ?',
    answer: "Pour une intervention prise en charge par l'assurance, ayez simplement votre carte verte (attestation d'assurance), votre carte grise et un contrôle technique valide. VISION PARE-BRISE s'occupe de toutes les démarches restantes.",
  },
] as const;

export const TESTIMONIALS = [
  {
    name: 'Sophie M.',
    city: 'Le Mans',
    rating: 5,
    text: "Service impeccable ! Le technicien est venu directement chez moi, tout était réglé en une heure. Et avec l'offre 250€, je n'ai rien payé du tout. Je recommande vivement.",
    date: '2025-11',
  },
  {
    name: 'Thomas R.',
    city: 'Allonnes',
    rating: 5,
    text: "Très professionnel. La prise en charge avec mon assurance a été gérée de A à Z. Aucun frais de ma part. Le calibrage ADAS était inclus. Parfait !",
    date: '2025-10',
  },
  {
    name: 'Marie-Claire D.',
    city: 'Le Mans',
    rating: 5,
    text: "J'avais un impact sur mon pare-brise depuis des semaines. Réparé en 30 minutes chez moi. Gratuit avec l'assurance et sans franchise. Merci Vision Pare-Brise !",
    date: '2025-12',
  },
  {
    name: 'Jean-Pierre L.',
    city: 'Coulaines',
    rating: 5,
    text: "Intervention rapide et soignée sur mon utilitaire. Le technicien était ponctuel, sympa et le travail est nickel. En plus, j'ai touché 250€. Que demander de plus ?",
    date: '2025-09',
  },
  {
    name: 'Nathalie B.',
    city: 'La Flèche',
    rating: 5,
    text: "Malgré la distance depuis La Flèche, le technicien s'est déplacé sans problème. Remplacement effectué devant chez moi, rien à payer. Service au top.",
    date: '2026-01',
  },
  {
    name: 'Karim A.',
    city: 'Le Mans',
    rating: 5,
    text: "Deuxième fois que je fais appel à Vision Pare-Brise et toujours aussi satisfait. Ils gèrent tout avec l'assurance, le pare-brise est d'origine, et le travail est propre.",
    date: '2026-02',
  },
  {
    name: 'Isabelle F.',
    city: 'Sablé-sur-Sarthe',
    rating: 4,
    text: "Très bon service. Le technicien était compétent et arrangeant. Seul petit bémol : le créneau a dû être décalé d'une heure, mais au final tout s'est bien passé.",
    date: '2025-11',
  },
  {
    name: 'Lucas G.',
    city: 'Le Mans',
    rating: 5,
    text: "Mon pare-brise fissuré a été remplacé en un temps record. La qualité du vitrage est top et le calibrage de ma caméra ADAS a été fait dans la foulée. Rien à redire.",
    date: '2026-03',
  },
  {
    name: 'Émilie P.',
    city: 'Allonnes',
    rating: 5,
    text: "Je redoutais les démarches administratives mais Vision Pare-Brise a tout géré. Un simple appel et c'était réglé. Merci pour ce service simple et efficace !",
    date: '2025-12',
  },
  {
    name: 'Patrick V.',
    city: 'Le Mans',
    rating: 5,
    text: "Professionnel du début à la fin. Pare-brise changé sur mon SUV sans aucun souci. Le résultat est parfait et la franchise a bien été prise en charge. Bravo !",
    date: '2026-01',
  },
] as const;
