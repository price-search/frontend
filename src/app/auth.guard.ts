import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router, RouterModule } from '@angular/router';
import { LoginServiceService } from './services/login-service.service';
import { CookieService } from 'ngx-cookie-service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private loginService: LoginServiceService, private cookie: CookieService){}

  canActivate(): boolean {
    if(this.loginService.loggedIn()){
      return true;
    }else {
      return false;
    }
  }
}
