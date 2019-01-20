import {Component, OnInit} from '@angular/core';
import {Appointment} from "../../container/appointment";

@Component({
  selector: 'app-completion',
  templateUrl: './completion-detail.component.html',
  styleUrls: ['./completion-detail.component.css']
})
export class CompletionDetailComponent implements OnInit {

  private appointmentToComplete: Appointment;

  constructor() {
  }

  ngOnInit() {
  }

}
