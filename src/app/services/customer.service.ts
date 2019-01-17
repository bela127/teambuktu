import {Injectable} from '@angular/core';
import {BaseService} from "./base.service";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Customer} from "../container/customer";
import {catchError, tap} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  private customersUrl;

  constructor(private baseService: BaseService,
              private http: HttpClient) {
    this.customersUrl = this.baseService.baseUrl + 'customers';
  }

  getCustomers(): Observable<Customer[]> {
    return this.http.get<Customer[]>(this.customersUrl)
      .pipe(
        tap(_ => this.baseService.log('fetched customers')),
        catchError(this.baseService.handleHttpError('getCustomers', []))
      );
  }

  getCustomer(id: number): Observable<Customer> {
    return this.http.get<Customer>(this.customersUrl + "/" + id)
      .pipe(
        tap(_ => this.baseService.log(`fetched customer with id=${id}`)),
        catchError(this.baseService.handleHttpError<Customer>('getCustomer'))
      );
  }

  addCustomer(customer: Customer): Observable<Customer> {
    return this.http.post(this.customersUrl, customer, this.baseService.httpOptions)
      .pipe(
        tap((c: Customer) => this.baseService.log(`added customer with id=${c.id}`)),
        catchError(this.baseService.handleHttpError<Customer>('addCustomer'))
      );
  }
}
