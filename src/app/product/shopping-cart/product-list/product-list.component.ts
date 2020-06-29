import { Component, OnInit } from '@angular/core';

import { ProductService } from 'src/app/services/product.service';
import { Product } from 'src/app/models/product';
import { ShoppingList } from 'src/app/models/lista';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { ListaService } from 'src/app/services/lista.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  itens: Product;
  lists: ShoppingList;
  public isCollapsed = true;
  public state = false;
  constructor(private productService: ProductService, private http: HttpClient, private listaService: ListaService,) { }

  ngOnInit() {
    this.productService.getProducts()
    .subscribe(res => this.itens = res);
  }
}
