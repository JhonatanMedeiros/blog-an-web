import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Rx';
import { catchError } from 'rxjs/operators';

import { ErrorService } from '../../../../shared/services/local-services/error.service';
import { GenericService } from '../../../../shared/services/local-services/generic.service';

@Injectable()
export class UserProfileService extends GenericService {

  authToken;
  userProfile;

  constructor(
    private router: Router,
    public http: HttpClient,
    public errorService: ErrorService) {

    super(http, errorService);

    this.authToken = window.localStorage.getItem('token');
    this.userProfile = JSON.parse(window.localStorage.getItem('user'));
  }


  myProfile(): Observable<any> {
    const headers = new HttpHeaders();
    headers.append('Authorization', 'Bearer ' +  this.authToken);
    const options = { headers: headers };

    return this.http.get('profile/me/' + this.userProfile._id, options)
      .pipe(catchError(this.handleError));
  }


}
