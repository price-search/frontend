import { Component, OnInit, Inject } from '@angular/core';
import { Product, RequestProduct, ResponseProduct } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product.service';
import { Router } from '@angular/router';
import { ListaService } from '../services/lista.service';
import { ShoppingList } from '../models/lista';
import { ToastrService } from 'ngx-toastr';
import { DOCUMENT } from '@angular/common';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css']
})
export class FavoriteComponent implements OnInit {

  lists: ShoppingList;
  public tamanho = 0;
  public isCollapsed = true;
  public state = false;
  idFav: number;
  response: ResponseProduct;
  constructor(private listaService: ListaService, private router: Router, private toastr: ToastrService,
              @Inject(DOCUMENT) private document: Document, private cookie: CookieService) { }

  ngOnInit(): void {
    this.listaService.getFavoriteList()
    .subscribe(res => {
      this.lists = res[0];
      this.idFav = res[0].id;
      this.tamanho = res[0].listProducts.length;
      console.log('lists: ' + this.lists[0].name);
    });

  }
  async removerProdutoFavorito(id){
    console.log('ID do produto removido: ' + id);
    this.toastr.success('Removido dos Favoritos!' , 'Pronto!');
    this.listaService.removerProdutoNaLista(id, this.idFav).subscribe(res => {
      this.response = res;
    });
    await this.delay(200);
    this.document.location.reload();
  }
  delay(ms: number) {
    return new Promise( resolve => setTimeout(resolve, ms) );
  }

}
