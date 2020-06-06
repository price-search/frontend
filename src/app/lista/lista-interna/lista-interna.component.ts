import { Component, OnInit, Input } from '@angular/core';
import { ShoppingList } from 'src/app/models/lista';
import { ListaService } from 'src/app/services/lista.service';

@Component({
  selector: 'app-lista-interna',
  templateUrl: './lista-interna.component.html',
  styleUrls: ['./lista-interna.component.css']
})
export class ListaInternaComponent implements OnInit {

  @Input() list: ShoppingList;
  public isCollapsed = true;
  constructor(private listaService: ListaService) { }

  ngOnInit(): void {
  }
}

