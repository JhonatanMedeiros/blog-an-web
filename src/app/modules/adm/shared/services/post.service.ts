import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/catch'
import { Http, Headers, RequestOptions } from '@angular/http';

import { environment } from '../../../../../environments/environment';

@Injectable()
export class PostService {

  constructor(
    private router: Router,
    private http: Http) {
  }




  getPosts(): Observable<any> {

    return this.http.get(environment.api_url + 'adm/posts')
      .map(res => res.json())
      .catch(err => {
        throw new Error(err.message);
      });
  }

  savePost(body): Observable<any> {

    return this.http.post(environment.api_url + 'adm/post', body)
      .map(res => res.json())
      .catch(err => {
        throw new Error(err.message);
      });


  }

  editPost(body): Observable<any> {

    return this.http.put(environment.api_url + 'adm/post/' + body._id, body)
      .map(res => res.json())
      .catch(err => {
        throw new Error(err.message);
      });
  }

  getPost(id): Observable<any> {
    return this.http.get(environment.api_url + 'adm/post/' + id)
      .map(res => res.json())
      .catch(err => {
        throw new Error(err.message);
      });
  }

  deletePost(id): Observable<any> {

    return this.http.delete(environment.api_url + 'adm/post/' + id)
      .map(res => res.json())
      .catch(err => {
        throw new Error(err.message);
      });
  }



}
