import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Params} from "@angular/router";
import {Customer} from "../../container/customer";
import {CustomerService} from "../../services/customer.service";
import {Device} from "../../container/device";
import {DeviceService} from "../../services/device.service";
import {Completion} from "../../container/completion";
import {CompletionService} from "../../services/completion.service";

@Component({
  selector: 'app-customer-detail',
  templateUrl: './customer-detail.component.html',
  styleUrls: ['./customer-detail.component.css']
})
export class CustomerDetailComponent implements OnInit {

  private customer: Customer;
  private customerDevices: Device[];
  private customerCompletions: Completion[];

  constructor(private customerService: CustomerService,
              private deviceService: DeviceService,
              private completionService: CompletionService,
              private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      let id = params['id'];
      this.customerService.getCustomer(id)
        .subscribe(customer => {
          this.customer = customer;

          this.deviceService.getDevices()
            .subscribe(devices => {
              this.customerDevices = devices
                .filter(d => d.customer == this.customer.id);
            });

          this.completionService.getCompletions()
            .subscribe(completions => {
              this.customerCompletions = completions
                .filter(c => c.customer == this.customer.id);
            });
        });
    });
  }

  save(): void {
    this.customerService.updateCustomer(this.customer)
      .subscribe(() => console.log("updated customer in back end"))
  }
}
