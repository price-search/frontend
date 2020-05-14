import { Component, OnInit, Input } from '@angular/core';
import { Product} from 'src/app/models/product';
import { MessengerService } from 'src/app/services/messenger.service';
import { ListaService } from 'src/app/services/lista.service';
import {Lista} from 'src/app/models/lista';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {


 // @Input() productItem: Product;
  @Input() item: Product;
  constructor(private msg: MessengerService, private listaService: ListaService) { }

  ngOnInit() {
  }

  handleAddToCart(productItem) {

    //this.msg.sendMsg(productItem);
  }

}
