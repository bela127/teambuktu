import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {TaskService} from "../../services/task.service";
import {Task} from 'src/app/container/task';
import {TaskStatus} from "../../container/task-status.enum";

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {

  private tasks: Task[];
  private displayTasks: Task[];

  constructor(private router: Router, private taskService: TaskService) {
  }

  ngOnInit() {
    this.getTasks();
  }

  getTasks(): void {
    this.taskService.getTasks()
      .subscribe(tasks => {
        this.tasks = tasks;

        this.sortTasks();
      });
  }

  sortTasks(): void {
    let amountClosed = this.tasks
      .filter(item => item.status == TaskStatus.Finished)
      .length;

    let excessClosedTasks = amountClosed > 10 ? amountClosed - 10 : 0;

    this.displayTasks = this.tasks
      .filter(task => task.status != TaskStatus.Canceled)
      .sort(this.compareTasks)
      .slice(0, this.tasks.length - excessClosedTasks);
  }

  add(title: string): void {
    title = title.trim();
    if (!title) {
      return;
    }

    let task = new Task();
    task.userId = 1; // TODO: fetch id of current user
    task.title = title;
    task.description = "";
    task.creationDate = new Date();
    task.status = TaskStatus.Open;

    this.taskService.addTask(task)
      .subscribe(task => {
        this.tasks.push(task);

        this.sortTasks();
      });
  }

  compareTasks(a: Task, b: Task) {
    if (a.status == b.status) {
      if (a.creationDate < b.creationDate) {
        return 1;
      } else if (a.creationDate > b.creationDate) {
        return -1;
      } else {
        return 0;
      }
    } else {
      if (a.status == TaskStatus.Open) {
        return -1;
      } else {
        return 1;
      }
    }
  }

}
