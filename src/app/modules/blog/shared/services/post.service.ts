import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Rx';
import { catchError } from 'rxjs/operators';

import { GenericService } from '../../../../shared/services/local-services/generic.service';
import { ErrorService } from '../../../../shared/services/local-services/error.service';

@Injectable()
export class PostService extends GenericService {

  constructor(public http: HttpClient, public errorService: ErrorService) {
    super(http, errorService);
  }

  getPosts(): Observable<any> {
    return this.http.get('blog/posts')
      .pipe(catchError(error => this.handleError(error)));
  }


  getPost(urlID: string): Observable<any> {
    return this.http.get('blog/post/' + urlID)
      .pipe(catchError(error => this.handleError(error)));
  }


}
