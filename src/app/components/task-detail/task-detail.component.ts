import {Component, Input, OnInit} from '@angular/core';
import {Task} from "../../container/Task";
import {TaskStatus} from "../../container/TaskStatus";
import {TaskService} from "../../services/task.service";

@Component({
  selector: 'app-task-detail',
  templateUrl: './task-detail.component.html',
  styleUrls: ['./task-detail.component.css']
})
export class TaskDetailComponent implements OnInit {

  @Input() task: Task;

  // work-around for not being able to access Status enum
  TaskStatus = TaskStatus;

  constructor(private taskService: TaskService) { }

  ngOnInit() {
  }

  save(): void {
    this.taskService.updateTask(this.task)
      .subscribe(); // don't do anything but subscribe
  }

  toggle(): void {
    if (this.task.status == TaskStatus.Open) {
      this.task.status = TaskStatus.Finished;
    } else {
      this.task.status = TaskStatus.Open;
    }
  }

}
