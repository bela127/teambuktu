import { Component } from '@angular/core';
import {FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';
import { Technician } from '../globals/Technician';
import {Router} from "@angular/router";

@Component({
  selector: 'tasks-component',
  templateUrl: './tasks.html',
  styleUrls: ['./tasks.css']
})
export class TasksComponent {
  constructor(private session:Technician, private router:Router){
    this.session.checkLogin(router);
  }
}