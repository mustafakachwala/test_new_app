
import {
  Http,
  RequestOptions,
  RequestOptionsArgs,
  Response,
} from '@angular/http';

import {XHRBackend} from '@angular/http'
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';

import { Injectable } from '@angular/core';

@Injectable()
export class AuthInterceptor extends Http {

  constructor(backend: XHRBackend,
              defaultOptions: RequestOptions, ) {
    super(backend, defaultOptions);
  }

  get(url: string, options?: RequestOptionsArgs): Observable<any> {
    this.beforeRequest();
    return super.get(this.getFullUrl(url), this.requestOptions(options))
      .catch(this.onError)
      .do((res: Response) => {
        this.onSuccess(res);
      }, (error: any) => {
        this.onError(error);
      })
      .finally(() => {
        console.log('Finally we Won the war :-)')
      });
  }

  private beforeRequest(): void {
    console.log('before');
  }

  private onSuccess(input) {
    console.log('on success');
    return input;
  }

  private onError(err) {
    console.log(err);
    return err;
  }

  private requestOptions(options) {
    console.log('add jwt token here');
    return options;
  }

  private getFullUrl (url) {
    console.log('url');
    return 'url';
  }
}
