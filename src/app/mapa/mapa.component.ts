import { Component, OnInit } from '@angular/core';
import {MapsService} from '../services/maps.service';
import { Shop } from '../models/shop';

@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.component.html',
  styleUrls: ['./mapa.component.css']
})
export class MapaComponent implements OnInit {

  lat: number = -22.252054;
  lng: number = -45.703617;
  shops: Shop;
  constructor(private map: MapsService, private mapService: MapsService) { }

  ngOnInit() {
    this.mapService.getMarkers()
    .subscribe(res => this.shops = res);
  }

  mouseOver(){
    console.log('oi');
  }
}
