import {Component, Input, OnInit} from '@angular/core';
import {Note, Status} from "../../model/Note";

@Component({
  selector: 'app-task-detail',
  templateUrl: './task-detail.component.html',
  styleUrls: ['./task-detail.component.css']
})
export class TaskDetailComponent implements OnInit {

  @Input() tasknote: Note;

  // work-around for not being able to access Status enum
  Status = Status;

  constructor() { }

  ngOnInit() {
  }

  toggle(): void {
    if (this.tasknote.status == Status.Open) {
      this.tasknote.status = Status.Finished;
    } else {
      this.tasknote.status = Status.Open;
    }
  }

}
