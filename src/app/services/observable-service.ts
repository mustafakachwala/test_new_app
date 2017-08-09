import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class ObservableService {
  private test: Observable<any>;
  private test2: Observable<any>;
  public heros = [{data: {id: 101,
    name: 'mustafa',
    tid: '2323'}}, {data2: {id: 101,
    name: 'mustafa',
    tid: '2323'}}];

  createObservableTest() {
    this.test = Observable.create(observer => {
      observer.next(this.heros[0]);
      observer.next(this.heros[1]);
      observer.complete();
    });
    this.test2 = Observable.of(this.heros);
  }
  getListOfHeros() {
    /*    this.test.subscribe(data => (console.log('in console' , data)),
     e => console.log(e),
     () => console.log('complete'));*/
    this.test.map(function(t){
      t['hi'] = 'mapped using map';
      return t;
    }).subscribe(a => console.log(a));

    // this.test2.subscribe(l => console.log(l));
  }
}
