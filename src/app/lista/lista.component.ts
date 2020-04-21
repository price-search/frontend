import { Component, OnInit } from '@angular/core';
import {Lista} from 'src/app/models/lista';
import { ListaService } from '../services/lista.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {

  constructor(private listaService: ListaService, private router: Router) { }

  productList: Lista[];
  item: Lista = new Lista();

  ngOnInit() {
    this.productList = this.listaService.getList();
  }

  save(item: Lista): void{
    console.log(item);

    this.listaService.addList(item);

    this.item = new Lista();

  }

}
