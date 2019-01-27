import {Injectable} from '@angular/core';
import {BaseService} from "./base.service";
import {Observable} from "rxjs";
import {catchError, tap} from "rxjs/operators";
import {HttpClient} from "@angular/common/http";
import {User} from "../container/user";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private usersUrl: string;

  constructor(private baseService: BaseService,
              private http: HttpClient) {
    this.usersUrl = this.baseService.baseUrl + "users";
  }

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.usersUrl)
      .pipe(
        tap(_ => this.baseService.log("fetched users")),
        catchError(this.baseService.handleHttpError<User[]>('getUsers', []))
      );
  }

}
