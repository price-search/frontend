import { Injectable } from '@angular/core';

import {ShoppingList, ResponseLista, RequestLista} from 'src/app/models/lista';
import {Product} from 'src/app/models/product';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../models/user';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class ListaService {

  private url = 'http://price-search-api.herokuapp.com/api/users/';
  constructor(private http: HttpClient, private cookie: CookieService) { }

  getList(): Observable<ShoppingList>{
    return this.http.get<ShoppingList>(this.url + this.cookie.get('userId') + '/shopping-lists');
  }

  createList(request: RequestLista): Observable<ResponseLista>{
    return this.http.post<ResponseLista>(this.url + this.cookie.get('userId') + '/shopping-lists', request, 
    {headers: new HttpHeaders({
      'content-type': 'application/json'
    })});
  }
  /*addList(list: Lista) {
    this.lists.push(list);
  }

  getList(): Lista[]{

    return this.lists;
  }

  addProductToList(product: Product){

    this.lists[0].products.push(product);
  }*/

}
