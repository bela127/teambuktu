import { Component } from '@angular/core';
import {FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';
import { SessionService } from '../services/SessionService';
import {Router} from "@angular/router";
import { DataService } from '../services/DataService';

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
  selector: 'appointments-component',
  templateUrl: './appointments.html',
  styleUrls: ['./appointments.css']
})
export class AppointmentsComponent {

  constructor(private session:SessionService, private router:Router, private dataService:DataService){
    this.session.checkLogin(router);
  }

  displayedColumns: string[] = ['amount', 'name'];
  dataSourcePlanned = PART_DATA;
  dataSourceActual = PART_DATA_USED;
}
