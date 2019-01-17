import {Component, OnInit} from '@angular/core';
import {CustomerService} from "../../services/customer.service";
import {Customer} from "../../container/customer";

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit {

  private customers: Customer[];

  constructor(private customerService: CustomerService) {
  }

  ngOnInit() {
    this.getCustomers();
  }

  getCustomers(): void {
    this.customerService.getCustomers()
      .subscribe(customers => this.customers = customers);
  }

  // always adds the same test customer, change in the future
  add() {
    let customer = new Customer();
    customer.name = "TestCustomer";
    customer.email = "tc@example.org";
    customer.number = "-13";
    customer.address = "1 TestStreet 12345 World";
    customer.phone = "+00 123 45678910";
    navigator.geolocation.getCurrentPosition(
      pos => {
        customer.geolocation = [pos.coords.latitude, pos.coords.longitude];
        this.customerService.addCustomer(customer)
          .subscribe(customer => this.customers.push(customer));
      },
      _ => console.log("this didn't work"),
    );

  }

}
