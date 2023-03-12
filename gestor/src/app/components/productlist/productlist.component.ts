import { Component, OnInit } from '@angular/core';
import { ProductClass } from 'src/app/class/productClass';
import { ListProductsService } from 'src/app/services/list-products.service';

@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.component.html',
  styleUrls: ['./productlist.component.scss']
})
export class ProductlistComponent implements OnInit {

  public products : ProductClass[] = [];

  constructor(private _listProductsService : ListProductsService){}

  ngOnInit(): void {
    this._listProductsService.getProduct().subscribe((res)=>{this.products = res})
  }
}
