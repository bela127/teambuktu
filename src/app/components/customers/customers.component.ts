import {Component, OnInit} from '@angular/core';
import {CustomerService} from "../../services/customer.service";
import {Customer} from "../../container/customer";
import {Router} from "@angular/router";

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit {

  private customers: Customer[];

  constructor(private customerService: CustomerService,
              private router: Router) {
  }

  ngOnInit() {
    this.getCustomers();
  }

  getCustomers(): void {
    this.customerService.getCustomers()
      .subscribe(customers => this.customers = customers);
  }

  add(): void {
    let customer = new Customer();
    customer.name = "New Customer";
    customer.email = "";
    customer.number = "-1";
    customer.address = "";
    customer.phone = "";
    navigator.geolocation.getCurrentPosition(
      pos => {
        customer.geolocation = [pos.coords.latitude, pos.coords.longitude];
        this.customerService.addCustomer(customer)
          .subscribe(customer => {
            this.customers.push(customer);
            this.router.navigate(['/customer/' + customer.id])
              .catch(e => console.log("Navigation didn't work:" + e));
          });
      },
      _ => console.log("getCurrentPosition didn't work"),
    );
  }

}
