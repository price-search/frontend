import { Component, OnInit, Input } from '@angular/core';
import { Product, ResponseProduct, RequestProduct} from 'src/app/models/product';
import { MessengerService } from 'src/app/services/messenger.service';
import { ListaService } from 'src/app/services/lista.service';
import {ShoppingList} from 'src/app/models/lista';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { ProductService } from 'src/app/services/product.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {


 // @Input() productItem: Product;
  @Input() item: Product;
  constructor(private listaService: ListaService, private router: Router, private cookie: CookieService,
              private toastr: ToastrService) { }
  response: ResponseProduct;
  state = false;
  request: RequestProduct = {
    productId: null
  };
  lists: ShoppingList;
  idFav: number;
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
    console.log('ID do produto adicionado: ' + id);
    this.request.productId = id;

    this.toastr.success('Adicionado com sucesso!' , 'Salvo!');
    this.listaService.adicionarProdutoNaLista(this.request, this.idFav).subscribe(res => {
      this.response = res;
    });
  }
}
