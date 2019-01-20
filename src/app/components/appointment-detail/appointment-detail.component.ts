import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {Appointment} from "../../container/appointment";
import {Customer} from "../../container/customer";
import {AppointmentService} from "../../services/appointment.service";
import {CustomerService} from "../../services/customer.service";
import {Device} from "../../container/device";
import {DeviceService} from "../../services/device.service";

@Component({
  selector: 'app-appointment-detail',
  templateUrl: './appointment-detail.component.html',
  styleUrls: ['./appointment-detail.component.css']
})
export class AppointmentDetailComponent implements OnInit {

  private appointment: Appointment;
  private allCustomers: Customer[];
  private allDevices: Device[];

  private displayedColumns: string[];
  private dataSourcePlanned: Part[];

  constructor(private appointmentService: AppointmentService,
              private customerService: CustomerService,
              private deviceService: DeviceService,
              private route: ActivatedRoute,
              private router: Router) {
  }

  ngOnInit() {
    let id = +this.route.snapshot.paramMap.get("id");
    this.appointmentService.getAppointment(id)
      .subscribe(appointment => this.appointment = appointment);

    this.customerService.getCustomers()
      .subscribe(customers => this.allCustomers = customers);

    this.deviceService.getDevices()
      .subscribe(devices => this.allDevices = devices);

    this.displayedColumns = ['amount', 'name'];
    this.dataSourcePlanned = PART_DATA;
  }

  save(): void {
    this.appointmentService.updateAppointment(this.appointment)
      .subscribe();
  }

  gotoCustomer(): void {
    if (this.appointment.customer) {
      this.router.navigate(['/customer/' + this.appointment.customer])
        .catch(reason => console.log("couldn't navigate to customer with id=" + this.appointment.customer));
    }
  }

  gotoDevice(): void {
    if (this.appointment.device) {
      this.router.navigate(['/device/' + this.appointment.device])
        .catch(reason => console.log("couldn't navigate to device with id=" + this.appointment.device + ": " + reason));
    }
  }

}

export interface Part {
  name: string;
  amount: number;
}

const PART_DATA: Part[] = [
  {name: 'Hammer', amount: 1},
  {name: 'Glue', amount: 1},
  {name: 'Plank', amount: 3},
  {name: 'Nail', amount: 4},
];

