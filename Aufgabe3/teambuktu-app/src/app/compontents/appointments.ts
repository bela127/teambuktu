import { Component } from '@angular/core';
import {FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';
import { Technician } from '../globals/Technician';
import {Router} from "@angular/router";

@Component({
  selector: 'appointments-component',
  templateUrl: './appointments.html',
  styleUrls: ['./appointments.css']
})
export class AppointmentsComponent {
   constructor(private session:Technician, private router:Router){
    this.session.checkLogin(router);
  }
}