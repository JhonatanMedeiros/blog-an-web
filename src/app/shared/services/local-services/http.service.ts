import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';
import {
    Http,
    RequestOptionsArgs,
    Response,
    Request,
    Headers,
    XHRBackend
} from '@angular/http';


import { LoaderService } from '../../components/loader/loader.service';
import { AngularReduxRequestOptions } from '../../angular-redux-request.options';

import { environment } from '../../../../environments/environment';

@Injectable()
export class HttpService extends Http {

    constructor(
        backend: XHRBackend,
        defaultOptions: AngularReduxRequestOptions,
        private loaderService: LoaderService
    ) {
        super(backend, defaultOptions);
    }

    get(url: string, options?: RequestOptionsArgs): Observable<any> {

        this.showLoader();

        return super.get(this.getFullUrl(url), this.requestOptions(options))
            .catch(this.onCatch)
            .do((res: Response) => {
                this.onSuccess(res);
            }, (error: any) => {
                this.onError(error);
            })
            .finally(() => {
                this.onEnd();
            });

    }

    post(url: string, body?, options?: RequestOptionsArgs): Observable<any> {

      this.showLoader();

      return super.post(this.getFullUrl(url), body, this.requestOptions(options))
        .catch(this.onCatch)
        .do((res: Response) => {
          this.onSuccess(res);
        }, (error: any) => {
          this.onError(error);
        })
        .finally(() => {
          this.onEnd();
        });

    }

    put(url: string, body?, options?: RequestOptionsArgs): Observable<any> {

      this.showLoader();

      return super.put(this.getFullUrl(url), body, this.requestOptions(options))
        .catch(this.onCatch)
        .do((res: Response) => {
          this.onSuccess(res);
        }, (error: any) => {
          this.onError(error);
        })
        .finally(() => {
          this.onEnd();
        });

    }

    delete(url: string, options?: RequestOptionsArgs): Observable<any> {

      this.showLoader();

      return super.delete(this.getFullUrl(url), this.requestOptions(options))
        .catch(this.onCatch)
        .do((res: Response) => {
          this.onSuccess(res);
        }, (error: any) => {
          this.onError(error);
        })
        .finally(() => {
          this.onEnd();
        });

    }


    private requestOptions(options?: RequestOptionsArgs): RequestOptionsArgs {

        if (options == null) {
            options = new AngularReduxRequestOptions();
        }

        if (options.headers == null) {
            options.headers = new Headers();
        }

        return options;
    }

    private getFullUrl(url: string): string {
        return environment.api_url + url;
    }

    private onCatch(error: any, caught: Observable<any>): Observable<any> {
        return Observable.throw(error);
    }

    private onSuccess(res: Response): void {
        console.log('Request successful');
    }

    private onError(res: Response): void {
        console.log('Error, status code: ' + res.status);
    }

    private onEnd(): void {
        this.hideLoader();
    }

    private showLoader(): void {
        this.loaderService.show();
    }

    private hideLoader(): void {
        this.loaderService.hide();
    }
}
