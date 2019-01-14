import { Component, OnInit } from '@angular/core';
import {DataService} from "../../services/DataService";
import {ActivatedRoute} from "@angular/router";
import {Appointment} from "../../model/Appointment";
import {Customer} from "../../model/Customer";

@Component({
  selector: 'app-appointment-detail',
  templateUrl: './appointment-detail.component.html',
  styleUrls: ['./appointment-detail.component.css']
})
export class AppointmentDetailComponent implements OnInit {

  appointment: Appointment;
  customer: Customer;

  displayedColumns: string[];
  dataSourcePlanned: Part[];

  constructor(private dataService: DataService, private route: ActivatedRoute) { }

  ngOnInit() {
    let id = this.route.snapshot.paramMap.get("id");
    this.appointment = this.dataService.appointment(id);
    this.customer = this.dataService.customers
      .find(c => c.devices
        .find(d => d.id == this.appointment.device.id) != undefined);
    // appointment detail cannot load unless this.customer ist defined!

    this.displayedColumns = ['amount', 'name'];
    this.dataSourcePlanned = PART_DATA;
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

