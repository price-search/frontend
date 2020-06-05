import { Component, OnInit, Input } from '@angular/core';
import { Product} from 'src/app/models/product';
import { MessengerService } from 'src/app/services/messenger.service';
import { ListaService } from 'src/app/services/lista.service';
import {ShoppingList} from 'src/app/models/lista';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {


 // @Input() productItem: Product;
  @Input() item: Product;
  state = false;
  constructor(private listaService: ListaService, private router: Router, private cookie: CookieService) { }

  ngOnInit() {
    if (this.cookie.get('userId')){
      this.state = true;
    }else{
      this.state = false;
    }
  }
}
