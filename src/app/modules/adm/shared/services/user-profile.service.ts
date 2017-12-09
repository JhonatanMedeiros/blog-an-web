import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/catch'


import { ErrorService } from '../../../../shared/services/local-services/error.service';
import { GenericService } from '../../../../shared/services/local-services/generic.service';
import { HttpService } from '../../../../shared/services/local-services/http.service';

@Injectable()
export class UserProfileService extends GenericService {

  authToken;
  userProfile;

  constructor(
    private router: Router,
    public http: HttpService,
    public errorService: ErrorService) {

    super(http, errorService);

    this.authToken = window.localStorage.getItem('token');
    this.userProfile = JSON.parse(window.localStorage.getItem('user'));
  }

  private _serverError(err: any) {
    if (err instanceof Response) {
      return Observable.throw(err.json() || 'backend server error');
    }
    return Observable.throw(err || 'backend server error');
  }


  myProfile(): Observable<any> {

    let headers = new Headers();
    headers.append('Authorization', 'Bearer ' +  this.authToken);
    let options = new RequestOptions({ headers: headers });


    return this.http.get('profile/me/' + this.userProfile._id,  options)
      .map(res => res.json())
      .catch(this._serverError);

  }


}
