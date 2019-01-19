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

  tasks: Task[];

  constructor(private router: Router, private taskService: TaskService) {
  }

  ngOnInit() {
    this.taskService.getTasks()
      .subscribe(tasks => {
        this.tasks = tasks;

        // space for further statements
        // ...

      });

    /*
    let amountClosed = this.tasks
      .filter(item => item.status == TaskStatus.Finished)
      .length;

    let excessClosedTasks = amountClosed > 10 ? amountClosed - 10 : 0;

    console.log("Amount of closed Notes: " + amountClosed);

    this.displayItems = this.taskService.notes
      .filter(task => task.status != TaskStatus.Canceled);

    this.displayItems = this.displayItems
      .sort(this.compareTasks)
      .slice(0,this.taskService.notes.length - excessClosedTasks);

    console.log("Notes after filter and sort: " + this.displayItems.length)
    */

  }

  getTasks(): void {
    this.taskService.getTasks()
      .subscribe(tasks => this.tasks = tasks);
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
      .subscribe(task => this.tasks.push(task));
  }

  compareTasks(a: Task, b: Task) {
    if (a.status == b.status) {
      return Math.sign(b.creationDate.valueOf() - a.creationDate.valueOf());
    } else {
      if (a.status == TaskStatus.Open) {
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
