import { Injectable } from '@angular/core';
import { Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/catch'
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/do';

import { GenericService } from '../../../../shared/services/local-services/generic.service';
import { ErrorService } from '../../../../shared/services/local-services/error.service';
import { HttpService } from '../../../../shared/services/local-services/http.service';

import { PostModel, PostResponseModel } from '../../../../models/post.model';

@Injectable()
export class PostService extends GenericService {

  authToken: string = '';

  constructor(
    public http: HttpService,
    public errorService: ErrorService) {

    super(http, errorService);

    this.authToken = window.localStorage.getItem('token');

  }


  private _serverError(err: any) {
    if (err instanceof Response) {
      return Observable.throw(err.json() || 'backend server error');
    }
    return Observable.throw(err || 'backend server error');
  }



  getPosts(): Observable<PostResponseModel> {

    let headers = new Headers();
    headers.append('Authorization', `Bearer ${this.authToken}`);

    let options = new RequestOptions({ headers: headers });

    return this.http.get('adm/posts', options)
      // .map(res => res.json())
      .map(this.handleData)
      // .catch(this._serverError);
      .catch(error => this.handleError(error));
  }

  savePost(body): Observable<any> {

    let headers = new Headers();
    headers.append('Authorization', 'Bearer ' +  this.authToken);
    let options = new RequestOptions({ headers: headers });

    return this.http.post('adm/post', body, options)
      .map(res => res.json())
      .catch(this._serverError);
  }

  editPost(body): Observable<any> {


    let headers = new Headers();
    headers.append('Authorization', 'Bearer ' +  this.authToken);
    let options = new RequestOptions({ headers: headers });

    return this.http.put('adm/post/' + body._id, body, options)
      .map(res => res.json())
      .catch(this._serverError);
  }

  getPost(id): Observable<PostModel> {


    let headers = new Headers();
    headers.append('Authorization', 'Bearer ' +  this.authToken);
    let options = new RequestOptions({ headers: headers });


    return this.http.get('adm/post/' + id, options)
      .map(res => res.json())
      .catch(this._serverError);
  }

  deletePost(id): Observable<any> {


    let headers = new Headers();
    headers.append('Authorization', 'Bearer ' +  this.authToken);
    let options = new RequestOptions({ headers: headers });


    return this.http.delete('adm/post/' + id, options)
      .map(res => res.json())
      .catch(this._serverError);
  }



}
