import { Component, OnInit } from '@angular/core';
import {ApiService} from "../services/api.service";
import {IMenuItem} from "../models/menu-item.interface";

@Component({
  selector: 'app-cardapio',
  templateUrl: './cardapio.component.html',
  styleUrls: ['./cardapio.component.css']
})
export class CardapioComponent implements OnInit {

  menuItens: IMenuItem[] = [];
  categories: string[] = [];

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.apiService.getMenuItens().subscribe(menuItens => {
      this.menuItens = menuItens;
      this.getCategories();
    })
  }

  getCategories(): void{
    this.categories = Array.from(new Set(this.menuItens.map(item => item.categoria)));
  }

  getItemsByCategory(category: string): IMenuItem[]{
    return this.menuItens.filter(item => item.categoria === category);
  }

}
