import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../services/product.service';
import { Product } from '../models/product';

@Component({
  selector: 'app-comparador',
  templateUrl: './comparador.component.html',
  styleUrls: ['./comparador.component.css']
})
export class ComparadorComponent implements OnInit {

  public id: string;
  itens: Product;
  constructor(private route: ActivatedRoute, private productService: ProductService) {

  }
 contador  = 0;
  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.id = params.get('id');
  });
    this.productService.getProductById(this.id)
    .subscribe(res => {
      this.contador = this.contador + 1;
      console.log('esse contador tem valor de ' + this.contador);
      this.itens = res;
    });

  }

}
