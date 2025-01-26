// Interface de base pour les informations communes
export interface ArtisanPreview {
  category: string;
  id: number;
  nom: string;
  profession: string;
  note: number;
  image: string;
  email: string;
  adresse: {
    rue: string;
    ville: string;
    codePostal: string;

    //Mettre les coordonnées de l'adresse ci dessous 
    coordinates: {
      lat: number;
      lng: number;
    };
  };
}

// Pour le détail, nous étendons ArtisanPreview avec les informations supplémentaires
export interface ArtisanDetail extends ArtisanPreview {
  aPropos: string;
  siteWeb: string;
}