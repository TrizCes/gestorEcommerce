import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public email!: string | any;

  ngOnInit():void {
    console.log(localStorage.getItem('email'));
    this.email = localStorage.getItem('email');
  };
}
