import { Injectable } from '@angular/core';
import { ArtisanPreview } from '../models/artisan';
import { ArtisanDetail } from '../models/artisan';
import { ArtisanData } from '../data/artisans.data';

@Injectable({
  providedIn: 'root'
})
export class ArtisanService {

  // Récupère les 3 meilleurs artisans en fonction de leur note
  // classe le résultat par ordre décroissant
  getTopArtisans(): ArtisanPreview[] {
    return ArtisanData.artisans
        .slice()
        .sort((a, b) => b.note - a.note)
        .slice(0, 3);
  }

  // Récupère les artisans en fonction de leur ID
  getArtisanById(id: number): ArtisanDetail | undefined {
    return ArtisanData.artisans.find(a => a.id === id);
  }

  //Récupère les artisans avec leur data de détail
  getAllArtisans(): ArtisanDetail[] {
    return ArtisanData.artisans;
  }

  //Récupère les artisans en fonction de la recherche
  getAllArtisansFilteredBySearch(search: string | null): ArtisanDetail[] {
    if(search == null || search == "") {
      return ArtisanData.artisans;
    }
    return this.searchInObject(
      ArtisanData.artisans,
      search
    )
  }

  //Logique de recherche
  private searchInObject(arr: ArtisanDetail[], searchString: string): ArtisanDetail[] {
    const escapedSearch = searchString.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');  
    const searchRegexp = new RegExp(escapedSearch, 'i');

    return arr.filter(obj => {

      return (
        obj.nom.match(searchRegexp) ||
        obj.profession.match(searchRegexp) ||
        obj.adresse?.ville.match(searchRegexp)
      )
    });
  }

  //Récupère les artisans en fonction de leur catégori
  getArtisansByCategory(category: string): ArtisanDetail[] {
    return ArtisanData.artisans.filter(artisan => artisan.category === category).sort((a, b) => b.note - a.note);
  }
}