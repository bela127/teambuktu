import {Component, Input, OnInit} from '@angular/core';
import {Note} from "../../model/Note";

@Component({
  selector: 'app-task-detail',
  templateUrl: './task-detail.component.html',
  styleUrls: ['./task-detail.component.css']
})
export class TaskDetailComponent implements OnInit {

  @Input() tasknote: Note;

  constructor() { }

  ngOnInit() {
  }

  toggle(): void {
    this.tasknote.open = !this.tasknote.open;
  }

}
