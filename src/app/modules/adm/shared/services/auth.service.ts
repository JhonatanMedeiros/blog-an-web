import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Http, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/catch'

import { environment } from '../../../../../environments/environment';

import { ErrorService } from '../../../../shared/services/local-services/error.service';
import { GenericService } from '../../../../shared/services/local-services/generic.service';

@Injectable()
export class AuthService extends GenericService{

  constructor(
    private router: Router,
    public http: Http,
    public errorService: ErrorService) {

    super(http, errorService);
  }


  isLogin(): boolean {

    if (this.getToken()) {
      return true;
    }else {
      return false;
    }

  }

  getToken (): any {

    if (localStorage.getItem('token') !== null) {

      let token = localStorage.getItem('token');

      if (token.length < 215) {

        return false

      } else {
        return token;
      }


    }else {
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

    return this.http.post(environment.api_url + 'auth/login', body)
      .map(res => this.handleData(res))
      .catch(this.handleError);


  }

  register(body): Observable<any> {

    let headers = new Headers();
    // let authToken = this._user.getUser().JWT;
    headers.append('Content-Type', 'application/x-www-form-urlencoded');
    // headers.append('Authorization', `Bearer ${authToken}`);
    let options = new RequestOptions({ headers: headers });

    return this.http.post(environment.api_url + 'auth/register', body, options)
      .map(res => res.json())
      .catch(err => {
        throw new Error(err.message);
      });


  }




  private _serverError(err: any) {
    if (err instanceof Response) {
      return Observable.throw(err.json() || 'backend server error');
    }
    return Observable.throw(err || 'backend server error');
  }

}
