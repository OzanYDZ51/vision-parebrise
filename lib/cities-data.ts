// Données des zones d'intervention — contenu SEO local enrichi (unique par ville).
// Métadonnées géographiques (geo, département) préservées ; contenu rédactionnel
// vérifié factuellement et dé-dupliqué.

export interface CityFaqItem {
  question: string;
  answer: string;
}

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
  localContext: string;
  whyUs: string[];
  neighborhoods: string[];
  majorRoads: string[];
  landmarks: string[];
  localFaq: CityFaqItem[];
  targetKeywords: string[];
  distance: string;
  nearbyCommunes: string[];
  geo: { latitude: number; longitude: number };
  population: string;
}

export const CITIES_DATA: Record<string, CityData> = {
  "le-mans": {
    "slug": "le-mans",
    "name": "Le Mans",
    "department": "Sarthe",
    "departmentCode": "72",
    "region": "Pays de la Loire",
    "metaTitle": "Pare-brise Le Mans : jusqu'à 250€ offerts | Vision Pare-Brise",
    "metaDescription": "Remplacement et réparation de pare-brise au Mans : jusqu'à 250€ offerts, franchise offerte, toutes assurances, 0€ à avancer. Technicien à domicile 7j/7.",
    "heroTitle": "Pare-brise au Mans",
    "heroSubtitle": "Jusqu'à 250€ offerts + franchise offerte* pour tout remplacement. Notre technicien vient chez vous, gratuitement, partout dans l'agglomération mancelle.",
    "intro": "Installé au 179 rue de Laigné, VISION PARE-BRISE est l'atelier mobile du vitrage automobile au Mans. Pas de garage où patienter une demi-journée : notre technicien se déplace sans frais, de la Cité Plantagenêt à Pontlieue, des Sablons à la Californie, de Bellevue au campus Université-Ribay, et pose votre pare-brise là où vous êtes, dans votre allée, sur un parking ou au travail. Un impact reçu avenue Bollée, une fissure repérée en quittant la rocade, et vous obtenez un créneau sous 48h, le plus souvent dès le lendemain, 7j/7 de 9h à 17h. Chaque remplacement vous fait gagner jusqu'à 250€ ainsi que votre franchise, et nous montons le dossier en tiers payant avec toutes les compagnies : vous ne sortez pas un euro. Un éclat sur la lunette arrière ? Votre garantie bris de glace couvre la réparation, sans franchise. Le calibrage des caméras et capteurs ADAS accompagne chaque pose, le verre est de qualité équivalente origine, et la garantie sur le travail court à vie, du centre historique jusqu'aux abords du circuit des 24 Heures.",
    "localContext": "Capitale de la Sarthe et ville des 24 Heures, Le Mans fait souffrir les pare-brise par son trafic dense. L'échangeur du boulevard Demorieux et la rocade qui ceinture la ville projettent gravillons et débris à chaque ralentissement. Avenue Bollée ou boulevard Winston Churchill, un caillou soulevé par un poids lourd fend un vitrage en une fraction de seconde. Les entrées d'A11 vers Paris et Angers, d'A28 vers Tours et Alençon, d'A81 vers Laval et Rennes ajoutent leurs projections à grande vitesse, où un éclat anodin s'allonge en fissure dès le premier coup de chaud. Entre les nuits fraîches de la vallée de la Sarthe et le plein soleil sur un parking de centre commercial, le verre travaille et la casse s'aggrave. Traitez le dégât avant qu'il n'atteigne votre champ de vision : VISION PARE-BRISE le stoppe à temps, partout au Mans.",
    "whyUs": [
      "Technicien mobile présent dans tous les quartiers du Mans, de la Cité Plantagenêt aux Sablons, sans frais de déplacement",
      "Créneau sous 48h, souvent dès le lendemain, depuis notre siège du 179 rue de Laigné ou directement chez vous",
      "Jusqu'à 250€ offerts et franchise offerte à chaque remplacement de pare-brise",
      "Tiers payant complet avec toutes les compagnies : aucun euro à avancer, le dossier est géré pour vous",
      "Réglage ADAS des caméras et capteurs assuré à chaque pose, essentiel près des axes rapides manceaux",
      "Impact réparé gratuitement grâce à votre garantie bris de glace, franchise comprise",
      "Verre de qualité équivalente origine et travail garanti à vie",
      "Plus de 3 ans sur l'agglomération mancelle, joignable 7j/7 de 9h à 17h"
    ],
    "neighborhoods": [
      "Cité Plantagenêt (Vieux Mans)",
      "Pontlieue",
      "Les Sablons",
      "Bellevue",
      "La Californie",
      "Université-Ribay",
      "Ronceray-Glonnières"
    ],
    "majorRoads": [
      "Avenue Bollée (D314)",
      "Boulevard Demorieux",
      "Boulevard Winston Churchill",
      "Rocade du Mans (périphérique)",
      "Autoroute A11 (Paris / Angers)",
      "Autoroute A28 (Tours / Alençon)",
      "Autoroute A81 (Laval / Rennes)"
    ],
    "landmarks": [
      "Circuit des 24 Heures du Mans / Circuit Bugatti",
      "Cité Plantagenêt et cathédrale Saint-Julien",
      "Préfecture de la Sarthe",
      "Gare du Mans",
      "Le Mans Université (campus Ribay)"
    ],
    "localFaq": [
      {
        "question": "Couvrez-vous l'ensemble des quartiers manceaux ?",
        "answer": "Toute la ville et son agglomération, oui. Cité Plantagenêt, Pontlieue, Les Sablons, Bellevue, la Californie ou campus Université-Ribay : le technicien rejoint votre adresse sans frais kilométriques. L'intervention se fait à domicile, au bureau ou sur votre place de stationnement, selon ce qui vous arrange."
      },
      {
        "question": "Sous combien de temps obtient-on un rendez-vous au Mans ?",
        "answer": "Comptez un créneau sous 48h, très souvent dès le lendemain. Notre siège du 179 rue de Laigné se trouve au cœur de l'agglomération, ce qui raccourcit nos délais sur la ville. Réservez l'horaire qui vous convient au 02 55 99 62 25 ou au 06 50 99 12 04, 7j/7 de 9h à 17h."
      },
      {
        "question": "Mon véhicule a une caméra : faut-il un calibrage après le changement ?",
        "answer": "Dès qu'une caméra ou des capteurs équipent l'arrière de votre pare-brise, le réglage devient obligatoire. Sur la rocade, avenue Bollée ou aux entrées d'A11 et d'A28, le freinage assisté et le maintien de voie doivent répondre au millimètre. Le calibrage ADAS fait partie de chaque remplacement, sans supplément."
      },
      {
        "question": "Un éclat pris sur la rocade, on fait quoi ?",
        "answer": "On le traite vite, avant qu'il ne file en fissure. La réparation dure une trentaine de minutes et reste gratuite avec votre garantie bris de glace, franchise comprise. Le technicien se déplace chez vous au Mans le jour même ou le lendemain, selon les disponibilités."
      },
      {
        "question": "Dois-je avancer les frais auprès de mon assurance ?",
        "answer": "Non. Le tiers payant fonctionne avec toutes les compagnies : aucun débours de votre part, nous réglons le dossier avec votre assureur. Et sur tout remplacement de pare-brise au Mans, vous repartez avec jusqu'à 250€ offerts et votre franchise offerte."
      }
    ],
    "targetKeywords": [
      "remplacement pare-brise Le Mans",
      "réparation pare-brise Le Mans",
      "pare-brise à domicile Le Mans",
      "réparation impact Le Mans",
      "bris de glace Le Mans Sarthe",
      "vitrage automobile Le Mans",
      "changement pare-brise 72100"
    ],
    "distance": "Le Mans et agglomération",
    "nearbyCommunes": [
      "Coulaines",
      "Allonnes",
      "Arnage",
      "Mulsanne",
      "Ruaudin",
      "Yvré-l'Évêque",
      "Sargé-lès-le-Mans",
      "La Chapelle-Saint-Aubin",
      "Rouillon",
      "Changé"
    ],
    "geo": {
      "latitude": 47.9906,
      "longitude": 0.2054
    },
    "population": "145 000"
  },
  "allonnes": {
    "slug": "allonnes",
    "name": "Allonnes",
    "department": "Sarthe",
    "departmentCode": "72",
    "region": "Pays de la Loire",
    "metaTitle": "Pare-brise Allonnes (72) : 250€ offerts | Vision Pare-Brise",
    "metaDescription": "Pare-brise à Allonnes (72) : remplacement et réparation à domicile. Jusqu'à 250€ offerts, franchise prise en charge, 7j/7. Toutes assurances, 0€ à avancer.",
    "heroTitle": "Pare-brise à Allonnes",
    "heroSubtitle": "Jusqu'à 250€ offerts + franchise offerte* sur votre remplacement. Notre technicien vient à vous, à Allonnes.",
    "intro": "Deuxième commune de l'agglomération mancelle, Allonnes mérite mieux qu'une matinée perdue au garage. VISION PARE-BRISE remplace et répare votre vitrage à l'adresse de votre choix : centre-ville, pavillons du Chaoué, quartier des Perrières ou entreprises de la ZA Le Monné. Le fourgon-atelier se range devant votre porte ou sur le parking de votre travail et le technicien opère sur place, sans le moindre frais de route, 7j/7 de 9h à 17h. Un appel suffit pour fixer un rendez-vous sous 48h, le plus souvent dès le lendemain. Sur un remplacement, vous touchez jusqu'à 250€ et votre franchise est prise en charge ; le règlement se fait en tiers payant avec votre assurance, sans aucune avance de votre part. Un impact encore isolé se rebouche gratuitement avec votre garantie bris de glace, sans franchise, tant qu'il n'a pas viré à la fissure. Le verre posé est de qualité équivalente origine, les caméras et capteurs ADAS repartent recalibrés après la pose, et le travail est garanti à vie. Lunette arrière, vitres latérales, pare-brise feuilleté : à Allonnes, on prend votre vitrage en main de A à Z.",
    "localContext": "Les Allonnais convergent surtout vers Le Mans, et c'est sur ces trajets quotidiens que le verre prend des coups. La D309 et la D23 mènent à la rocade et à la zone du Monné, où les semi-remorques crachent gravillons et éclats de chaussée matin et soir. À la patte-d'oie d'Allonnes, l'échangeur sature aux heures de pointe : un freinage serré derrière un véhicule qui soulève un caillou, et le verre s'étoile. Les chantiers de voirie du Chaoué et des Perrières laissent traîner leurs débris, tandis que les bords de Sarthe et le Boulevard Nature exposent les carrosseries au gel du petit matin, qui change un éclat discret en longue fêlure. Stationnement sous les arbres, grêle d'automne : la liste s'allonge. Réparer un éclat tout de suite revient bien moins cher que poser un pare-brise complet, alors autant ne pas laisser traîner.",
    "whyUs": [
      "Intervention sans frais partout sur Allonnes, du centre au Chaoué et aux Perrières jusqu'à la ZA Le Monné",
      "À 5 km du Mans : rendez-vous sous 48h, souvent dès le lendemain de votre appel",
      "Jusqu'à 250€ offerts et franchise prise en charge sur chaque remplacement de pare-brise",
      "Tiers payant avec toutes les compagnies : aucune avance, le dossier est constitué à votre place",
      "Impact rebouché gratuitement via votre garantie bris de glace, sans franchise",
      "Caméras et capteurs ADAS recalibrés à chaque pose",
      "Disponibilité 7j/7 de 9h à 17h, chez vous ou sur votre lieu de travail",
      "Verre de qualité équivalente origine et pose couverte à vie"
    ],
    "neighborhoods": [
      "Centre-ville",
      "Le Chaoué",
      "Les Perrières",
      "La Tour aux Fées",
      "ZA Le Monné"
    ],
    "majorRoads": [
      "D309",
      "D23",
      "Rocade sud du Mans",
      "Patte-d'oie d'Allonnes",
      "Boulevard Nature"
    ],
    "landmarks": [
      "Sanctuaire gallo-romain de Mars Mullo (la Tour aux Fées)",
      "Parc Gustave Avice",
      "Boulevard Nature le long de la Sarthe",
      "ZA Le Monné",
      "Bords de Sarthe"
    ],
    "localFaq": [
      {
        "question": "Vous déplacez-vous à domicile dans chaque quartier d'Allonnes ?",
        "answer": "Oui, sur toute la commune. Centre-ville, Le Chaoué, Les Perrières, pavillons autour du parc Gustave Avice ou sociétés de la ZA Le Monné : le technicien vient à vous, chez vous ou au travail, sans supplément de kilomètres."
      },
      {
        "question": "À quelle vitesse atteignez-vous Allonnes depuis Le Mans ?",
        "answer": "Notre atelier du 179 rue de Laigné est à une dizaine de minutes, environ 5 km. Vous obtenez un créneau sous 48h, souvent dès le lendemain de votre appel. Après un remplacement, laissez quelques heures de séchage avant de reprendre la route en toute sécurité."
      },
      {
        "question": "Un éclat après la rocade : on répare ou on remplace ?",
        "answer": "Tant qu'il reste plus petit qu'une pièce de 2€ et hors du champ de vision conducteur, on le répare sur place, gratuitement avec votre garantie bris de glace et sans franchise. Plus gros, ou si une fissure court, le remplacement devient la seule option sûre."
      },
      {
        "question": "Que couvre l'assurance pour un remplacement à Allonnes ?",
        "answer": "Le tiers payant s'applique avec toutes les compagnies, donc rien à avancer. Un remplacement de pare-brise vous rapporte en plus jusqu'à 250€ et la franchise est prise en charge. Nous constituons le dossier et dialoguons directement avec votre assureur."
      },
      {
        "question": "Le réglage des caméras est-il compris après le changement ?",
        "answer": "À chaque intervention, oui. La majorité des voitures récentes embarquent des aides à la conduite (freinage d'urgence, alerte de franchissement de ligne) reliées à une caméra collée au pare-brise. Une fois la pose terminée, nous recalibrons ces capteurs ADAS pour qu'ils répondent correctement."
      }
    ],
    "targetKeywords": [
      "pare-brise Allonnes",
      "remplacement pare-brise Allonnes 72",
      "réparation impact pare-brise Allonnes",
      "vitrage automobile Allonnes Sarthe",
      "changement pare-brise à domicile Allonnes",
      "bris de glace Allonnes",
      "pare-brise pas cher Allonnes Le Mans"
    ],
    "distance": "À 5 km du Mans (≈ 10 min)",
    "nearbyCommunes": [
      "Le Mans",
      "Arnage",
      "Pruillé-le-Chétif",
      "Rouillon",
      "Saint-Georges-du-Bois",
      "Spay",
      "Voivres-lès-le-Mans",
      "Étival-lès-le-Mans"
    ],
    "geo": {
      "latitude": 47.9686,
      "longitude": 0.1647
    },
    "population": "10 700"
  },
  "coulaines": {
    "slug": "coulaines",
    "name": "Coulaines",
    "department": "Sarthe",
    "departmentCode": "72",
    "region": "Pays de la Loire",
    "metaTitle": "Pare-brise Coulaines (72) : 250€ offerts | Vision Pare-Brise",
    "metaDescription": "Pare-brise à Coulaines (72) : remplacement et réparation à domicile, jusqu'à 250€ offerts, 0€ à avancer. Technicien mobile 7j/7, calibrage ADAS inclus.",
    "heroTitle": "Pare-brise à Coulaines",
    "heroSubtitle": "Jusqu'à 250€ offerts et franchise prise en charge pour tout remplacement. Notre technicien se déplace à Coulaines.",
    "intro": "Le long de la rocade nord du Mans, un impact ne prévient pas : un caillou sur la D300 vers Ballon, un gravillon avenue du Général de Gaulle en filant vers le centre manceau, et la fêlure s'invite. VISION PARE-BRISE rejoint votre adresse à Coulaines, que vous soyez au Centre-Closerie près du Square Weyhe, à Bellevue ou au Bas Coulaines. Le fourgon se range devant votre porte, dans votre allée ou sur le parking de votre entreprise vers la zone artisanale du Cloteau, et la pose se fait sur place. Remplacement de pare-brise, réparation d'impact, lunette arrière, vitres latérales : tout le vitrage passe entre nos mains, avec un verre de qualité équivalente origine et un réglage ADAS repris après chaque intervention, caméras et capteurs inclus. Pour le portefeuille : jusqu'à 250€ offerts et franchise prise en charge sur un remplacement, tiers payant avec toutes les compagnies, zéro avance. Une réparation d'impact ne coûte rien avec votre bris de glace, sans franchise. On passe 7j/7 de 9h à 17h, rendez-vous sous 48h et souvent dès le lendemain. Le travail tient sa garantie à vie.",
    "localContext": "À Coulaines, le quotidien file vers Le Mans, et le verre paie l'addition. Rocade nord et D300 vers Ballon ou Mamers, avenue du Général de Gaulle pour gagner le centre manceau, D338 en voie express quand la route s'allonge : sur ces axes rapides, un seul gravillon soulevé suffit. Le point d'impact se forme, puis l'écart entre l'air froid du matin et la chaleur de l'habitacle le fait courir. L'été, les chaussées rechargées et gravillonnées en remettent une couche. Un éclat de quelques millimètres se rebouche en une trentaine de minutes ; laissé de côté, il atteint le champ de vision et impose un remplacement entier. Sur cette commune de 8 000 habitants au nord du Mans, le technicien arrive vite près de vos repères : église Saint-Nicolas, parc de la Gironde, Espace Henri Salvador.",
    "whyUs": [
      "Intervention sans frais dans tout Coulaines, du Centre-Closerie au Bas Coulaines en passant par Bellevue",
      "À 3 km du siège manceau : la rocade nord passée, on est chez vous en quelques minutes",
      "Jusqu'à 250€ offerts et franchise prise en charge sur chaque remplacement de pare-brise",
      "Tiers payant avec toutes les compagnies : aucune avance, le dossier est monté pour vous",
      "Réglage ADAS repris après la pose, caméras et capteurs d'aide à la conduite inclus",
      "Réparation d'impact gratuite avec votre bris de glace, sans franchise, bouclée en 30 minutes",
      "Présence 7j/7 de 9h à 17h, rendez-vous sous 48h et souvent dès le lendemain",
      "Verre de qualité équivalente origine et travail garanti à vie, par un technicien fort de plus de 3 ans de métier"
    ],
    "neighborhoods": [
      "Centre-Closerie",
      "Bellevue",
      "Bas Coulaines",
      "Secteur de la Gironde",
      "Square Weyhe (centre-bourg)",
      "Zone artisanale du Cloteau"
    ],
    "majorRoads": [
      "Rocade nord du Mans",
      "D300 (vers Ballon et Mamers)",
      "Avenue du Général de Gaulle",
      "D338 (voie express, ex-RN138)",
      "D147",
      "A11 (l'Océane) à proximité"
    ],
    "landmarks": [
      "Église Saint-Nicolas (inscrite Monuments Historiques, fin XIe siècle)",
      "Espace culturel Henri Salvador (place Gironde)",
      "Parc de la Gironde et son ruisseau",
      "Mairie, Square Weyhe",
      "École primaire Albert Camus",
      "Complexe sportif de la Gironde"
    ],
    "localFaq": [
      {
        "question": "Passez-vous dans les quartiers résidentiels de Coulaines ?",
        "answer": "Toute la commune est couverte : Centre-Closerie autour du Square Weyhe, Bellevue, Bas Coulaines et secteur de la Gironde. Le technicien se présente devant chez vous, dans votre allée ou sur un parking d'entreprise vers le Cloteau. Vous n'avez rien à déplacer, et la venue est sans frais."
      },
      {
        "question": "Quel délai depuis Le Mans pour rejoindre Coulaines ?",
        "answer": "Le siège, rue de Laigné, n'est qu'à environ 3 km. La rocade nord franchie, on arrive en quelques minutes. Le rendez-vous se cale sous 48h, souvent dès le lendemain selon le créneau choisi. Nous travaillons 7j/7 de 9h à 17h, week-end inclus."
      },
      {
        "question": "Un impact sur la D300 ou l'avenue du Général de Gaulle, réparation ou pose neuve ?",
        "answer": "Tant que l'éclat reste petit et loin du champ de vision conducteur, on le rebouche en une trentaine de minutes, gratuitement avec votre bris de glace et sans franchise. Si la fissure s'est propagée ou se situe face au conducteur, on remplace le pare-brise avec verre équivalent origine et calibrage ADAS compris."
      },
      {
        "question": "Combien me coûtera un remplacement à Coulaines ?",
        "answer": "En règle générale, rien à avancer. Le tiers payant avec toutes les compagnies fait passer le règlement par votre assureur. Bonus : jusqu'à 250€ offerts et franchise prise en charge pour un remplacement de pare-brise. Le dossier vous est détaillé avant le démarrage, sans mauvaise surprise."
      },
      {
        "question": "Le calibrage des caméras est-il bien compris ?",
        "answer": "Oui. Beaucoup de véhicules récents à Coulaines portent une caméra ADAS derrière le pare-brise (freinage d'urgence, maintien de voie). Après chaque remplacement, nous recalibrons caméras et capteurs pour que les aides à la conduite restent fiables. C'est dans la prestation, jamais facturé à part."
      }
    ],
    "targetKeywords": [
      "pare-brise Coulaines",
      "remplacement pare-brise Coulaines 72",
      "réparation impact pare-brise Coulaines",
      "vitrage automobile Coulaines Sarthe",
      "changement pare-brise à domicile Coulaines",
      "bris de glace Coulaines",
      "pare-brise Coulaines Le Mans nord"
    ],
    "distance": "À 3 km du Mans (≈ 7 min)",
    "nearbyCommunes": [
      "Le Mans",
      "Sargé-lès-le-Mans",
      "La Chapelle-Saint-Aubin",
      "Saint-Pavace",
      "Neuville-sur-Sarthe",
      "Yvré-l'Évêque",
      "Savigné-l'Évêque",
      "Aigné"
    ],
    "geo": {
      "latitude": 48.0162,
      "longitude": 0.1881
    },
    "population": "8 000"
  },
  "la-fleche": {
    "slug": "la-fleche",
    "name": "La Flèche",
    "department": "Sarthe",
    "departmentCode": "72",
    "region": "Pays de la Loire",
    "metaTitle": "Pare-brise La Flèche (72) — 250€ offerts | VISION PARE-BRISE",
    "metaDescription": "Pare-brise à La Flèche (72) : remplacement et réparation. Jusqu'à 250€ offerts, franchise offerte, technicien à domicile 7j/7, calibrage ADAS inclus.",
    "heroTitle": "Pare-brise à La Flèche",
    "heroSubtitle": "Jusqu'à 250€ offerts + franchise offerte* pour tout remplacement. Notre technicien vient chez vous gratuitement, partout dans le Pays fléchois.",
    "intro": "Un impact de pare-brise ne doit pas clouer votre voiture au garage à La Flèche. VISION PARE-BRISE dépêche son technicien à votre adresse, que vous viviez en centre-ville le long du Loir, à Saint-Germain-du-Val, à Verron ou à Sainte-Colombe, ou que vous travailliez près de la route de Sablé. La venue est sans frais, 7j/7 de 9h à 17h, et le rendez-vous se programme sous 48 heures, le plus souvent dès le lendemain.\n\nNos prestations couvrent le remplacement de pare-brise, la réparation d'impact, mais aussi la lunette arrière et les vitres latérales. Chaque vitrage est de qualité équivalente origine, et sur les modèles récents équipés d'aide à la conduite, nous reprenons le calibrage des caméras et capteurs ADAS. Pour le budget, le tiers payant est complet avec toutes les compagnies : aucune avance, franchise offerte, et un remplacement vous fait profiter de jusqu'à 250€. La réparation d'un impact ne coûte rien dès que vous disposez de la garantie bris de glace. Avec plus de trois ans de métier et une garantie à vie sur la pose, votre pare-brise est entre de bonnes mains.",
    "localContext": "Sous-préfecture posée sur le Loir, La Flèche voit défiler chaque jour les trajets du sud-Sarthe. La D323, ancienne nationale 23, relie Le Mans à Angers, pendant que la D306 grimpe vers Sablé-sur-Sarthe au nord et descend vers Le Lude et Tours au sud. Rechargés en gravillons après les campagnes d'entretien, ces axes sont la première cause d'éclats. Sur le boulevard de Montréal et aux ronds-points d'entrée de ville, poids lourds et utilitaires projettent leur lot de cailloux.\n\nLes petites routes vers Crosmières ou Thorée-les-Pins, étroites et bordées d'arbres, sèment branches et graviers. Et le val du Loir réserve de vrais écarts de température, gelée matinale puis soleil l'après-midi, qui transforment un point d'impact en fêlure traversante. Mieux vaut intervenir tôt : une réparation prompte revient à bien moins qu'une pose complète. VISION PARE-BRISE règle le dégât sur place, à votre domicile fléchois comme sur votre lieu de travail.",
    "whyUs": [
      "Venue sans frais dans tout le Pays fléchois, du centre-ville aux quartiers de Verron, Sainte-Colombe et Saint-Germain-du-Val",
      "Fourgon-atelier équipé : opération sur votre parking, devant chez vous ou sur votre lieu de travail à La Flèche",
      "Jusqu'à 250€ offerts et franchise offerte pour chaque remplacement de pare-brise",
      "Tiers payant complet avec toutes les compagnies : aucune avance, le dossier est pris en charge pour vous",
      "Calibrage ADAS des caméras et capteurs compris sur les véhicules récents à aide à la conduite",
      "Rendez-vous sous 48h, souvent dès le lendemain, sans patienter des semaines",
      "Réparation d'impact gratuite avec la garantie bris de glace, en une trentaine de minutes",
      "Vitrage de qualité équivalente origine et garantie à vie sur la pose"
    ],
    "neighborhoods": [
      "Centre-ville (rives du Loir)",
      "Saint-Germain-du-Val",
      "Verron",
      "Sainte-Colombe",
      "La Monnerie",
      "Notre-Dame-des-Vertus",
      "Zone industrielle (route de Sablé)"
    ],
    "majorRoads": [
      "D306 (Sablé-sur-Sarthe au nord, Le Lude et Tours au sud)",
      "D323 (ancienne N23, vers Le Mans et Angers)",
      "D308 (direction Baugé-en-Anjou)",
      "Boulevard de Montréal"
    ],
    "landmarks": [
      "Prytanée National Militaire et église Saint-Louis",
      "Zoo de La Flèche (plus ancien parc animalier privé de France)",
      "Château des Carmes (hôtel de ville, sur le Loir)",
      "Moulin de la Bruère, au bord du Loir",
      "Base de loisirs et lac de la Monnerie",
      "Méridien de Greenwich qui traverse la ville"
    ],
    "localFaq": [
      {
        "question": "Vous déplacez-vous à domicile dans tout La Flèche ?",
        "answer": "Oui. Le technicien rejoint sans frais l'ensemble des quartiers fléchois, du centre-ville le long du Loir à Saint-Germain-du-Val, Verron ou Sainte-Colombe, jusqu'à la zone industrielle. Il vient chez vous ou sur votre lieu de travail, 7j/7 de 9h à 17h, avec tout le matériel pour remplacer ou réparer le pare-brise sur place."
      },
      {
        "question": "Quel délai d'intervention depuis Le Mans jusqu'à La Flèche ?",
        "answer": "Notre siège est au Mans, à environ 44 km et 45 minutes par la D323. Votre délai n'en pâtit pas : le rendez-vous se fixe sous 48 heures, souvent dès le lendemain de votre appel. La venue reste entièrement gratuite, où que vous habitiez dans le Pays fléchois."
      },
      {
        "question": "Combien coûte un remplacement de pare-brise à La Flèche ?",
        "answer": "Avec une garantie bris de glace, vous ne payez rien : tiers payant complet, franchise offerte, et nous avançons les frais auprès de votre assureur. Un remplacement vous fait même profiter de jusqu'à 250€. La réparation d'un impact est gratuite dès lors que vous bénéficiez de la garantie bris de glace."
      },
      {
        "question": "Mon véhicule a des caméras d'aide à la conduite : le calibrage est-il prévu ?",
        "answer": "Oui, le calibrage ADAS entre dans nos remplacements à La Flèche. Une fois le pare-brise neuf posé, nous recalibrons les caméras et capteurs liés au freinage d'urgence, au régulateur et au maintien dans la voie, pour que vos aides restent fiables sur la D306 comme sur les petites routes du val du Loir."
      },
      {
        "question": "Réparation ou remplacement : comment trancher pour mon impact ?",
        "answer": "Tout tient à la taille et à l'emplacement. Plus petit qu'une pièce de 2€ et hors du champ de vision conducteur, l'impact se répare en une trentaine de minutes. Au-delà, ou si la fêlure progresse, le remplacement s'impose. Vu les écarts de température du val du Loir, appelez sans tarder : le diagnostic est gratuit, sur place à La Flèche."
      }
    ],
    "targetKeywords": [
      "pare-brise La Flèche",
      "remplacement pare-brise La Flèche 72",
      "réparation impact pare-brise La Flèche",
      "vitrage automobile La Flèche Sarthe",
      "bris de glace La Flèche",
      "pare-brise à domicile Pays fléchois",
      "lunette arrière vitres latérales La Flèche",
      "calibrage ADAS La Flèche"
    ],
    "distance": "À 44 km du Mans (≈ 45 min)",
    "nearbyCommunes": [
      "Bazouges-Cré-sur-Loir",
      "Clermont-Créans",
      "Crosmières",
      "Mareil-sur-Loir",
      "Thorée-les-Pins",
      "Villaines-sous-Malicorne",
      "Bousse",
      "La Chapelle-d'Aligné",
      "Le Lude"
    ],
    "geo": {
      "latitude": 47.6974,
      "longitude": -0.0778
    },
    "population": "15 000"
  },
  "sable-sur-sarthe": {
    "slug": "sable-sur-sarthe",
    "name": "Sablé-sur-Sarthe",
    "department": "Sarthe",
    "departmentCode": "72",
    "region": "Pays de la Loire",
    "metaTitle": "Pare-brise Sablé-sur-Sarthe (72) : 250€ offerts à domicile",
    "metaDescription": "Pare-brise à Sablé-sur-Sarthe : remplacement et réparation à domicile 7j/7. Jusqu'à 250€ offerts, franchise offerte, toutes assurances, 0€ à avancer.",
    "heroTitle": "Pare-brise à Sablé-sur-Sarthe",
    "heroSubtitle": "Jusqu'à 250€ offerts + franchise offerte*. Notre technicien pose votre pare-brise chez vous, partout à Sablé.",
    "intro": "Changer un pare-brise à Sablé-sur-Sarthe ne devrait pas vous coûter une demi-journée de congé. VISION PARE-BRISE achemine son technicien directement à votre porte, que vous résidiez au centre près du château, à Montreux, au Pré, du côté de Gastines-Leclerc ou dans le secteur de la Rocade-Chartrie. La venue est sans frais dans toute la ville sabolienne et alentour, à domicile comme sur votre lieu de travail, 7 jours sur 7 de 9h à 17h.\n\nNotre champ d'action va du remplacement complet du pare-brise à la réparation d'impact, sans oublier la lunette arrière et les vitres latérales. Sur les véhicules récents dotés de caméras et de radars, le calibrage ADAS accompagne systématiquement la pose : maintien de voie et freinage d'urgence repartent réglés au cordeau. Le vitrage installé est de qualité équivalente origine, et la pose tient sa garantie à vie.\n\nPour le budget : jusqu'à 250€ offerts et la franchise offerte sur un remplacement, et la réparation d'un impact gratuite avec votre garantie bris de glace. Le tiers payant est traité avec toutes les compagnies, sans la moindre avance. Le rendez-vous se cale sous 48h, le plus souvent dès le lendemain.",
    "localContext": "Sablé tient le rôle de carrefour : RD306 vers Laval et Le Lude, RD309 vers Souvigné-sur-Sarthe, giratoire de la Gare et avenue Charles de Gaulle drainent chaque jour navetteurs, camions et gravillons. C'est là que l'impact frappe le plus souvent : une projection à 90 km/h sur une départementale fraîchement gravillonnée, et la fissure prend ses aises. Plus au nord, l'A11 ajoute ses débris pour qui rejoint Le Mans ou Angers.\n\nLovée dans un méandre de la Sarthe, à sa confluence avec la Vaige et l'Erve, Sablé encaisse aussi de réels écarts de température : un impact négligé à l'automne traverse le pare-brise de part en part au premier gel. Du parc du château à l'hippodrome de la Prairie en passant par les zones d'activité, nous réglons ces dégâts sans vous demander de bouger.",
    "whyUs": [
      "Venue sans frais dans tout Sablé-sur-Sarthe et le Pays sabolien, jusqu'aux communes voisines",
      "Opération au pied de chez vous ou sur votre lieu de travail, sans détour par un atelier",
      "Jusqu'à 250€ offerts et franchise offerte sur chaque remplacement de pare-brise",
      "Tiers payant réglé avec toutes les compagnies : aucune avance, le dossier est monté pour vous",
      "Réparation d'impact gratuite avec l'assurance bris de glace, avant que la fissure ne gagne du terrain",
      "Calibrage ADAS caméras et capteurs assuré d'office sur les véhicules récents",
      "Rendez-vous sous 48h, souvent dès le lendemain, week-end compris",
      "Vitrage de qualité équivalente origine et pose garantie à vie"
    ],
    "neighborhoods": [
      "Centre",
      "Montreux",
      "Le Pré",
      "Gastines-Leclerc",
      "Rocade-Chartrie"
    ],
    "majorRoads": [
      "RD306 (axe Laval / Le Lude)",
      "RD309 (vers Souvigné-sur-Sarthe)",
      "Avenue Charles de Gaulle",
      "Route de La Flèche",
      "Giratoire de la Gare",
      "Autoroute A11"
    ],
    "landmarks": [
      "Château de Sablé et son parc (centre technique de conservation de la Bibliothèque nationale de France)",
      "Hippodrome de la Prairie du Château",
      "Gare TGV de Sablé-sur-Sarthe",
      "Confluence de la Sarthe, de la Vaige et de l'Erve",
      "Les Sablés de Sablé (biscuiterie)",
      "Abbaye Saint-Pierre de Solesmes toute proche"
    ],
    "localFaq": [
      {
        "question": "Vous déplacez-vous à domicile dans tout Sablé-sur-Sarthe ?",
        "answer": "Oui, le technicien parcourt sans frais l'ensemble des quartiers, du centre près du château à Montreux, en passant par Le Pré, Gastines-Leclerc et le secteur de la Rocade-Chartrie. Il vient aussi sur votre lieu de travail, dans les zones d'activité comme à votre domicile, 7j/7 de 9h à 17h."
      },
      {
        "question": "Quel délai pour intervenir depuis Le Mans ?",
        "answer": "Notre siège manceau est à environ 50 minutes de Sablé par l'A11 et la RD306. Cela n'affecte pas votre prise de rendez-vous : nous intervenons sous 48h, et bien souvent dès le lendemain. La date est arrêtée avec vous selon vos disponibilités, week-end inclus."
      },
      {
        "question": "Y a-t-il une avance à régler pour le remplacement ?",
        "answer": "Non. Le tiers payant fonctionne avec toutes les compagnies, sans débours de votre part. En prime, vous profitez de jusqu'à 250€ offerts et de la franchise offerte sur un remplacement de pare-brise. La réparation d'un impact est gratuite avec votre garantie bris de glace."
      },
      {
        "question": "Mon véhicule a des caméras : le calibrage est-il prévu ?",
        "answer": "Oui, le calibrage ADAS accompagne toujours le remplacement de votre pare-brise. Les caméras et capteurs liés au freinage d'urgence et au maintien de voie sont recalibrés sur place, directement à Sablé, pour que vos aides à la conduite retrouvent leur précision."
      },
      {
        "question": "Couvrez-vous les communes autour de Sablé ?",
        "answer": "Bien entendu. Le Pays sabolien et ses voisines entrent dans notre rayon : Solesmes, Juigné-sur-Sarthe, Souvigné-sur-Sarthe, Précigné, Auvers-le-Hamon, Parcé-sur-Sarthe ou Le Bailleul. La venue reste sans frais, que vous soyez en centre-bourg ou en campagne au fil de la Sarthe."
      }
    ],
    "targetKeywords": [
      "pare-brise Sablé-sur-Sarthe",
      "remplacement pare-brise Sablé 72",
      "réparation impact pare-brise Sablé-sur-Sarthe",
      "pare-brise à domicile Sablé Sarthe",
      "changement pare-brise Pays sabolien",
      "bris de glace Sablé-sur-Sarthe",
      "vitrage automobile Sablé Sarthe",
      "calibrage ADAS Sablé-sur-Sarthe"
    ],
    "distance": "À 60 km du Mans (≈ 50 min par l'A11)",
    "nearbyCommunes": [
      "Solesmes",
      "Juigné-sur-Sarthe",
      "Souvigné-sur-Sarthe",
      "Précigné",
      "Pincé",
      "Courtillers",
      "Auvers-le-Hamon",
      "Parcé-sur-Sarthe",
      "Le Bailleul",
      "Bouessay"
    ],
    "geo": {
      "latitude": 47.8395,
      "longitude": -0.3341
    },
    "population": "13 000 habitants"
  }
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
