import { Component, OnInit, Input } from '@angular/core';
import { Lista } from 'src/app/models/lista';
import { ListaService } from 'src/app/services/lista.service';


@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {

  lists: Lista[];
  constructor(private listaService: ListaService) { }

  ngOnInit(): void {
    this.lists = this.listaService.getList();
  }

}
