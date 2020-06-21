import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product.service';
import { Router } from '@angular/router';
import { ListaService } from '../services/lista.service';
import { ShoppingList } from '../models/lista';

@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css']
})
export class FavoriteComponent implements OnInit {

  lists: ShoppingList;
  public isCollapsed = true;
  public state = false;
  constructor(private listaService: ListaService, private router: Router) { }

  ngOnInit(): void {
    this.listaService.getFavoriteList()
    .subscribe(res => this.lists = res);
  }

}
