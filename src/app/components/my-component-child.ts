import { Component, OnInit} from '@angular/core';
import {NewService} from '../services/new-service';
import {AuthService} from '../services/auth-service';
import {UserDataVm} from './user-data-service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import 'rxjs/add/operator/switchMap';
import {ObservableService} from '../services/observable-service';
import { Store } from '@ngrx/store'
import {Observable} from "rxjs/Observable";
import {LEFT_MOVER, RIGHT_MOVER, RESET} from "../../counter";
interface CounterModel {
  counter: number;
}

interface CarouselData {
  id: number;
  paxName: string;
  paxAge: number;
}

interface PaxList extends Array<CarouselData> {}


@Component({
  selector: 'comp-child',
  templateUrl: './my-component-child.html',
  styleUrls: ['./my-component-child.css'],
  providers: [],

})

export class CompChildComponent {
  data: Observable<number>;
  paxData: PaxList;
  updatedPaxList: PaxList;
  currentIndex = 0;
  constructor(private store: Store<CounterModel>
  ) {
    this.paxData = [{id: 1, paxName:'MAK1', paxAge:23},{id: 2, paxName:'MAK2', paxAge:23},{id: 3, paxName:'MAK3', paxAge:23},{id: 4, paxName:'MAK4', paxAge:23},{id: 5, paxName:'MAK5', paxAge:23}];
    this.data = store.select('counter');

    this.data.subscribe(a => this.setPax(a));



  }
  setPax(id: number) {
    let test = Object.assign([], this.paxData);
    test = test.slice(id, id + 3);

    this.updatedPaxList = test;
  }
  rightMover(id: number) {
    this.store.dispatch({type: 'RIGHT_MOVER', payload: {id: this.currentIndex}});
  }
  leftMover(id: number) {
      this.store.dispatch({type: 'LEFT_MOVER', payload: {id: this.currentIndex}});

  }

  resetAll() {
    this.store.dispatch({type: 'RESET'});
  }

}
