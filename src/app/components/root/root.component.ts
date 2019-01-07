import {Component, OnInit, ViewChild} from '@angular/core';
import {MatSidenav} from "@angular/material";
import {Router} from "@angular/router";
import {SessionService} from "../../services/SessionService";
import {SidenavService} from "../../services/SidenavService";
import {DataService} from "../../services/DataService";

@Component({
  selector: 'app-root',
  templateUrl: './root.component.html',
  styleUrls: ['./root.component.css']
})
export class RootComponent implements OnInit {

  @ViewChild('sidenav') public sidenav: MatSidenav;

  constructor(private router: Router, private session: SessionService, private sidenavService: SidenavService, private dataservice: DataService) {
  }

  ngOnInit(): void {
    this.sidenavService.setSidenav(this.sidenav);
    console.log("Root cons");
    this.session.setRouter(this.router);
    this.router.navigate(["/login"])
      .finally(() => console.log("Navigated to '/login', after initialization.")); // */
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
