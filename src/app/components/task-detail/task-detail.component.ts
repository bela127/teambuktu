import {Component, Input, OnInit} from '@angular/core';
import {Task} from "../../container/Task";
import {TaskStatus} from "../../container/TaskStatus";

@Component({
  selector: 'app-task-detail',
  templateUrl: './task-detail.component.html',
  styleUrls: ['./task-detail.component.css']
})
export class TaskDetailComponent implements OnInit {

  @Input() task: Task;

  // work-around for not being able to access Status enum
  TaskStatus = TaskStatus;

  constructor() { }

  ngOnInit() {
  }

  toggle(): void {
    if (this.task.status == TaskStatus.Open) {
      this.task.status = TaskStatus.Finished;
    } else {
      this.task.status = TaskStatus.Open;
    }
  }

}
