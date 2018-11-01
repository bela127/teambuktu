import { Component } from '@angular/core';
import {FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';
import { Technician } from '../globals/Technician';
import {Router} from "@angular/router";
import { SidenavService } from '../globals/SidenavService';

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'login-component',
  templateUrl: './login.html',
  styleUrls: ['./login.css']
})
export class LoginComponent {
  constructor(private router: Router, private session: Technician, private sideNav:SidenavService){
    
  }

   emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);

  matcher = new MyErrorStateMatcher(); 

  login(email: String, password: String){
    console.log(email + " " + password);
    if(this.session.login(email, password)){
      console.log("Login succesful, navigating...")
      this.sideNav.open()
      this.router.navigate(["/appointments"])      
    }
  }
}