import {Component} from "@angular/core";
import {Task} from "../model/Task";
import {ActivatedRoute, Params, Router} from "@angular/router";
import {SessionService} from "../services/SessionService";
import {DataService} from "../services/DataService";


@Component({
  selector: 'task-component',
  templateUrl: './task.html',
  styleUrls: ['./task.css']
})
export class TaskComponent {

  private task: Task;

  constructor(private route: ActivatedRoute, private session: SessionService, private router: Router, private dataService: DataService) {
    this.session.checkLogin(router);
  }

  getTask(): Task {
    return this.task;
  }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      let id = params['id'];
      console.log(params);
      console.log("ID: " + id);
      this.task = this.dataService.getTask(id);
      console.log(this.task)
    });
  }
}
