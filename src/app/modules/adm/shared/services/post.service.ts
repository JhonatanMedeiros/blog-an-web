import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Http, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/catch'
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/do';  // debug

import { environment } from '../../../../../environments/environment';

@Injectable()
export class PostService {

  authToken: string = '';

  constructor(
    private router: Router,
    private http: Http) {

    this.authToken = window.localStorage.getItem('token');

  }


  private _serverError(err: any) {
    if (err instanceof Response) {
      return Observable.throw(err.json() || 'backend server error');
    }
    return Observable.throw(err || 'backend server error');
  }



  getPosts(): Observable<any> {

    let headers = new Headers();
    headers.append('Authorization', `Bearer ${this.authToken}`);

    let options = new RequestOptions({ headers: headers });

    return this.http.get(environment.api_url + 'adm/posts', options)
      .map(res => res.json())
      .catch(this._serverError);
  }

  savePost(body): Observable<any> {

    let headers = new Headers();
    headers.append('Authorization', 'Bearer ' +  this.authToken);
    let options = new RequestOptions({ headers: headers });

    return this.http.post(environment.api_url + 'adm/post', body, options)
      .map(res => res.json())
      .catch(this._serverError);
  }

  editPost(body): Observable<any> {


    let headers = new Headers();
    headers.append('Authorization', 'Bearer ' +  this.authToken);
    let options = new RequestOptions({ headers: headers });

    return this.http.put(environment.api_url + 'adm/post/' + body._id, body, options)
      .map(res => res.json())
      .catch(this._serverError);
  }

  getPost(id): Observable<any> {


    let headers = new Headers();
    headers.append('Authorization', 'Bearer ' +  this.authToken);
    let options = new RequestOptions({ headers: headers });


    return this.http.get(environment.api_url + 'adm/post/' + id, options)
      .map(res => res.json())
      .catch(this._serverError);
  }

  deletePost(id): Observable<any> {


    let headers = new Headers();
    headers.append('Authorization', 'Bearer ' +  this.authToken);
    let options = new RequestOptions({ headers: headers });


    return this.http.delete(environment.api_url + 'adm/post/' + id, options)
      .map(res => res.json())
      .catch(this._serverError);
  }



}
