import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Params} from "@angular/router";
import {Customer} from "../../container/customer";
import {CustomerService} from "../../services/customer.service";

@Component({
  selector: 'app-customer-detail',
  templateUrl: './customer-detail.component.html',
  styleUrls: ['./customer-detail.component.css']
})
export class CustomerDetailComponent implements OnInit {

  private customer: Customer;

  constructor(private customerService: CustomerService, private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      let id = params['id'];
      this.customerService.getCustomer(id)
        .subscribe(customer => this.customer = customer);
    });
  }

}
