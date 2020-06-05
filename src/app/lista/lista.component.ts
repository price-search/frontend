import { Component, OnInit } from '@angular/core';
import {ShoppingList, RequestLista, ResponseLista} from 'src/app/models/lista';
import { ListaService } from '../services/lista.service';
import {Router} from '@angular/router';
import { CookieService } from 'ngx-cookie-service';


@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {



response: ResponseLista;
  srvLogin: any;
  PriceSearchComponent: any;

  constructor(private listaService: ListaService, private router: Router, private cookie: CookieService) { }

  lists: ShoppingList;
  private userId = this.cookie.get('userId');
  request: RequestLista = {
    name: '',
    user: {id: this.userId}
  };
  ngOnInit() {
    this.listaService.getList()
    .subscribe(res => this.lists = res);
    console.log('teste');
  }
  criarLista(){
    this.listaService.createList(this.request).subscribe(res => {
            this.response = res;
    });
  }

  /*save(item: Lista): void{
    console.log(item);

    this.listaService.addList(item);

    this.item = new Lista();

  }*/

}
