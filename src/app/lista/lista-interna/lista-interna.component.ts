import { Component, OnInit, Input } from '@angular/core';
import { ShoppingList, ResponseLista } from 'src/app/models/lista';
import { ListaService } from 'src/app/services/lista.service';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-lista-interna',
  templateUrl: './lista-interna.component.html',
  styleUrls: ['./lista-interna.component.css']
})
export class ListaInternaComponent implements OnInit {

  @Input() list: ShoppingList;
  public isCollapsed = true;
  response: ResponseLista;
  constructor(private listaService: ListaService, private cookie: CookieService) { }
  private userId = this.cookie.get('userId');
  ngOnInit(): void {
  }
  
}

