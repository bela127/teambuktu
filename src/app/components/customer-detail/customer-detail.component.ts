import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Params} from "@angular/router";
import {Customer} from "../../container/customer";
import {CustomerService} from "../../services/customer.service";
import {Device} from "../../container/device";
import {DeviceService} from "../../services/device.service";
import {Appointment} from "../../container/appointment";
import {AppointmentService} from "../../services/appointment.service";

@Component({
  selector: 'app-customer-detail',
  templateUrl: './customer-detail.component.html',
  styleUrls: ['./customer-detail.component.css']
})
export class CustomerDetailComponent implements OnInit {

  private customer: Customer;
  private customerDevices: Device[];
  private customerAppointments: Appointment[];

  constructor(private customerService: CustomerService,
              private deviceService: DeviceService,
              private appointmentService: AppointmentService,
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

          this.appointmentService.getAppointments()
            .subscribe(appointments => {
              this.customerAppointments = appointments
                .filter(a => a.customer == this.customer.id);
            });
        });
    });
  }

  save(): void {
    this.customerService.updateCustomer(this.customer)
      .subscribe(() => console.log("updated customer in back end"))
  }
}
