import { Injectable } from '@angular/core';

import {ShoppingList, ResponseLista, RequestLista, ListProducts} from 'src/app/models/lista';
import {Product, RequestProduct, ResponseProduct} from 'src/app/models/product';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../models/user';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class ListaService {

  private url = 'https://price-search-api.herokuapp.com/api/users/';
  constructor(private http: HttpClient, private cookie: CookieService) { }

  getList(): Observable<ShoppingList>{
    return this.http.get<ShoppingList>(this.url + this.cookie.get('userId') + '/shopping-lists' + '?join=listProducts.product.offers&join=listProducts.product.offers.shop');
  }
  getList2(id): Observable<ListProducts>{
    return this.http.get<ListProducts>(this.url + this.cookie.get('userId') + '/shopping-lists/' + id + '/products?join=product&join=product.offers');
  }
  getFavoriteList(): Observable<ShoppingList>{
    return this.http.get<ShoppingList>(this.url + this.cookie.get('userId') + '/shopping-lists' + '?limit=1&join=listProducts.product.offers');
  }

  createList(request: RequestLista): Observable<ResponseLista>{
    return this.http.post<ResponseLista>(this.url + this.cookie.get('userId') + '/shopping-lists', request,
    {headers: new HttpHeaders({
      'content-type': 'application/json'
    })});
  }

  deleteList(id){
    return this.http.delete<any>(this.url + this.cookie.get('userId') + '/shopping-lists/' + id);
  }
  alterarNomeDaLista(request: RequestLista, id): Observable<ResponseLista>{
    return this.http.put<ResponseLista>(this.url + this.cookie.get('userId') + '/shopping-lists/' + id, request);
  }
  adicionarProdutoNaLista(request: RequestProduct, id): Observable<ResponseProduct>{
    return this.http.post<ResponseProduct>(this.url + this.cookie.get('userId') + '/shopping-lists/' + id + '/products', request,
    {headers: new HttpHeaders({
      'content-type': 'application/json'
    })});
  }
}
