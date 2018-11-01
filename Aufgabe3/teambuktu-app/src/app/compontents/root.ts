import { Component } from '@angular/core';
import {FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';
import {Router} from "@angular/router";
import { Technician } from '../Technician';

@Component({
  selector: 'root-component',
  templateUrl: './root.html',
  styleUrls: ['./root.css']
})
export class RootComponent {
  constructor(private router: Router, private session: Technician) {
    console.log("Root cons")
    session.setRouter(router)
    router.navigate(["/login"])
  } 
}