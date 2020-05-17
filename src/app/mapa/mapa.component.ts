import { Component, OnInit } from '@angular/core';
import {MapsService} from '../services/maps.service';

@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.component.html',
  styleUrls: ['./mapa.component.css']
})
export class MapaComponent implements OnInit {

  lat: number = -22.2499;
  lng: number = -45.7198;

  constructor(private map: MapsService) { }

  ngOnInit() {
  }
}
