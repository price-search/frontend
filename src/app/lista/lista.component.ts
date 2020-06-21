import { Component, OnInit, Inject } from '@angular/core';
import {ShoppingList, RequestLista, ResponseLista} from 'src/app/models/lista';
import { ListaService } from '../services/lista.service';
import {Router, Event as RouterEvent,
  NavigationStart,
  NavigationEnd,
  NavigationCancel,
  NavigationError} from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {



response: ResponseLista;
  srvLogin: any;
  PriceSearchComponent: any;

  constructor(private listaService: ListaService, private router: Router, private cookie: CookieService,
              @Inject(DOCUMENT) private document: Document) {
     }
     loading = true;
  lists: ShoppingList;
  public isCollapsed = true;
  private userId = this.cookie.get('userId');
  request: RequestLista = {
    name: ''
  };
  ngOnInit() {
    this.listaService.getList()
    .subscribe(res => this.lists = res);
    console.log('ID do usuario ' + this.userId);

  }
  async criarLista(){
    this.listaService.createList(this.request).subscribe(res => {
            this.response = res;
    });
    await this.delay(200);
    this.document.location.reload();
  }
  async deletarLista(id){
    console.log('ID DELETADO: ' + id);
    this.listaService.deleteList(id).subscribe(res => {
      this.response = res;
    });
    await this.delay(200);
    this.document.location.reload();
  }
  async alterarNomeDaLista(id){
    console.log('ID da lista: ' + id);
    this.listaService.alterarNomeDaLista(this.request, id).subscribe(res => {
      this.response = res;
  });
    await this.delay(300);
    this.document.location.reload();
  }
  delay(ms: number) {
    return new Promise( resolve => setTimeout(resolve, ms) );
  }

}
