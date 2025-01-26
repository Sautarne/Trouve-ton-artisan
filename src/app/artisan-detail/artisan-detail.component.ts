import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ArtisanService } from '../services/artisan.service';
import { ArtisanDetail } from '../models/artisan';
import { CommonModule } from '@angular/common';
import { StarsPipe } from '../pipes/stars.pipe';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

interface ContactForm {
  nom: string;
  objet: string;
  message: string;
}

@Component({
  selector: 'app-artisan-detail',
  imports: [
    CommonModule,
    StarsPipe,
    FormsModule
  ],
  templateUrl: './artisan-detail.component.html',
  styleUrl: './artisan-detail.component.scss'
})
export class ArtisanDetailComponent implements OnInit {
  artisan?: ArtisanDetail;
  isMessageSent = false;
  contactForm: ContactForm = {
    nom: '',
    objet: '',
    message: ''
  };

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private artisanService: ArtisanService,
    private sanitizer: DomSanitizer
  ) {}

  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.artisan = this.artisanService.getArtisanById(id);
    
    if (this.artisan === undefined || this.artisan === null) {
      this.router.navigate(['/']);
    }
  }

  // Affiche la carte de l'emplacement de l'artisan
  getMapUrl(): SafeUrl {
    const { lat, lng } = this.artisan!.adresse.coordinates;
    const url = `https://www.openstreetmap.org/export/embed.html?bbox=${lng - 0.01},${lat - 0.01},${lng + 0.01},${lat + 0.01}&layer=mapnik&marker=${lat},${lng}`;
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }

  
  onSubmit(event: Event) {
    event.preventDefault();
    
    if (this.contactForm.nom && this.contactForm.objet && this.contactForm.message) {
      this.isMessageSent = true;
      
      // Réinitialiser le formulaire
      this.contactForm = {
        nom: '',
        objet: '',
        message: ''
      };
      
      // Faire disparaître le message après 5 secondes
      setTimeout(() => {
        this.isMessageSent = false;
      }, 5000);
    }
  }
}