import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { NewService } from './services/new-service';
import { AuthService } from './services/auth-service';
import { AuthInterceptor } from './services/auth-interceptor';
import { CompParentComponent } from './components/my-component';
import {HttpModule} from '@angular/http';
import { FormsModule }   from '@angular/forms';
import {CompChildComponent} from './components/my-component-child';
import {StoreModule} from '@ngrx/store';

import {counterReducer} from '../counter';
const routes: Routes = [
  {path: 'my-component', component: CompParentComponent},
  { path: 'my-componentChild', component: CompChildComponent }
/*  { path: '**', component: CompParentComponent }*/
];

@NgModule({
  declarations: [
    AppComponent, CompParentComponent, CompChildComponent
  ],
  imports: [
    HttpModule, BrowserModule, FormsModule, StoreModule.provideStore({counter: counterReducer}), RouterModule.forRoot(
      routes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
