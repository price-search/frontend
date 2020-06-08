import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FavoriteComponent } from './favorite/favorite.component';
import { ProductComponent } from './product/product.component';
import { MapaComponent } from './mapa/mapa.component';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ListaComponent } from './lista/lista.component';
import { ComparadorComponent } from './comparador/comparador.component';
import { AuthGuard } from './auth.guard';
import { SearchProductsComponent } from './search-products/search-products.component';


const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
    
  },
  {
    path: 'favorite',
    component: FavoriteComponent
  },
  {
    path: 'products',
    component: ProductComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'search/:name',
    component: SearchProductsComponent
  },
  {
    path: 'mapa',
    component: MapaComponent
  },
  {
    path: 'lista',
    component: ListaComponent

  },
  {
    path: 'product/:id',
    component: ComparadorComponent
  }
];

@NgModule({
  imports: [CommonModule, RouterModule.forRoot(routes)],
  declarations: [],
  exports: [RouterModule]
})
export class AppRoutingModule {}
export const routingComponents = [
  FavoriteComponent,
  ProductComponent,
  MapaComponent
];
