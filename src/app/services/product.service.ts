import { Injectable } from '@angular/core';

import { Product } from 'src/app/models/product';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private url = 'http://price-search-api.herokuapp.com/api/products?join=offers';
  private url2 = 'http://price-search-api.herokuapp.com/api/products/';
  constructor(private http: HttpClient) { }

  getProducts(): Observable<Product>{
    return this.http.get<Product>(this.url);
  }

  getProductById(id): Observable<Product>{
    return this.http.get<Product>(this.url2 + id + '/?join=offers&join=shop');
  }
  getOfferById(id): Observable<Product>{
    return this.http.get<Product>(this.url + '/' + id + '/offers');
  }


}
