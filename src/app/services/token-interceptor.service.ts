import { Injectable, Injector } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { LoginServiceService } from './login-service.service';
import { Observable } from 'rxjs';
import { CookieService } from 'ngx-cookie-service';

@Injectable()
export class TokenInterceptorService implements HttpInterceptor{

  constructor(private injector: Injector, private cookie: CookieService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler){
    const token = this.cookie.get('userId');
    req = this.addToken(req, token);
    return next.handle(req);
  }
  private addToken(req: HttpRequest<any>, token: string){
    return req.clone({
setHeaders: {'Authorization': `Bearer ${token}`}
    });
  }
}
