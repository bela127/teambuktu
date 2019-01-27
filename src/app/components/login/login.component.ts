import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {SessionService} from "../../services/session.service";
import {SidenavService} from "../../services/sidenav.service";
import {ErrorStateMatcher, MatSnackBar, MatSnackBarHorizontalPosition} from "@angular/material";
import {FormControl, FormGroupDirective, NgForm, Validators} from "@angular/forms";
import {UserService} from "../../services/user.service";
import {User} from "../../container/user";

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

  private users: User[];

  constructor(private router: Router,
              private session: SessionService,
              private userService: UserService,
              private sideNav: SidenavService,
              public snackBar: MatSnackBar) {
  }

  ngOnInit(): void {
    this.userService.getUsers()
      .subscribe(users => this.users = users);
  }

  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);

  matcher = new MyErrorStateMatcher();
  horizontalPosition: MatSnackBarHorizontalPosition = 'center';

  login(email: string, password: string) {
    console.log(email + " " + password);

    let validatedUser = this.validateUser(email, password);

    if (validatedUser == undefined) {

      this.snackBar.open("Login failed.", "", {
        panelClass: ['snack-bar-warning'],
        duration: 2000,
        horizontalPosition: this.horizontalPosition
      });

    } else {

      this.session.login(validatedUser);
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
  }

  private validateUser(email: string, password: string): User {
    return this.users.find(u => u.email == email && u.password == password);
  }

}
