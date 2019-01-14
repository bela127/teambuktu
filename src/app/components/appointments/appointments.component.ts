import {Component, OnInit} from '@angular/core';
import {SessionService} from "../../services/SessionService";
import {Router} from "@angular/router";
import {DataService} from "../../services/DataService";

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

const PART_DATA_USED: Part[] = [
  {name: 'Hammer', amount: 1},
  {name: 'Glue', amount: 1},
  {name: 'Plank', amount: 4},
  {name: 'Nail', amount: 5},
  {name: 'Tape', amount: 1},
];

@Component({
  selector: 'app-appointments',
  templateUrl: './appointments.component.html',
  styleUrls: ['./appointments.component.css']
})
export class AppointmentsComponent implements OnInit {

  displayAppointments = [];
  displayCustomers = [];
  displayUser;

  constructor(private session: SessionService, private router: Router, private dataService: DataService) {
  }

  displayedColumns: string[] = ['amount', 'name'];
  dataSourcePlanned = PART_DATA;
  dataSourceActual = PART_DATA_USED;

  ngOnInit() {
    this.session.checkLogin(this.router);
    this.displayUser = this.dataService.user;
    this.displayAppointments = this.dataService.appointments;
    this.displayCustomers = this.dataService.customers;
  }

}
