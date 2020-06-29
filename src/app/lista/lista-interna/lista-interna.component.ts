import { Component, OnInit, Input, Inject } from '@angular/core';
import { ShoppingList, ResponseLista, ListProducts } from 'src/app/models/lista';
import { ListaService } from 'src/app/services/lista.service';
import { CookieService } from 'ngx-cookie-service';
import { ProductService } from 'src/app/services/product.service';
import { ToastrService } from 'ngx-toastr';
import { ResponseProduct } from 'src/app/models/product';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-lista-interna',
  templateUrl: './lista-interna.component.html',
  styleUrls: ['./lista-interna.component.css']
})
export class ListaInternaComponent implements OnInit {

  itens: ListProducts;
  @Input() list: ShoppingList;
  response: ResponseProduct;
  public isCollapsed = true;
  public tamanho = 0;
  constructor(private listaService: ListaService, private cookie: CookieService, private productService: ProductService, 
              private toastr: ToastrService, @Inject(DOCUMENT) private document: Document) { }
  private userId = this.cookie.get('userId');

  ngOnInit(): void {
    this.tamanho = this.list.listProducts.length;
    this.listaService.getList2(this.list.id)
    .subscribe(res => {
      this.itens = res;
    });
    console.log('ID DA LISTA: ' + this.list.id);
  }
  async removerProduto(listId, productId){
    console.log('ID do produto removido: ' + productId);
    this.toastr.success('Removido dos Favoritos!' , 'Pronto!');
    this.listaService.removerProdutoNaLista(productId, listId).subscribe(res => {
      this.response = res;
    });
    await this.delay(200);
    this.document.location.reload();
  }
  delay(ms: number) {
    return new Promise( resolve => setTimeout(resolve, ms) );
  }

}

