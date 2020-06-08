import { Injectable } from '@angular/core';
import { Product } from '../models/product';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  constructor(private http: HttpClient) { }

  private url = 'http://price-search-api.herokuapp.com/api/products?filter=';

  searchProduct(word): Observable<Product>{
    return this.http.get<Product>(this.url + 'name%7C%7C%24contL%7C%7C' + word);
  }
}
