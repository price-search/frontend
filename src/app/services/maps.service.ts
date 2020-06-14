import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Shop } from '../models/shop';
import { Observable } from 'rxjs';

interface Location{

  latitude: string;
  longitude: string;
}

@Injectable({
  providedIn: 'root'
})
export class MapsService {

  private url = 'https://price-search-api.herokuapp.com/api/shops';
  constructor(private http: HttpClient) { }

  getLocation(){
    return this.http.get<Location>('https://ipapi.co/8.8.8.8/country/');
  }
  getMarkers(): Observable<Shop>{
    return this.http.get<Shop>(this.url);
  }
  getShopById(id){
    console.log(this.url + '/' + id);
    return this.http.get<Shop>(this.url + '/' + id);
  }
}
