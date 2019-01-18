import {Time} from "@angular/common";
import {AppointmentStatus} from "./appointment-status";

export class Appointment {
  id: number;
  number: string;
  customer: number;
  device: number;
  serviceDate: Date;
  plannedTime: Time;
  description: string;
  status: AppointmentStatus;
}
