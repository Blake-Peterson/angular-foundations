import { Routes } from '@angular/router';
import { CatalogComponent } from './catalog/catalog.component';
import { CartComponent } from './cart/cart.component';

export const routes: Routes = [
  { path: '', redirectTo: '/catalog', pathMatch: 'full' }, //empty path to tell where it needs to need to match path exactly (full)
  { path: 'catalog', component: CatalogComponent },
  { path: 'cart', component: CartComponent },
];
