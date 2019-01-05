import { Component, OnInit } from '@angular/core';
import {SessionService} from "../../services/SessionService";
import {Router} from "@angular/router";
import {DataService} from "../../services/DataService";

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit {

  constructor(private session: SessionService,
              private router: Router,
              private dataService: DataService) {
  }

  ngOnInit() {
    this.session.checkLogin(this.router); // TODO: why
  }

}
