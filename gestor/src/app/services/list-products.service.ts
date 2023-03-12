import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ProductClass } from '../class/productClass';

@Injectable({
  providedIn: 'root'
})
export class ListProductsService {

  constructor(private _httpClient: HttpClient) { }

  public getProduct(): Observable<ProductClass[]>{
    return this._httpClient.get<ProductClass[]>(`http://localhost:3000/list`)
  }
}
