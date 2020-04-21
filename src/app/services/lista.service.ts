import { Injectable } from '@angular/core';

import {Lista} from 'src/app/models/lista';
import {Product} from 'src/app/models/product';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ListaService {

  private lists: Lista[] = [
    
  ];

  constructor() { }

  addList(list: Lista) {
    this.lists.push(list);
  }

  getList(): Lista[]{

    return this.lists;
  }

  addProductToList(product: Product){

    this.lists[0].products.push(product);
  }

}
