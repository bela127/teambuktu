import {Injectable} from '@angular/core';
import {BaseService} from "./base.service";
import {Part} from "../container/part";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {catchError, tap} from "rxjs/operators";
import {Order} from "../container/order";

@Injectable({
  providedIn: 'root'
})
export class WarehouseService {

  private partsUrl: string;
  private ordersUrl: string;

  constructor(private baseService: BaseService,
              private http: HttpClient) {
    this.partsUrl = this.baseService.baseUrl + "parts";
    this.ordersUrl = this.baseService.baseUrl + "orders";
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

  getOrders(): Observable<Order[]> {
    return this.http.get<Order[]>(this.ordersUrl)
      .pipe(
        tap(_ => this.baseService.log('fetched orders')),
        catchError(this.baseService.handleHttpError('getOrders', []))
      );
  }

  updateOrder(order: Order): Observable<any> {
    return this.http.put(`${this.ordersUrl}/${order.id}`, order, this.baseService.httpOptions)
      .pipe(
        tap(_ => this.baseService.log(`updated order with id=${order.id}`)),
        catchError(this.baseService.handleHttpError<any>('updateOrder'))
      );
  }

  addOrder(order: Order): Observable<Order> {
    return this.http.post(this.ordersUrl, order, this.baseService.httpOptions)
      .pipe(
        tap((t: Order) => this.baseService.log(`added order with id=${t.id}`)),
        catchError(this.baseService.handleHttpError<Order>('addOrder'))
      );
  }
}
