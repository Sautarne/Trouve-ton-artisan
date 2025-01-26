import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-nav',
  imports: [
    CommonModule,
    RouterLink,
    FormsModule
  ],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.scss'
})
export class NavComponent {
  showList = false;
  search = "";

  handleShowListBurger(): void {
    this.showList = !this.showList;
    if (this.showList) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }

  ngOnDestroy(): void {
    // Réactiver le scroll quand le composant est détruit
    document.body.style.overflow = 'auto';
  }

  handleShowList(): void {
    this.showList = !this.showList;

    document.body.style.overflow = 'auto';
  }

  performSearch(): void {
    window.location.href = (
      "/recherche?q=" + this.search
    )
  }
}
