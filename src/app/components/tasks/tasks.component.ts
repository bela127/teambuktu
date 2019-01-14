import {Component, OnInit} from '@angular/core';
import {Note, Status} from "../../model/Note";
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

  constructor(private session: SessionService, private router: Router, private dataService: DataService) {
  }

  ngOnInit() {
    let allNotes = this.dataService.notes;
    let amountClosed = allNotes
      .filter(item => item.status == Status.Finished)
      .length;

    let excessClosedTasks = amountClosed > 10 ? amountClosed - 10 : 0;

    console.log("Amount of closed Notes: " + amountClosed);

    this.displayItems = this.dataService.notes
      .filter(task => task.status != Status.Canceled);

    this.displayItems = this.displayItems
      .sort(this.compareNotes)
      .slice(0,this.dataService.notes.length - excessClosedTasks);

    console.log("Notes after filter and sort: " + this.displayItems.length)
  }

  compareNotes(a: Note, b: Note) {
    if (a.status == b.status) {
      return Math.sign(b.creationDate.valueOf() - a.creationDate.valueOf());
    } else {
      if (a.status == Status.Open) {
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
