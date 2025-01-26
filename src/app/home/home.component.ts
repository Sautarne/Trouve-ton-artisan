import { Component, OnInit } from '@angular/core';
import { ArtisanPreview } from '../models/artisan';
import { ArtisanService } from '../services/artisan.service';
import { CommonModule } from '@angular/common';
import { ArtisanPreviewComponent } from '../artisan-preview/artisan-preview.component';

@Component({
  selector: 'app-home',
  imports: [
    CommonModule,
    ArtisanPreviewComponent
  ],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  topArtisans: ArtisanPreview[] = [];

  constructor(private artisanService: ArtisanService) {}

  ngOnInit(): void {
    this.topArtisans = this.artisanService.getTopArtisans();
  }
}