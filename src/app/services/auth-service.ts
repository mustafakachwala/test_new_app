import { Injectable } from '@angular/core';

import { Response } from '@angular/http';
import {AuthInterceptor} from './auth-interceptor';
import { Observable } from 'rxjs/Observable';
@Injectable()
export class AuthService {
  private username: string;
  private password: any;
  constructor(private http: AuthInterceptor) {};

  authenticateUser(username, password) {
   // console.log('hi');
    if (username === '123' && password === '123') {
      return true;
    } else {
      return false;
    }
  }

/*  authenticateUser(): Observable<any> {return this.http.get(`data?limit=20&offset=40`).map((res: Response) => res.json().data)};*/
  // will hit the api on http://api.localhost.com:4000/data?limit=20&offset=40
}
