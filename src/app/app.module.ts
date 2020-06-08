import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import {
  SocialLoginModule,
  AuthServiceConfig,
  GoogleLoginProvider,
  FacebookLoginProvider,
  AuthService
} from 'angularx-social-login';
import { BrowserModule } from '@angular/platform-browser';
import { PriceSearchComponent } from './app.component';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule, routingComponents } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { ShoppingCartComponent } from './product/shopping-cart/shopping-cart.component';
import { FiltersComponent } from './product/shopping-cart/filters/filters.component';
import { CartComponent } from './product/shopping-cart/cart/cart.component';
import { CartItemComponent } from './product/shopping-cart/cart/cart-item/cart-item.component';
import { ProductItemComponent } from './product/shopping-cart/product-list/product-item/product-item.component';
import { FooterComponent } from './product/shared/footer/footer.component';
import { ProductListComponent } from './product/shopping-cart/product-list/product-list.component';
import {ListaComponent} from './lista/lista.component';
import {FormsModule} from '@angular/forms';
import { ListaService } from './services/lista.service';
import {ModalComponent} from './product/shopping-cart/product-list/product-item/modal/modal.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import {ListaInternaComponent} from './lista/lista-interna/lista-interna.component';
import {AgmCoreModule} from '@agm/core';
import { ComparadorComponent } from './comparador/comparador.component';
import {CookieService} from 'ngx-cookie-service';
import { AuthGuard } from './auth.guard';
import { LoginServiceService } from './services/login-service.service';
import {TokenInterceptorService} from './services/token-interceptor.service';
import { ProductService } from './services/product.service';
import { SearchProductsComponent } from './search-products/search-products.component';

const google_oauth_client_id =
  '113929152064-osdmb61gpl4d06ls9717kasgfntc4dam.apps.googleusercontent.com';

const config = new AuthServiceConfig([
  {
    id: GoogleLoginProvider.PROVIDER_ID,
    provider: new GoogleLoginProvider(google_oauth_client_id)
  }
]);

@NgModule({
  declarations: [PriceSearchComponent, routingComponents, HomeComponent,
    FooterComponent,
    ShoppingCartComponent,
    FiltersComponent,
    CartComponent,
    ListaInternaComponent,
    CartItemComponent,
    ProductItemComponent,
    ProductListComponent,
    ListaComponent,
    ModalComponent,
    ComparadorComponent,
    SearchProductsComponent,
    ],
  imports: [
    FormsModule,
    HttpClientModule,
    BrowserModule,
    MatSidenavModule,
    MatListModule,
    MatButtonModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAA0yZYQ041B50TZiSTh8yf2xxDSCKrH3w'
    }),
    AppRoutingModule,
    SocialLoginModule.initialize(config),
    MatToolbarModule,
    MatIconModule,
    BrowserAnimationsModule
  ],
  providers: [ListaService, CookieService, AuthGuard, LoginServiceService, ProductService],
  bootstrap: [PriceSearchComponent]
})
export class AppModule { }
