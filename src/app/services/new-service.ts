import { Injectable } from '@angular/core';

import { Http, Response } from '@angular/http';

import { Observable, Subject } from 'rxjs';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import { Hero } from '../hero';
import {AuthInterceptor} from "./auth-interceptor";
@Injectable()
export class NewService {
  log(msg: any)   { console.log(msg); }
  error(msg: any) { console.error(msg); }
  warn(msg: any)  { console.warn(msg); }

  private heroesUrl = 'api/heroes';  // URL to web API
  private test: Observable<any>;
  private test2: Observable<any>;
  constructor (private http: AuthInterceptor) {}
  getHeroes(): Observable<Hero[]> {
    return this.http.get(this.heroesUrl)
      .map(this.extractData);
  }

  private extractData(res: Response) {
    console.log('resr', res);
    let body = res.json();
    return body.data || { };
  }


}
