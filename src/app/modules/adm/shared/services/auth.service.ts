import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Rx';
import { catchError } from 'rxjs/operators';

import { environment } from '../../../../../environments/environment';

import { ErrorService } from '../../../../shared/services/local-services/error.service';
import { GenericService } from '../../../../shared/services/local-services/generic.service';


@Injectable()
export class AuthService extends GenericService {

  constructor(
    private router: Router,
    public http: HttpClient,
    public errorService: ErrorService) {

    super(http, errorService);
  }


  isLogin(): boolean {
    return !!this.getToken();
  }

  getToken (): any {

    if (localStorage.getItem('token') !== null) {

      const token = localStorage.getItem('token');

      if (token.length < 215) {
        return false
      } else {
        return token;
      }
    } else {
      return false;
    }
  }

  setToken(user): void {

    localStorage.setItem('token', user.token);
    localStorage.setItem('user', JSON.stringify(user.user));

  }

  removeToken(): void {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    this.router.navigate(['/login']);
  }

  login(body): Observable<any> {

    // let headers = new Headers();
    // let authToken = this._user.getUser().JWT;
    // headers.append('Authorization', 'JWT ' +  this.token);
    // headers.append('Content-Type', 'application/x-www-form-urlencoded');
    // let options = new RequestOptions({ headers: headers });

    return this.http.post('auth/login', body).pipe(
      catchError(this.handleError)
    );


  }

  register(body): Observable<any> {
    const headers = new HttpHeaders();
    // let authToken = this._user.getUser().JWT;
    headers.append('Content-Type', 'application/x-www-form-urlencoded');
    // headers.append('Authorization', `Bearer ${authToken}`);
    const options = { headers: headers };

    return this.http.post(environment.api_url + 'auth/register', body, options)
      .pipe(
        catchError(err => {
          throw new Error(err.message);
        })
      );
  }

}
