import { Component, OnInit, Input } from '@angular/core';
import { ShoppingList } from 'src/app/models/lista';
import { ListaService } from 'src/app/services/lista.service';
import { CookieService } from 'ngx-cookie-service';
import { RequestProduct, ResponseProduct, Product } from 'src/app/models/product';


@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {

  constructor(private listaService: ListaService, private cookie: CookieService) { }
  lists: ShoppingList;
  @Input() item: string;
  response: ResponseProduct;
  state = false;
  request: RequestProduct;
  ngOnInit(): void {
    if (this.cookie.get('userId')){
    this.listaService.getList()
    .subscribe(res => this.lists = res);
    this.state = true;
    }else{
      this.state = false;
    }
    console.log('PRODUTO:' + this.item);
  }
  adicionarProduto(id, listaId){
    console.log('ID da lista: ' + listaId);
    console.log('ID do produto: ' + id);
    this.request.productId = id;
    this.listaService.adicionarProdutoNaLista(this.request, listaId).subscribe(res => {
      this.response = res;
});
  }

}
