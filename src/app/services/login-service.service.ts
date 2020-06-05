import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';
import { AuthService } from 'angularx-social-login';

@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {

    isLogged = false;
    constructor(private http: HttpClient, private cookie: CookieService, private _socioAuthServ: AuthService,) {}
    private userId = this.cookie.get('userId');
    private loggedInStatus = false;
    checkLogValues(id): boolean {
      console.log('ID DO USUARIO');
      console.log(this.userId);
      if (this.userId === id) {
            return true;

        } else {
            alert('Login not valid');
            return false;
        }
    }

    loggedIn(){
      return !!localStorage.getItem('token');
    }

    getToken(){
      return this.cookie.get('userId');
    }
  }
