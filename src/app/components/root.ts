import {Component, ViewChild} from '@angular/core';
import {Router} from "@angular/router";
import {SessionService} from '../services/SessionService';
import {SidenavService} from '../services/SidenavService';
import {MatSidenav} from '@angular/material';
import {DataService} from "../services/DataService";

@Component({
  selector: 'root-component',
  templateUrl: './root.html',
  styleUrls: ['./root.css']
})
export class RootComponent {

  @ViewChild('sidenav') public sidenav: MatSidenav;

  constructor(private router: Router, private session: SessionService, private sidenavService: SidenavService, private dataservice: DataService) {
    console.log("Root cons");
    session.setRouter(router);
    router.navigate(["/login"])
      .finally(() => console.log("Navigated to '/login', after initialization."));
  }

  ngOnInit(): void {
    this.sidenavService.setSidenav(this.sidenav);
  }

  public logout(): void {
    this.session.logout();
    this.dataservice.userData = null;
    this.sidenav.close()
      .finally(() => console.log("Sidenav finally closed."));
    this.router.navigate(["/login"])
      .finally(() => console.log("Navigated to '/login', after logout."));
  }
}
