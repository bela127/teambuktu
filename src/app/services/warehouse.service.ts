import {Injectable} from '@angular/core';
import {BaseService} from "./base.service";
import {Part} from "../container/part";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {catchError, tap} from "rxjs/operators";
import {Item} from "../container/item";

@Injectable({
  providedIn: 'root'
})
export class WarehouseService {

  private partsUrl: string;
  private stockUrl: string;

  constructor(private baseService: BaseService,
              private http: HttpClient) {
    this.partsUrl = this.baseService.baseUrl + "parts";
    this.stockUrl = this.baseService.baseUrl + "stock";
  }

  getParts(): Observable<Part[]> {
    return this.http.get<Part[]>(this.partsUrl)
      .pipe(
        tap(_ => this.baseService.log("fetched parts")),
        catchError(this.baseService.handleHttpError<Part[]>('getParts', []))
      );
  }

  addPart(part: Part): Observable<Part> {
    return this.http.post(this.partsUrl, part, this.baseService.httpOptions)
      .pipe(
        tap((p: Part) => this.baseService.log('added part with id=' + p.id)),
        catchError(this.baseService.handleHttpError<Part>('addPart'))
      );
  }

  getStock(): Observable<Item[]> {
    return this.http.get<Item[]>(this.stockUrl)
      .pipe(
        tap(_ => this.baseService.log('fetched stock')),
        catchError(this.baseService.handleHttpError<Item[]>('getStock', []))
      );
  }
}
