import { Component, OnInit } from '@angular/core';
import { ArtisanService } from '../services/artisan.service';
import { ArtisanDetail } from '../models/artisan';
import { ArtisanPreviewComponent } from '../artisan-preview/artisan-preview.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-recherche',
  imports: [
    CommonModule,
    ArtisanPreviewComponent
  ],
  templateUrl: './recherche.component.html',
  styleUrl: './recherche.component.scss'
})
export class RechercheComponent implements OnInit {

  artisans: ArtisanDetail[] = [];

  constructor(
    private artisanService: ArtisanService
  ) {}

  ngOnInit() {

    // Parse the query parameters
    const params = new URLSearchParams(window.location.search);

    // Get the value of the 'q' parameter
    const query = params.get('q');

    this.artisans = this.artisanService.getAllArtisansFilteredBySearch(query);

  }

}
