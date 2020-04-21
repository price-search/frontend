import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css']
})
export class FavoriteComponent implements OnInit {


  productList: Product[] = [];
  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.productList = this.productService.getProducts();
  }

}