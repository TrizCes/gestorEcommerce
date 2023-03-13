import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'nameUser'
})

export class NameUserPipe implements PipeTransform {

  transform(value: string): string {
    const userName = value?.split('@')[0];
    console.log(userName);

    return userName;
  }
}
