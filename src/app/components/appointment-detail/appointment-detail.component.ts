import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Appointment} from "../../container/Appointment";
import {Customer} from "../../container/Customer";
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
              private route: ActivatedRoute) {
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

