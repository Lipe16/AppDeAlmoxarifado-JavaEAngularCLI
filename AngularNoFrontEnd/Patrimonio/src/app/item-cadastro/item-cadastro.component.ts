import { Component, OnInit } from '@angular/core';

import { ItemService } from '../item.service';

import {FormControl} from '@angular/forms';

@Component({
  selector: 'app-item-cadastro',
  templateUrl: './item-cadastro.component.html',
  styleUrls: ['./item-cadastro.component.css']
})
export class ItemCadastroComponent implements OnInit {

  itens = [];

  constructor(private itemService: ItemService) { }

  consultar(){
    this.itemService.listar().subscribe(dados => this.itens = dados);
  }

  adicionar(frm: FormControl){

    this.itemService.adicionar(frm.value)
    .subscribe(
      ()=>{ 
          frm.reset();
          this.consultar();
        });
  }

  ngOnInit() {
    this.consultar();
  }

}
