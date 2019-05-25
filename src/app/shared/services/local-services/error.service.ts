import { Injectable } from '@angular/core';
import { Router } from '@angular/router';


@Injectable()
export class ErrorService {

  constructor(private router: Router) { }

  process(error): void {

    const responseObj = error.text();

    console.error(error);

    if (!responseObj) {
      // redirect to 500 page
      console.error('no error msg from server.');
      this.router.navigateByUrl('/error?type=500', {replaceUrl: true});
      return;
    }

    switch (error.status) {
      case 401: {
        this.router.navigateByUrl('/error?type=401', {replaceUrl: true});
        // localStorage.removeItem('token');
        // window.location.reload();
        break;
      }

      case 404: {
        // NOT FOUND
        this.router.navigateByUrl('/error?type=404', {replaceUrl: true});
        break;
      }

      case 500: {
        // SERVER ERROR
        this.router.navigateByUrl('/error?type=500', {replaceUrl: true});
        break;
      }

      default:
        // DEFAULT REDIRECT TO ERROR 500
        this.router.navigateByUrl('/error?type=' + error.status, {replaceUrl: true});
        break;
    }
  }

}
