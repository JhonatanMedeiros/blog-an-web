import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Rx';
import { catchError } from 'rxjs/operators';

import { GenericService } from '../../../../shared/services/local-services/generic.service';
import { ErrorService } from '../../../../shared/services/local-services/error.service';

@Injectable()
export class PostService extends GenericService {

  authToken = '';

  constructor(public http: HttpClient, public errorService: ErrorService) {
    super(http, errorService);
    this.authToken = window.localStorage.getItem('token');
  }

  getPosts(): Observable<any> {

    const headers = new HttpHeaders();
    headers.append('Authorization', `Bearer ${this.authToken}`);

    const options = { headers: headers };

    return this.http.get('adm/posts', options)
      .pipe(catchError(error => this.handleError(error)));
  }

  savePost(body): Observable<any> {
    const headers = new HttpHeaders();
    headers.append('Authorization', 'Bearer ' +  this.authToken);
    const options = { headers: headers };

    return this.http.post('adm/post', body, options)
      .pipe(catchError(error => this.handleError(error)));
  }

  editPost(body): Observable<any> {
    const headers = new HttpHeaders();
    headers.append('Authorization', 'Bearer ' +  this.authToken);
    const options = { headers: headers };

    return this.http.put('adm/post/' + body._id, body, options)
      .pipe(catchError(error => this.handleError(error)));
  }

  getPost(id): Observable<any> {
    const headers = new HttpHeaders();
    headers.append('Authorization', 'Bearer ' +  this.authToken);
    const options = { headers: headers };

    return this.http.get('adm/post/' + id, options)
      .pipe(catchError(error => this.handleError(error)));
  }

  deletePost(id): Observable<any> {
    const headers = new HttpHeaders();
    headers.append('Authorization', 'Bearer ' +  this.authToken);
    const options = { headers: headers };

    return this.http.delete('adm/post/' + id, options)
      .pipe(catchError(error => this.handleError(error)));
  }



}
