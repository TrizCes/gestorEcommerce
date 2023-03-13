import { Pipe, PipeTransform } from '@angular/core';
import { ListProductsService } from 'src/app/services/list-products.service';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  constructor(private _listProductsService : ListProductsService){}

  transform(products: any, searchItem: string): any {
    if (!products) return [];
    if (!searchItem) return products;

    searchItem = searchItem.toLowerCase();

    return products.filter((item: any) => {
      return item.nome.toLowerCase().includes(searchItem);
      }
    )
  }
}
