import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Shop } from 'src/app/models/shop';
import { MapsService } from 'src/app/services/maps.service';
import {Location} from '@angular/common';

@Component({
  selector: 'app-shop-map',
  templateUrl: './shop-map.component.html',
  styleUrls: ['./shop-map.component.css']
})
export class ShopMapComponent implements OnInit {
  public id: string;
  shop: Shop;

  constructor(private route: ActivatedRoute, private mapService: MapsService, private location: Location) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.id = params.get('id');
  });
    console.log('ID RECEBIDO: ' + this.id);
    this.mapService.getShopById(this.id)
    .subscribe(res => this.shop = res);
  }
  getBack(){
    this.location.back();
  }

}
