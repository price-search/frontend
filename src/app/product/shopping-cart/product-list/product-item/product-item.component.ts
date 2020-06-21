import { Component, OnInit, Input } from '@angular/core';
import { Product, ResponseProduct, RequestProduct} from 'src/app/models/product';
import { MessengerService } from 'src/app/services/messenger.service';
import { ListaService } from 'src/app/services/lista.service';
import {ShoppingList} from 'src/app/models/lista';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {


 // @Input() productItem: Product;
  @Input() item: Product;

  constructor(private listaService: ListaService, private router: Router, private cookie: CookieService) { }
  response: ResponseProduct;
  state = false;
  idFav: number;
  request: RequestProduct = {
    productId: null
  };
  lists: ShoppingList;
  favList: ShoppingList;
  ngOnInit() {
    if (this.cookie.get('userId')){
      this.state = true;
      }else{
        this.state = false;
      }
    if (this.cookie.get('userId')){
        this.listaService.getList()
        .subscribe(res => this.lists = res);
        this.state = true;
        }else{
          this.state = false;
        }
    this.listaService.getFavoriteList()
    .subscribe(
      res => this.favList = res);

  }
  adicionarProduto(id, listaId){
    console.log('ID da lista: ' + listaId);
    console.log('ID do produto: ' + id);
    this.request.productId = id;
    this.listaService.adicionarProdutoNaLista(this.request, listaId).subscribe(res => {
      this.response = res;
    });
  }

  AddFavorite(id){
    console.log('ID DA LISTA FAVORITO: ' + this.idFav);
    this.listaService.adicionarProdutoNaLista(this.request, this.idFav).subscribe(res => {
      this.response = res;
    });
  }
}
