import { Injectable } from '@angular/core';

import { Product } from 'src/app/models/product';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private url = "https://my-json-server.typicode.com/price-search/fake-backend/products";

  constructor(private http: HttpClient) { }

  getProducts(): Observable<Product>{
    return this.http.get<Product>(this.url);
  }

  getProductById(id): Observable<Product>{
    return this.http.get<Product>(this.url + '/' + id);
  }

}
