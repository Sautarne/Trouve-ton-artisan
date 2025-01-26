// category.component.ts
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ArtisanDetail } from '../models/artisan';
import { ArtisanService } from '../services/artisan.service';
import { CommonModule } from '@angular/common';
import { ArtisanPreviewComponent } from '../artisan-preview/artisan-preview.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-category',
  imports: [
    CommonModule,
    ArtisanPreviewComponent
  ],
  templateUrl: './category.component.html',
  styleUrl: './category.component.scss'
})
export class CategoryComponent implements OnInit {
  artisans: ArtisanDetail[] = [];
  currentCategory: string = '';

  constructor(
    private route: ActivatedRoute,
    private artisanService: ArtisanService,
    private router: Router 
  ) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.currentCategory = params['category'];
      this.artisans = this.artisanService.getArtisansByCategory(this.currentCategory);
      if ((this.currentCategory != "Batiment")
      && (this.currentCategory != "Services")
      && (this.currentCategory != "Fabrication")
      && (this.currentCategory != "Alimentation")
        ) {
          this.router.navigate(['/404']);
        }
      }
    );
  }
}