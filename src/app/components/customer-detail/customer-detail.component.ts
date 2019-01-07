import { Component, OnInit } from '@angular/core';
import {Customer} from "../../model/Customer";
import {ActivatedRoute, Params, Router} from "@angular/router";
import {SessionService} from "../../services/SessionService";
import {DataService} from "../../services/DataService";

@Component({
  selector: 'app-customer-detail',
  templateUrl: './customer-detail.component.html',
  styleUrls: ['./customer-detail.component.css']
})
export class CustomerDetailComponent implements OnInit {

  private _customer: Customer;

  constructor(private route: ActivatedRoute, private session: SessionService, private router: Router, private dataService: DataService) {
    this.session.checkLogin(router);
  }

  get customer(): Customer {
    return this._customer;
  }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      let id = params['id'];
      console.log(params);
      console.log("ID: " + id);
      this._customer = this.dataService.customer(id);
      console.log(this._customer)
    });
  }

}
