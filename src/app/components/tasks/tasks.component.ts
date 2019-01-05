import { Component, OnInit } from '@angular/core';
import {Note} from "../../model/Note";
import {DatePipe} from "@angular/common";
import {SessionService} from "../../services/SessionService";
import {Router} from "@angular/router";
import {DataService} from "../../services/DataService";

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {

  private displayItems: Note[] = [];

  private dateformatter = new DatePipe("en-US");

  constructor(private session: SessionService, private router: Router, private dataService: DataService) {
  }

  ngOnInit() {
    this.session.checkLogin(this.router);

    this.displayItems = this.dataService.notes
      .filter(item => item.open)
      .sort(this.compareNotes);

    console.log("Notes after filter and sort: " + this.displayItems.length)
  }

  compareNotes(a: Note, b: Note) {
    if (a.open == b.open) {
      return Math.sign(b.creationDate.valueOf() - a.creationDate.valueOf());
    } else {
      if (a.open) {
        return -1;
      } else {
        return 1;
      }
    }
  }

  //TODO Show all open and in progress objects.
  //--> Newest first: Sort by creationDate
  //Show the last 10 finished objects.

}
