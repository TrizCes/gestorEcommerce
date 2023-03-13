import { Component, OnInit} from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { NameUserPipe } from 'src/app/pipes/name-user.pipe';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Component({
  selector: 'app-product-record',
  templateUrl: './product-record.component.html',
  styleUrls: ['./product-record.component.scss'],
})

export class ProductRecordComponent implements OnInit{
  recordForm!: FormGroup;
  email!: any;

  constructor(private fb: FormBuilder, private _httpClient: HttpClient){}

  ngOnInit(): void{
    this.email = localStorage.getItem('email');
    this.createNewProduct();
  }

  createNewProduct(): void {
    this.recordForm = new FormGroup({
      id : new FormControl('', [Validators.required]),
      nome: new FormControl('', [Validators.required]),
      quantidade: new FormControl('', [Validators.required]),
      preco: new FormControl('', [Validators.required]),
    })

  }
  onSubmit(){
    if (!this.recordForm.valid) {
      console.error("Erro ao cadastrar");
      alert("Erro ao cadastrar");
      return;
    }
    alert(`Item cadastrado com sucesso`)

    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    this._httpClient.post('http://localhost:3000/list', this.recordForm.value , { headers }).subscribe(
      (response: any) => console.log('Success:', response),
      (error: any) => console.error('Error:', error));
  }
}
