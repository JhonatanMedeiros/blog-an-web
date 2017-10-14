import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable()
export class AuthService {

  token: any = localStorage.getItem('token');

  constructor(private router: Router) { }


  isLogin(): boolean {

    if (this.token) {
      return true;
    }else {
      this.router.navigate(['/login']);
      return false;
    }

  }

}
