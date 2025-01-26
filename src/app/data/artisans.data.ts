import { ArtisanDetail } from '../models/artisan';

export const ArtisanData = {
  artisans: [
    {
      id: 1,
      category: 'Batiment',
      nom: 'Thomas Dubois',
      profession: 'Carreleur',
      email: 'thomas.dubois@artisan.fr',
      adresse: {
        rue: '15 rue des Artisans',
        ville: 'Lyon',
        codePostal: '69002',
        coordinates: { lat: 45.7484, lng: 4.8543 }
      },
      note: 1,
      image: '/Temporaire.jpg',
      aPropos: 'Artisan carreleur passionné depuis plus de 20 ans, spécialisé dans la pose de carrelage grand format et la création de motifs personnalisés. Mon expertise s\'étend de la rénovation de salles de bains à l\'aménagement de terrasses extérieures. Maîtrisant les techniques traditionnelles et modernes, je propose des solutions adaptées à chaque projet. La satisfaction client et la qualité du travail sont mes priorités absolues. Je travaille avec les meilleurs matériaux et reste à la pointe des dernières tendances en matière de design et d\'innovation.',
      siteWeb: 'https://thomasdubois-carrelage.fr'
    },
    {
      id: 2,
      category: 'Batiment',
      nom: 'Sophie Moreau',
      profession: 'Peintre en bâtiment',
      email: 'sophie.moreau@artisan.fr',
      adresse: {
        rue: '28 avenue des Peintres',
        ville: 'Villeurbanne',
        codePostal: '69100',
        coordinates: { lat: 45.7639, lng: 4.8782 }
      },
      note: 5,
      image: '/Temporaire.jpg',
      aPropos: 'Experte en peinture décorative et revêtements muraux, je propose des solutions personnalisées pour transformer vos espaces. Spécialisée dans les techniques de patine, tadelakt et effets décoratifs, je mets mon savoir-faire au service de vos projets les plus ambitieux. Formée aux dernières innovations en matière de peintures écologiques, je privilégie des produits respectueux de l\'environnement et de la santé. Chaque chantier est une nouvelle aventure où précision et créativité se rencontrent.',
      siteWeb: 'https://sophiemoreau-peinture.fr'
    },
    {
      id: 3,
      category: 'Batiment',
      nom: 'Marc Leroy',
      profession: 'Maçon',
      email: 'marc.leroy@artisan.fr',
      adresse: {
        rue: '45 rue du Bâtiment',
        ville: 'Vénissieux',
        codePostal: '69200',
        coordinates: { lat: 45.7041, lng: 4.8878 }
      },
      note: 2,
      image: '/Temporaire.jpg',
      aPropos: 'Fort d\'une expérience de 25 ans dans la maçonnerie traditionnelle et contemporaine, je réalise tous types de travaux de construction et de rénovation. Spécialisé dans la pierre apparente et le béton décoratif, j\'apporte un soin particulier à la qualité des finitions. Mon expertise couvre aussi bien la rénovation de bâtiments historiques que la construction de maisons modernes. La transmission du savoir-faire est importante pour moi, c\'est pourquoi je forme régulièrement des apprentis.',
      siteWeb: 'https://marcleroy-maconnerie.fr'
    },
    {
      id: 4,
      category: 'Services',
      nom: 'Claire Dumont',
      profession: 'Coiffeuse à domicile',
      email: 'claire.dumont@artisan.fr',
      adresse: {
        rue: '12 rue de la Coiffure',
        ville: 'Caluire',
        codePostal: '69300',
        coordinates: { lat: 45.7986, lng: 4.8456 }
      },
      note: 4,
      image: '/Temporaire.jpg',
      aPropos: 'Passionnée par la coiffure et le bien-être, je me déplace à votre domicile pour vous offrir une expérience personnalisée. Formée aux dernières techniques de coupe et de coloration, je m\'adapte à tous les types de cheveux et styles. Mon approche combine expertise technique et écoute attentive pour créer la coiffure qui vous ressemble. Je propose également des conseils personnalisés pour l\'entretien de vos cheveux et utilise des produits naturels et respectueux de l\'environnement.',
      siteWeb: 'https://clairedumont-coiffure.fr'
    },
    {
      id: 5,
      category: 'Services',
      nom: 'Antoine Martin',
      profession: 'Réparateur informatique',
      email: 'antoine.martin@artisan.fr',
      adresse: {
        rue: '89 rue de la Tech',
        ville: 'Bron',
        codePostal: '69500',
        coordinates: { lat: 45.7365, lng: 4.9186 }
      },
      note: 3,
      image: '/Temporaire.jpg',
      aPropos: 'Expert en réparation et maintenance informatique, j\'interviens rapidement pour diagnostiquer et résoudre vos problèmes techniques. Spécialisé dans la récupération de données, la mise à niveau de matériel et l\'optimisation des performances, je propose des solutions adaptées à vos besoins. Mon expertise couvre aussi bien les ordinateurs que les tablettes et smartphones. Je reste constamment à jour des dernières évolutions technologiques pour vous offrir le meilleur service.',
      siteWeb: 'https://antoinemartin-informatique.fr'
    },
    {
      id: 6,
      category: 'Services',
      nom: 'Emma Richard',
      profession: 'Photographe événementiel',
      email: 'emma.richard@artisan.fr',
      adresse: {
        rue: '34 rue de l\'Image',
        ville: 'Écully',
        codePostal: '69130',
        coordinates: { lat: 45.7784, lng: 4.7647 }
      },
      note: 3,
      image: '/Temporaire.jpg',
      aPropos: 'Photographe passionnée, je capture les moments précieux de votre vie avec créativité et sensibilité. Spécialisée dans les mariages, événements d\'entreprise et portraits de famille, je m\'attache à saisir l\'authenticité de chaque instant. Mon approche associe technique professionnelle et regard artistique pour créer des images uniques qui racontent votre histoire. Je travaille avec du matériel haut de gamme et propose des albums photo personnalisés.',
      siteWeb: 'https://emmarichard-photo.fr'
    },
    {
      id: 7,
      category: 'Fabrication',
      nom: 'Gabriel Petit',
      profession: 'Ébéniste',
      email: 'gabriel.petit@artisan.fr',
      adresse: {
        rue: '56 rue du Bois',
        ville: 'Tassin',
        codePostal: '69160',
        coordinates: { lat: 45.7632, lng: 4.7786 }
      },
      note: 3,
      image: '/Temporaire.jpg',
      aPropos: 'Ébéniste passionné par le travail du bois noble, je crée des meubles sur mesure alliant tradition et modernité. Chaque pièce est unique, façonnée avec précision et attention aux détails. Spécialisé dans la restauration de meubles anciens et la création contemporaine, je sélectionne les meilleurs bois pour garantir des créations durables et élégantes. Mon atelier est équipé de machines traditionnelles et modernes pour répondre à tous les défis créatifs.',
      siteWeb: 'https://gabrielpetit-ebeniste.fr'
    },
    {
      id: 8,
      category: 'Fabrication',
      nom: 'Julie Blanc',
      profession: 'Céramiste',
      email: 'julie.blanc@artisan.fr',
      adresse: {
        rue: '23 rue de la Poterie',
        ville: 'Oullins',
        codePostal: '69600',
        coordinates: { lat: 45.7163, lng: 4.8062 }
      },
      note: 4,
      image: '/Temporaire.jpg',
      aPropos: 'Artiste céramiste, je crée des pièces uniques en grès et porcelaine, mêlant fonction et esthétique. Mon travail s\'inspire de la nature et des formes organiques pour créer des objets du quotidien empreints de poésie. Chaque pièce est tournée ou modelée à la main dans mon atelier, avec un soin particulier apporté aux émaux et aux textures. Je propose également des cours et stages d\'initiation pour partager ma passion.',
      siteWeb: 'https://julieblanc-ceramique.fr'
    },
    {
      id: 9,
      category: 'Fabrication',
      nom: 'Lucas Rousseau',
      profession: 'Ferronnier d\'art',
      email: 'lucas.rousseau@artisan.fr',
      adresse: {
        rue: '78 rue du Métal',
        ville: 'Saint-Priest',
        codePostal: '69800',
        coordinates: { lat: 45.7002, lng: 4.9812 }
      },
      note: 2,
      image: '/Temporaire.jpg',
      aPropos: 'Artisan ferronnier spécialisé dans la création de pièces métalliques sur mesure, je marie techniques ancestrales et design contemporain. Mon savoir-faire s\'étend de la réalisation de garde-corps à la création de mobilier métallique original. Chaque projet est une nouvelle aventure où je pousse les limites de la créativité tout en respectant les contraintes techniques. La qualité des soudures et des finitions est ma marque de fabrique.',
      siteWeb: 'https://lucasrousseau-ferronnerie.fr'
    },
    {
      id: 10,
      category: 'Alimentation',
      nom: 'Marie Lambert',
      profession: 'Pâtissière',
      email: 'marie.lambert@artisan.fr',
      adresse: {
        rue: '45 rue des Gourmets',
        ville: 'Meyzieu',
        codePostal: '69330',
        coordinates: { lat: 45.7825, lng: 5.0011 }
      },
      note: 5,
      image: '/Temporaire.jpg',
      aPropos: 'Pâtissière passionnée, je crée des desserts artisanaux qui allient tradition française et touches créatives modernes. Spécialisée dans les gâteaux sur mesure et les pièces montées, je travaille uniquement avec des ingrédients de qualité supérieure et de saison. Mon approche de la pâtisserie combine technique précise et innovation gustative. Chaque création est pensée comme une œuvre d\'art comestible, avec une attention particulière portée aux détails et à la présentation.',
      siteWeb: 'https://marielambert-patisserie.fr'
    },
    {
      id: 11,
      category: 'Alimentation',
      nom: 'Thomas Bernard',
      profession: 'Chocolatier',
      email: 'thomas.bernard@artisan.fr',
      adresse: {
        rue: '12 rue du Cacao',
        ville: 'Décines',
        codePostal: '69150',
        coordinates: { lat: 45.7688, lng: 4.9603 }
      },
      note: 4,
      image: '/Temporaire.jpg',
      aPropos: 'Artisan chocolatier depuis 15 ans, je sélectionne les meilleures fèves de cacao pour créer des chocolats d\'exception. Ma passion pour le chocolat se traduit par une recherche constante de nouvelles saveurs et associations originales. Spécialisé dans les pralinés maison et les tablettes bean-to-bar, je propose également des formations à la dégustation. Chaque création est le fruit d\'un travail minutieux et d\'une maîtrise parfaite des températures.',
      siteWeb: 'https://thomasbernard-chocolatier.fr'
    },
    {
      id: 12,
      category: 'Alimentation',
      nom: 'Sophie Durand',
      profession: 'Boulangère',
      email: 'sophie.durand@artisan.fr',
      adresse: {
        rue: '89 rue du Levain',
        ville: 'Rillieux',
        codePostal: '69140',
        coordinates: { lat: 45.8208, lng: 4.8976 }
      },
      note: 1,
      image: '/Temporaire.jpg',
      aPropos: 'Boulangère artisanale, je perpétue la tradition du pain au levain naturel tout en innovant avec des créations originales. Mon fournil utilise des farines locales biologiques et des méthodes de fermentation longue pour développer des saveurs authentiques. Spécialisée dans les pains spéciaux et les viennoiseries maison, je propose chaque jour une gamme variée de produits frais. La qualité et le respect des matières premières sont au cœur de mon travail.',
      siteWeb: 'https://sophiedurand-boulangerie.fr'
    }
  ] as ArtisanDetail[]
};