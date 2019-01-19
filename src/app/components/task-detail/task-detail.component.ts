import {Component, Input, OnInit} from '@angular/core';
import {Task} from "../../container/task";
import {TaskStatus} from "../../container/task-status.enum";
import {TaskService} from "../../services/task.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-task-detail',
  templateUrl: './task-detail.component.html',
  styleUrls: ['./task-detail.component.css']
})
export class TaskDetailComponent implements OnInit {

  @Input() task: Task;

  // work-around for not being able to access Status enum
  TaskStatus = TaskStatus;

  constructor(private taskService: TaskService,
              private router: Router) { }

  ngOnInit() {
  }

  save(): void {
    this.taskService.updateTask(this.task)
      .subscribe(); // don't do anything but subscribe
  }

  delete(): void {
    this.taskService.deleteTask(this.task)
      .subscribe(() => this.task = undefined);
  }

  toggle(): void {
    if (this.task.status == TaskStatus.Open) {
      this.task.status = TaskStatus.Finished;
    } else {
      this.task.status = TaskStatus.Open;
    }
  }

}
