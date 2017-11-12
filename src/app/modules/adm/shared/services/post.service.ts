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

  authToken;

  constructor(
    private router: Router,
    private http: Http) {

    this.authToken = window.localStorage.getItem('token');

    console.log(this.authToken)

  }


  private _serverError(err: any) {
    console.log('sever error:', err);  // debug
    if (err instanceof Response) {
      return Observable.throw(err.json() || 'backend server error');
      // if you're using lite-server, use the following line
      // instead of the line above:
      // return Observable.throw(err.text() || 'backend server error');
    }
    return Observable.throw(err || 'backend server error');
  }



  getPosts(): Observable<any> {

    let headers = new Headers();
    // headers.append('Access-Control-Allow-Origin', '*');
    // headers.append('Authorization', 'Bearer ' +  this.authToken);
    headers.append('Authorization', `Bearer ${this.authToken}`);

    let options = new RequestOptions({ headers: headers });

    return this.http.get(environment.api_url + 'adm/posts', options)
      .map(res => res.json())
      .do(data => console.log('server data:', data))  // debug
      .catch(this._serverError);
  }

  savePost(body): Observable<any> {

    let headers = new Headers();
    headers.append('Authorization', 'Bearer ' +  this.authToken);
    let options = new RequestOptions({ headers: headers });

    return this.http.post(environment.api_url + 'adm/post', body, options)
      .map(res => res.json())
      .catch(err => {
        throw new Error(err.message);
      });


  }

  editPost(body): Observable<any> {


    let headers = new Headers();
    headers.append('Authorization', 'Bearer ' +  this.authToken);
    let options = new RequestOptions({ headers: headers });

    return this.http.put(environment.api_url + 'adm/post/' + body._id, body, options)
      .map(res => res.json())
      .catch(err => {
        throw new Error(err.message);
      });
  }

  getPost(id): Observable<any> {


    let headers = new Headers();
    headers.append('Authorization', 'Bearer ' +  this.authToken);
    let options = new RequestOptions({ headers: headers });


    return this.http.get(environment.api_url + 'adm/post/' + id, options)
      .map(res => res.json())
      .catch(err => {
        throw new Error(err.message);
      });
  }

  deletePost(id): Observable<any> {


    let headers = new Headers();
    headers.append('Authorization', 'Bearer ' +  this.authToken);
    let options = new RequestOptions({ headers: headers });


    return this.http.delete(environment.api_url + 'adm/post/' + id, options)
      .map(res => res.json())
      .catch(err => {
        throw new Error(err.message);
      });
  }



}
