import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {SessionService} from "../../services/SessionService";
import {DataBaseService} from "../../services/DataBaseService";
import {DataService} from "../../services/DataService";
import {SidenavService} from "../../services/SidenavService";
import {ErrorStateMatcher, MatSnackBar, MatSnackBarHorizontalPosition} from "@angular/material";
import {FormControl, FormGroupDirective, NgForm, Validators} from "@angular/forms";
import {environment} from "../../../environments/environment";

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router,
              private session: SessionService,
              private dataBase: DataBaseService,
              private data: DataService,
              private sideNav: SidenavService,
              public snackBar: MatSnackBar) {
  }

  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);

  matcher = new MyErrorStateMatcher();
  horizontalPosition: MatSnackBarHorizontalPosition = 'center';

  login(email: string, password: string) {
    console.log(email + " " + password);
    if (this.dataBase.validateUser(email, password)) {
      this.data.userData = this.dataBase.loadUserData(email, password);
    } else if (environment.production == false) {
      this.data.userData = this.dataBase.loadUserData("a", "a");
    } else {
      this.snackBar.open("Login failed.", "", {
        panelClass: ['snack-bar-warning'],
        duration: 2000,
        horizontalPosition: this.horizontalPosition
      });

      return;
    }

    this.session.login();
    this.snackBar.open("Login successful!", "", {
      duration: 2000,
      panelClass: ['snack-bar-success'],
      horizontalPosition: this.horizontalPosition
    });
    console.log("Login successful, navigating...");
    this.sideNav.open()
      .finally(() => console.log("Sidenav finally opened."));
    this.router.navigate(["/appointments"])
      .finally(() => console.log("Finally navigated to '/appointments', after login."));
  }

  ngOnInit(): void {
  }

}
