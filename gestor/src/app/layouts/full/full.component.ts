import { Component } from '@angular/core';

@Component({
  selector: 'app-full',
  templateUrl: './full.component.html',
  styleUrls: ['./full.component.scss']
})
export class FullComponent {

  logout(){
    console.log('LocalStorage clean');
    alert('Já está indo? Volte logo');
  }
}
