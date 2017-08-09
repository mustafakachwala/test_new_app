import { Component, OnInit} from '@angular/core';
import {NewService} from '../services/new-service';
import {AuthService} from '../services/auth-service';
import {UserDataVm} from './user-data-service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import 'rxjs/add/operator/switchMap';
import {ObservableService} from '../services/observable-service';

@Component({
  selector: 'comp-parent',
  templateUrl: './my-component.html',
  styleUrls: ['./my-component.css'],
  providers: [NewService, UserDataVm, AuthService, ObservableService]
})

export class CompParentComponent implements OnInit {
  heroes = [];
  fromHomePage;
  model = new UserDataVm();

  constructor(
    private logger: NewService,
    private obsLogger: ObservableService,
    private route: ActivatedRoute,
    private router: Router,
    private authService: AuthService) {
    console.log(logger.log(2));
  }

  saveDetails(event: Event) {
    event.preventDefault();
    if (this.authService.authenticateUser(this.model.username, this.model.password)) {
      alert('You have been authenticated');
      this.router.navigate(['/my-componentChild']);
    } else {
      alert('Please enter correct credentials');
    }
  } ;
  ngOnInit() {console.log('hi');
    this.route.paramMap.subscribe((params: ParamMap) => (this.fromHomePage = params));
    this.getHeroes();
              this.logger.log('Hello');
   /* this.logger1.log('Hello1');*/ }

  getHeroes() {
    this.obsLogger.createObservableTest();
    this.obsLogger.getListOfHeros();
/*    this.logger.getHeroes()
      .subscribe(
        heroes => this.heroes = heroes);*/
  }
}
