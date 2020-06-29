import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../services/product.service';
import { Product, RequestProduct, ResponseProduct } from '../models/product';
import { ListaService } from '../services/lista.service';
import { ShoppingList } from '../models/lista';
import { CookieService } from 'ngx-cookie-service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-comparador',
  templateUrl: './comparador.component.html',
  styleUrls: ['./comparador.component.css']
})
export class ComparadorComponent implements OnInit {

  public id: string;
  itens: Product;
  state = false;
  request: RequestProduct = {
    productId: null
  };
  response: ResponseProduct;
  lists: ShoppingList;
  constructor(private cookie: CookieService,
              private route: ActivatedRoute,
              private productService: ProductService,
              private listaService: ListaService,
              private toastr: ToastrService) {}
  contador  = 0;
  idFav: number;
  favList: ShoppingList;

  ngOnInit(): void {
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

    this.route.paramMap.subscribe(params => {
      this.id = params.get('id');
  });
    this.productService.getProductById(this.id)
    .subscribe(res => {
      this.contador = this.contador + 1;
      console.log('esse contador tem valor de ' + this.contador);
      this.itens = res;
    });
    this.listaService.getFavoriteList()
    .subscribe(
      res => {
        this.idFav = res[0].id;
        this.favList = res[0];
    });
  }
  adicionarProduto(id, listaId){
    console.log('ID da lista: ' + listaId);
    console.log('ID do produto: ' + id);
    this.request.productId = id;
    this.toastr.success('Adicionado com sucesso!' , 'Salvo!');
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
