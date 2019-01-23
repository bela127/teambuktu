import {Injectable} from '@angular/core';
import {Observable} from "rxjs";
import {Order} from "../container/order";
import {catchError, tap} from "rxjs/operators";
import {BaseService} from "./base.service";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  private ordersUrl;

  constructor(private baseService: BaseService,
              private http: HttpClient) {
    this.ordersUrl = this.baseService.baseUrl + "orders";
  }

  getOrders(): Observable<Order[]> {
    return this.http.get<Order[]>(this.ordersUrl)
      .pipe(
        tap(_ => this.baseService.log('fetched orders')),
        catchError(this.baseService.handleHttpError('getOrders', []))
      );
  }

  getOrder(id: number): Observable<Order> {
    return this.http.get<Order>(this.ordersUrl + "/" + id)
      .pipe(
        tap(_ => this.baseService.log(`fetched order with id=${id}`)),
        catchError(this.baseService.handleHttpError<Order>('getOrder'))
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
