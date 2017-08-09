import { Component, OnInit } from '@angular/core';

import {NewService} from './services/new-service';
import {AuthService} from './services/auth-service';
import {AuthInterceptor} from './services/auth-interceptor';
import {ConnectionBackend, HttpModule} from "@angular/http";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [NewService, AuthService, AuthInterceptor],
})
export class AppComponent implements OnInit {
  title = 'app';
  ngOnInit() {}
}
