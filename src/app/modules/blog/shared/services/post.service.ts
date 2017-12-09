import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/catch'
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/do';

import { GenericService } from '../../../../shared/services/local-services/generic.service';
import { ErrorService } from '../../../../shared/services/local-services/error.service';
import { HttpService } from '../../../../shared/services/local-services/http.service';

@Injectable()
export class PostService extends GenericService {

  constructor(
    public http: HttpService,
    public errorService: ErrorService) {

    super(http, errorService);
  }




  getPosts(): Observable<any> {

    return this.http.get('blog/posts')
      .map(this.handleData)
      .catch(error => this.handleError(error));
  }




  getPost(urlID: string): Observable<any> {

    return this.http.get('blog/post/' + urlID)
      .map(this.handleData)
      .catch(error => this.handleError(error));
  }


}
