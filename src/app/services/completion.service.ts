import {Injectable} from '@angular/core';
import {BaseService} from "./base.service";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Completion} from "../container/completion";
import {catchError, tap} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class CompletionService {

  private completionsUrl;

  constructor(private baseService: BaseService,
              private http: HttpClient) {
    this.completionsUrl = this.baseService.baseUrl + "completions";
  }

  getCompletions(): Observable<Completion[]> {
    return this.http.get<Completion[]>(this.completionsUrl)
      .pipe(
        tap(_ => this.baseService.log('fetched completions')),
        catchError(this.baseService.handleHttpError('getCompletions', []))
      );
  }

  getCompletion(id: number): Observable<Completion> {
    return this.http.get<Completion>(this.completionsUrl + "/" + id)
      .pipe(
        tap(_ => this.baseService.log(`fetched completion with id=${id}`)),
        catchError(this.baseService.handleHttpError<Completion>('getCompletion'))
      );
  }

  addCompletion(completion: Completion): Observable<Completion> {
    return this.http.post(this.completionsUrl, completion, this.baseService.httpOptions)
      .pipe(
        tap((c: Completion) => this.baseService.log(`added completion with id=${c.id}`)),
        catchError(this.baseService.handleHttpError<Completion>('addCompletion'))
      );
  }

  updateCompletion(completion: Completion): Observable<any> {
    return this.http.put(this.completionsUrl + '/' + completion.id, completion, this.baseService.httpOptions)
      .pipe(
        tap(_ => this.baseService.log(`updated completion with id=${completion.id}`)),
        catchError(this.baseService.handleHttpError<Completion>('updateCompletion'))
      );
  }
}
