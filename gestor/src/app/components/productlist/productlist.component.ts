import { Component, Input, OnInit} from '@angular/core';
import { ProductClass } from 'src/app/class/productClass';
import { ListProductsService } from 'src/app/services/list-products.service';
import { SearchPipe } from 'src/app/pipes/search.pipe';

@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.component.html',
  styleUrls: ['./productlist.component.scss'],
})

export class ProductlistComponent implements OnInit {

  public products : ProductClass[] = [];
  searchItem!: string;

  constructor(private _listProductsService : ListProductsService){}

  ngOnInit(): void {
    this._listProductsService.getProduct().subscribe((res)=>{this.products = res});
  }

  onSubmit(): void {
    console.log('Buscando');
    console.log(this.searchItem);

  }
}

