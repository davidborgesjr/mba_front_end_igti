import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {IMenuItem} from "../models/menu-item.interface";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private readonly API_URL = 'http://localhost:3000';

  constructor(private httpClient: HttpClient) {}

  getMenuItens(): Observable<IMenuItem[]> {
    return this.httpClient.get<IMenuItem[]>(`${this.API_URL}/cardapio`);
  }
}


