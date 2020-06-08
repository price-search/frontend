import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { RequestUser, ResponseUser } from '../models/user';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private url = 'https://price-search-api.herokuapp.com/api/users';
  constructor(private http: HttpClient) { }

  createUser(request: RequestUser): Observable<ResponseUser>{
    return this.http.post<ResponseUser>(this.url, request, {headers: new HttpHeaders({
      'content-type': 'application/json'
    })});
  }
}
