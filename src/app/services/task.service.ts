import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Task} from "../container/Task";
import {catchError, tap} from "rxjs/operators";
import {BaseService} from "./base.service";

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  private tasksUrl;

  constructor(private http: HttpClient, private baseService: BaseService) {
    this.tasksUrl = this.baseService.baseUrl + "tasks";
  }

  getTasks(): Observable<Task[]> {
    return this.http.get<Task[]>(this.tasksUrl)
      .pipe(
        tap(_ => this.baseService.log('fetched tasks')),
        catchError(this.baseService.handleHttpError('getTasks', []))
      );
  }

}
