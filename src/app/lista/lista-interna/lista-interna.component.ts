import { Component, OnInit, Input } from '@angular/core';
import { ShoppingList, ResponseLista, ListProducts } from 'src/app/models/lista';
import { ListaService } from 'src/app/services/lista.service';
import { CookieService } from 'ngx-cookie-service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-lista-interna',
  templateUrl: './lista-interna.component.html',
  styleUrls: ['./lista-interna.component.css']
})
export class ListaInternaComponent implements OnInit {

  itens: ListProducts;
  @Input() list: ShoppingList;
  public isCollapsed = true;
  public tamanho = 0;
  constructor(private listaService: ListaService, private cookie: CookieService, private productService: ProductService) { }
  private userId = this.cookie.get('userId');

  ngOnInit(): void {
    this.tamanho = this.list.listProducts.length;
    this.listaService.getList2(this.list.id)
    .subscribe(res => {
      this.itens = res;
    });
    console.log('ID DA LISTA: ' + this.list.id);
  }

}

