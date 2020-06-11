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

  private url = 'https://price-search-api.herokuapp.com/api/users/';
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

  deleteList(id){
    return this.http.delete<any>(this.url + this.cookie.get('userId') + '/shopping-lists/' + id);
  }
  alterarNomeDaLista(request: RequestLista, id): Observable<ResponseLista>{
    return this.http.put<ResponseLista>(this.url + this.cookie.get('userId') + '/shopping-lists/' + id, request);
  }
}
