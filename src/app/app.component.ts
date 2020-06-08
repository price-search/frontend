import { Component, Output } from '@angular/core';
import {
  BreakpointObserver,
  Breakpoints,
  BreakpointState
} from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { AuthService, GoogleLoginProvider } from 'angularx-social-login';
import { HttpClient } from '@angular/common/http';
import { ResponseUser, RequestUser, User } from './models/user';
import { UserService } from './services/user.service';
import { CookieService } from 'ngx-cookie-service';
import { LoginServiceService } from './services/login-service.service';
import { Router } from '@angular/router';
import { Product, RequestWord } from './models/product';
import { SearchService } from './services/search.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class PriceSearchComponent {
  title = 'Sign in with Google';
  state = false;
  state2 = true;
  itens: Product;
  response: ResponseUser;
  request: RequestUser = {
    id: '',
  };
  name: string;

  isHandset: Observable<BreakpointState> = this.breakpointObserver.observe(
    Breakpoints.Handset
  );
  UserService: any;
  constructor(
    private _socioAuthServ: AuthService,
    private breakpointObserver: BreakpointObserver,
    private http: HttpClient,
    private userService: UserService,
    private cookie: CookieService,
    private srvLogin: LoginServiceService,
    private router: Router,
    private searchService: SearchService,
    private location: Location
  ) { }

  ngOnInit() {
    if (this.cookie.get('userId')){
      this.state = true;
      this.state2 = false;
    }else{
      this.state = false;
      this.state2 = true;
    }
  }

  create(id){
    this.request.id = id;
    console.log("teste"+ this.request);
    this.userService.createUser(this.request).subscribe(res => {
            this.response = res;
    });
  }

  signIn(platform: string): void {
    platform = GoogleLoginProvider.PROVIDER_ID;

    this._socioAuthServ.signIn(platform).then(response => {
      console.log(platform + ' logged in user data is=', response);
      this.cookie.set('userId', response.id);
      this.srvLogin.isLogged = true;
      this.state = true;
      this.state2 = false;
      console.log(this.srvLogin.isLogged);
      console.log(this.cookie.get('userId'));
      this.create(response.id);
      this.router.navigate(['/products']);
    });
  }
  signOut(): void {
    this._socioAuthServ.signOut();
    console.log('User Signed Out');
    this.cookie.deleteAll();
    this.state = false;
    this.state2 = true;
  }

}
