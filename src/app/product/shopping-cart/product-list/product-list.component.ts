import { Component, OnInit } from '@angular/core';

import { ProductService } from 'src/app/services/product.service';
import { Product } from 'src/app/models/product';
import { Lista } from 'src/app/models/lista';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  itens: Product;
  constructor(private productService: ProductService) { }

  ngOnInit() {
    //this.productList = this.productService.getProducts();
    this.productService.getProducts()
    .subscribe(res => this.itens = res);
  }

}
