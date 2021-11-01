import { Injectable } from '@angular/core';
import {IPedidoItem} from "../models/pedido-item.interface";

@Injectable({
  providedIn: 'root'
})
export class PedidoService {

  pedidos: IPedidoItem[] = [];

  constructor() { }

  addPedido(pedido: IPedidoItem){
    this.pedidos.push(pedido);
  }

  removePedido(pedido: IPedidoItem){
    const id = this.pedidos.indexOf(pedido);
    this.pedidos.splice(id, 1);
  }
}
