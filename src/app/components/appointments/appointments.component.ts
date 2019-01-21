import {Component, OnInit} from '@angular/core';
import {SessionService} from "../../services/SessionService";
import {Router} from "@angular/router";
import {AppointmentService} from "../../services/appointment.service";
import {Appointment} from "../../container/appointment";
import {AppointmentStatus} from "../../container/appointment-status.enum";

@Component({
  selector: 'app-appointments',
  templateUrl: './appointments.component.html',
  styleUrls: ['./appointments.component.css']
})
export class AppointmentsComponent implements OnInit {

  private appointments: Appointment[];

  constructor(private session: SessionService,
              private router: Router,
              private appointmentService: AppointmentService) {
  }

  ngOnInit() {
    this.getAppointments();
  }

  getAppointments(): void {
    this.appointmentService.getAppointments()
      .subscribe(appointments => this.appointments = appointments
        .filter(a => a.status == AppointmentStatus.Open));
  }

  add(appointmentNumber: string): void {
    let a = new Appointment();
    a.number = appointmentNumber;
    a.plannedTime = {begin: {hours: 8, minutes: 0}, end: {hours: 10, minutes: 0}};
    a.status = AppointmentStatus.Open;
    a.items = [];

    this.appointmentService.addAppointment(a)
      .subscribe(appointment => {
        this.appointments.push(appointment);
        this.router.navigate(['/appointment/' + appointment.id])
          .catch(e => console.log("Navigating to new app. didn't work: " + e));
      });
  }

}
