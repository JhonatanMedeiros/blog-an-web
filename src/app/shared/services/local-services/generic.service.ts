import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';

import { Observable } from 'rxjs/Rx';
import { ErrorService } from './error.service';

@Injectable()
export class GenericService {

  constructor(
    public http: Http,
    public errorService: ErrorService
  ) { }

  protected handleData(res: Response) {

    let body = res.json();
    return body;
  }

  protected handleError (error: Response) {
    // send to error service
    this.errorService.process(error);

    // still send simple error to component, but can ignore it for now
    let errMsg = (error) ? error :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';

    let responseObj = error.text();

    if (responseObj) {
      return Observable.throw(JSON.parse(responseObj));
    } else {
      return Observable.throw([errMsg]);
    }
  }

}
