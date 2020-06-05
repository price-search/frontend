import { Component, OnInit } from '@angular/core';

import { ProductService } from 'src/app/services/product.service';
import { Product } from 'src/app/models/product';
import { ShoppingList } from 'src/app/models/lista';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  itens: Product;
  constructor(private productService: ProductService, private http: HttpClient) { }

  ngOnInit() {
    this.productService.getProducts()
    .subscribe(res => this.itens = res);
  }
}
