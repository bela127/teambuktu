import {Component} from '@angular/core';
import {SessionService} from '../services/SessionService';
import {Router} from '@angular/router';
import {DataService} from '../services/DataService';

@Component({
  selector: 'customerlist-component',
  templateUrl: './customerlist.html',
})
export class CustomerlistComponent {

  constructor(private session: SessionService, private router: Router, private dataService: DataService) {
    this.session.checkLogin(router);
  }

}
