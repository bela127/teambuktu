import {AppointmentStatus} from "./appointment-status.enum";
import {Item} from "./item";
import {TimeRange} from "./time-range";

export class Appointment {
  id: number;
  number: string;
  customer: number;
  device: number;
  serviceDate: Date;
  plannedTime: TimeRange;
  description: string;
  status: AppointmentStatus;
  items: Item[];
}
