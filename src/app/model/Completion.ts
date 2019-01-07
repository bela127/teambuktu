import {Appointment} from "./Appointment";

export class Completion extends Appointment{

  constructor(appointment: Appointment) {
    super(appointment.name,appointment.customer);
    this.startDate = appointment.startDate;
    this.endDate = appointment.endDate;
  }



}
