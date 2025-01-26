import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ArtisanDetailComponent } from './artisan-detail/artisan-detail.component';
import { CategoryComponent } from './category/category.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { RechercheComponent } from './recherche/recherche.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },

    //affiche l'artisans en fonction de son id
    { path: 'artisan/:id', component: ArtisanDetailComponent },
    { path: 'recherche/:recherche', component: RechercheComponent },
    { path: 'recherche', component: RechercheComponent },

    //Affiche la catégorie en fonction de son nom dans l'url
    { path: 'categorie/:category', component: CategoryComponent },
    { path: '404', component: NotFoundComponent },
    { path: '**', redirectTo: '404' }
];
