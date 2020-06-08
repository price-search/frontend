import { Component, OnInit, Input } from '@angular/core';
import { ShoppingList } from 'src/app/models/lista';
import { ListaService } from 'src/app/services/lista.service';
import { CookieService } from 'ngx-cookie-service';


@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {

  constructor(private listaService: ListaService, private cookie: CookieService) { }
  lists: ShoppingList;
  state = false;
  ngOnInit(): void {
    this.listaService.getList()
    .subscribe(res => this.lists = res);
    if (this.cookie.get('userId')){
      this.state = true;
    }else{
      this.state = false;
    }
  }

}
