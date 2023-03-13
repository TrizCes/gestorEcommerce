import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { UserClass } from '../class/userClass';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private statusLogin: boolean = false;

  constructor(private router: Router) { };

  login(user: UserClass): boolean {
    if(user.email === 'user@email.com' && user.password === '123456'){
      console.log('Acesso liberado');
      this.statusLogin = true;
      this.router.navigate(['']);
      this.set("email", user.email);
    }else{
      this.statusLogin = false;
      console.error("Credenciais inválidas");
    }
    return this.statusLogin;
  };

  loggedIn(): boolean {
    return this.statusLogin;
  }

  logOut(): boolean {
    localStorage.clear();
    return this.statusLogin = false;
  }

  set(key: string, value: any): void {
    localStorage.setItem(key, value);
  }
}
