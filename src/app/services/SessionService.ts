import {Router} from "@angular/router";
import {environment} from "../../environments/environment";
import {Injectable} from "@angular/core";
import {User} from "../container/user";

@Injectable({
  providedIn: 'root'
})
export class SessionService {
  private loggedIn: boolean = false;
  private loggedInUser: User;

  private router: Router;

  constructor() {
  }

  public isLoggedIn(): boolean {
    if (environment.production) {
      return this.loggedIn;
    } else {
      return true;
    }
  }

  public login(user: User) {
    this.loggedIn = true;
    this.loggedInUser = user;
  }

  public logout() {
    this.loggedIn = false;
    this.loggedInUser = undefined;
  }

  public getLoggedInUser(): User {
    return this.loggedInUser;
  }

  setRouter(router: Router) {
    this.router = router;
  }

  checkLogin(router: Router) {
    console.log("Checking login")
    console.log(this.isLoggedIn())

    if (!this.isLoggedIn() && this.router.url != "/login") {
      console.log("redirecting to login")
      this.router.navigate(['/login']);
    }
  }
}
