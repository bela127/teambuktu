import {Time} from "@angular/common";

export class Appointment {
  id: number;
  number: string;
  customer: number;
  device: number;
  serviceDate: Date;
  plannedTime: Time;
}
