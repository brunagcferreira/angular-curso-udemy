import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ItemLista } from './item-lista';

@Component({
  selector: 'app-lista-compras',
  imports: [ FormsModule ],
  templateUrl: './lista-compras.html',
  styleUrl: './lista-compras.scss'
})
export class ListaCompras {
  
  item: string = '';
  lista: ItemLista[] = [];

  addItem(){
    console.log("item recebido: ", this.item);

    let itemLista = new ItemLista;
    itemLista.nome = this.item;
    itemLista.id = this.lista.length+1;

    this.lista.push(itemLista);

    this.item = "";

    console.table(this.lista);
    }

}
