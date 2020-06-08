import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Product } from '../models/product';
import { SearchService } from '../services/search.service';

@Component({
  selector: 'app-search-products',
  templateUrl: './search-products.component.html',
  styleUrls: ['./search-products.component.css']
})
export class SearchProductsComponent implements OnInit {
  id: string;
  sub: any;
  public name: string;
  item: Product;
  constructor(private route: ActivatedRoute, private searchService: SearchService) {
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.name = params.get('name');
  });
    console.log(this.name);
    this.searchService.searchProduct(this.name)
    .subscribe(res => this.item = res);
  }

}
