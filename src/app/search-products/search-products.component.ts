import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Product, ResponseProduct, RequestProduct } from '../models/product';
import { SearchService } from '../services/search.service';
import { ListaService } from '../services/lista.service';
import { CookieService } from 'ngx-cookie-service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-search-products',
  templateUrl: './search-products.component.html',
  styleUrls: ['./search-products.component.css']
})
export class SearchProductsComponent implements OnInit {
  id: string;
  sub: any;
  public name: string;
  item: Product;
  response: ResponseProduct;
  state = false;
  idFav: number;
  request: RequestProduct = {
    productId: null
  };
  constructor(private route: ActivatedRoute, private searchService: SearchService,
              private cookie: CookieService, private listaService: ListaService, private toastr: ToastrService) {
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.name = params.get('name');
  });
    console.log(this.name);
    this.searchService.searchProduct(this.name)
    .subscribe(res => this.item = res);
    if (this.cookie.get('userId')){
      this.state = true;
      }else{
        this.state = false;
      }
    this.listaService.getFavoriteList()
        .subscribe(res => {
          this.idFav = res[0].id;
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
