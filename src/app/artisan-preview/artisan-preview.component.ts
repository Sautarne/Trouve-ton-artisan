import { Component, Input  } from '@angular/core';
import { Router } from '@angular/router';
import { ArtisanPreview } from '../models/artisan';
import { StarsPipe } from '../pipes/stars.pipe';

@Component({
  selector: 'app-artisan-preview',
  imports: [
    StarsPipe
  ],
  templateUrl: './artisan-preview.component.html',
  styleUrl: './artisan-preview.component.scss'
})
export class ArtisanPreviewComponent {
  @Input() artisan!: ArtisanPreview;

  constructor(
    private router: Router
  ) {}

  voirPlus() {
    this.router.navigate(['/artisan', this.artisan.id]);
  }
}