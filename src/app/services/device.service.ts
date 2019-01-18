import {Injectable} from '@angular/core';
import {BaseService} from "./base.service";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {catchError, tap} from "rxjs/operators";
import {Device} from "../container/device";

@Injectable({
  providedIn: 'root'
})
export class DeviceService {

  private devicesUrl;

  constructor(private baseService: BaseService,
              private http: HttpClient) {
    this.devicesUrl = this.baseService.baseUrl + "devices";
  }

  getDevices(): Observable<Device[]> {
    return this.http.get<Device[]>(this.devicesUrl)
      .pipe(
        tap(_ => this.baseService.log('fetched devices')),
        catchError(this.baseService.handleHttpError('getDevices', []))
      );
  }

  getDevice(id: number): Observable<Device> {
    return this.http.get<Device>(this.devicesUrl + "/" + id)
      .pipe(
        tap(_ => this.baseService.log(`fetched device with id=${id}`)),
        catchError(this.baseService.handleHttpError<Device>('getDevice'))
      );
  }

  addDevice(device: Device): Observable<Device> {
    return this.http.post(this.devicesUrl, device, this.baseService.httpOptions)
      .pipe(
        tap((d: Device) => this.baseService.log(`added device with id=${d.id}`)),
        catchError(this.baseService.handleHttpError<Device>('addDevice'))
      );
  }

  updateDevice(device: Device): Observable<any> {
    return this.http.put(this.devicesUrl + '/' + device.id, device, this.baseService.httpOptions)
      .pipe(
        tap(_ => this.baseService.log(`updated device with id=${device.id}`)),
        catchError(this.baseService.handleHttpError<Device>('updateDevice'))
      );
  }
}
