import {Injectable} from '@angular/core';
import {BaseService} from "./base.service";
import {Observable} from "rxjs";
import {catchError, tap} from "rxjs/operators";
import {Appointment} from "../container/appointment";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class AppointmentService {

  private appointmentsUrl;

  constructor(private baseService: BaseService,
              private http: HttpClient) {
    this.appointmentsUrl = this.baseService.baseUrl + "appointments";
  }

  getAppointments(): Observable<Appointment[]> {
    return this.http.get<Appointment[]>(this.appointmentsUrl)
      .pipe(
        tap(_ => this.baseService.log('fetched appointments')),
        catchError(this.baseService.handleHttpError('getAppointments', []))
      );
  }

  getAppointment(id: number): Observable<Appointment> {
    return this.http.get<Appointment>(this.appointmentsUrl + "/" + id)
      .pipe(
        tap(_ => this.baseService.log(`fetched appointment with id=${id}`)),
        catchError(this.baseService.handleHttpError<Appointment>('getAppointment'))
      );
  }

  addAppointment(appointment: Appointment): Observable<Appointment> {
    return this.http.post(this.appointmentsUrl, appointment, this.baseService.httpOptions)
      .pipe(
        tap((c: Appointment) => this.baseService.log(`added appointment with id=${c.id}`)),
        catchError(this.baseService.handleHttpError<Appointment>('addAppointment'))
      );
  }

  updateAppointment(appointment: Appointment): Observable<any> {
    return this.http.put(this.appointmentsUrl + '/' + appointment.id, appointment, this.baseService.httpOptions)
      .pipe(
        tap(_ => this.baseService.log(`updated appointment with id=${appointment.id}`)),
        catchError(this.baseService.handleHttpError<Appointment>('updateAppointment'))
      );
  }
}
