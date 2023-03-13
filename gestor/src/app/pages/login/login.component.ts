import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  email!: any;
  emailPattern: string = '^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$';
  passwordPattern: string = '^[0-9]+$';

  constructor(private fb: FormBuilder, private authService: AuthService) { }

ngOnInit(): void {
  this.createLoginForm();
};

createLoginForm(): void {
  this.loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email, Validators.pattern(this.emailPattern)]),
    password: new FormControl('', [Validators.required, Validators.minLength(6), Validators.pattern(this.passwordPattern)])
  })
}

onSubmit() {
  if (!this.loginForm.valid) {
    console.error("Login failed");
    return;
  }
  this.authService.login(this.loginForm.value);
}
}
