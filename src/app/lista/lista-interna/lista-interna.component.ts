import { Component, OnInit, Input } from '@angular/core';
import { ShoppingList, ResponseLista } from 'src/app/models/lista';
import { ListaService } from 'src/app/services/lista.service';
import { CookieService } from 'ngx-cookie-service';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-lista-interna',
  templateUrl: './lista-interna.component.html',
  styleUrls: ['./lista-interna.component.css']
})
export class ListaInternaComponent implements OnInit {

  @Input() list: ShoppingList;
  public isCollapsed = true;
  response: ResponseLista;
  itens: Product;
  constructor(private listaService: ListaService, private cookie: CookieService, private productService: ProductService) { }
  private userId = this.cookie.get('userId');
  ngOnInit(): void {
    this.productService.getProducts()
    .subscribe(res => this.itens = res);
  }

}

