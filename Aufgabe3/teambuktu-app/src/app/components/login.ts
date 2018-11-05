import { Component } from '@angular/core';
import {FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';
import { SessionService } from '../services/SessionService';
import {Router} from "@angular/router";
import { SidenavService } from '../services/SidenavService';
import {MatSnackBar, MatSnackBarHorizontalPosition} from '@angular/material';

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
  constructor(private router: Router, 
    private session: SessionService, 
    private sideNav:SidenavService, 
    public snackBar: MatSnackBar){

  }

   emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);

  matcher = new MyErrorStateMatcher(); 
  horizontalPosition: MatSnackBarHorizontalPosition = 'center';

  login(email: String, password: String){
    console.log(email + " " + password);
    if(this.session.login(email, password)){
      this.snackBar.open("Login successful!", "", {
        duration: 2000,
        panelClass: ['snack-bar-success'],
        horizontalPosition: this.horizontalPosition
      });
      console.log("Login successful, navigating...")
      this.sideNav.open()
      this.router.navigate(["/appointments"])      
    }
    else {
      this.snackBar.open("Login failed...", "", {
        panelClass: ['snack-bar-warning'],
        duration: 2000,
        horizontalPosition: this.horizontalPosition
      });
    }
  }
}