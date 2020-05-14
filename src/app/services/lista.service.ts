import { Injectable } from '@angular/core';

import {Lista} from 'src/app/models/lista';
import {Product} from 'src/app/models/product';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ListaService {

  private url = "https://my-json-server.typicode.com/price-search/fake-backend/listas";


  constructor(private http: HttpClient) { }

  getList(): Observable<Lista>{
    return this.http.get<Lista>(this.url);
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
