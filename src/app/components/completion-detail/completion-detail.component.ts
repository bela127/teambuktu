import {Component, OnInit} from '@angular/core';
import {Appointment} from "../../container/appointment";
import {Completion} from "../../container/completion";
import {CompletionService} from "../../services/completion.service";
import {ActivatedRoute, Router} from "@angular/router";
import {AppointmentService} from "../../services/appointment.service";
import {Customer} from "../../container/customer";
import {CustomerService} from "../../services/customer.service";
import {Item} from "../../container/item";
import {WarehouseService} from "../../services/warehouse.service";
import {Part} from "../../container/part";
import {DeviceService} from "../../services/device.service";
import {Device} from "../../container/device";
import {CompletionStatus} from "../../container/completion-status.enum";
import {AppointmentStatus} from "../../container/appointment-status.enum";
import {TimeRange} from "../../container/time-range";
import {Time} from '@angular/common';

class DisplayCompletionItem {
  amount: number;
  part: Part;
}

@Component({
  selector: 'app-completion',
  templateUrl: './completion-detail.component.html',
  styleUrls: ['./completion-detail.component.css']
})
export class CompletionDetailComponent implements OnInit {

  private completion: Completion;
  private appointmentToComplete: Appointment;

  private completionLoaded = false;

  private allCustomers: Customer[];
  private allParts: Part[];
  private allDevices: Device[];

  private newCompletionItem: Item;

  private displayItems: DisplayCompletionItem[];

  private displayedColumns = ['amount', 'unit', 'number', 'name', 'price', 'currency', 'action'];

  constructor(private route: ActivatedRoute,
              private router: Router,
              private completionService: CompletionService,
              private appointmentService: AppointmentService,
              private customerService: CustomerService,
              private warehouseService: WarehouseService,
              private deviceService: DeviceService) {
  }

  ngOnInit() {
    this.newCompletionItem = new Item();

    let id = +this.route.snapshot.paramMap.get("id");

    if (this.route.snapshot.paramMap.has("aid")) {
      // this is a new completion

      let aid = +this.route.snapshot.paramMap.get("aid");

      this.appointmentService.getAppointment(aid)
        .subscribe(appointment => {
          this.appointmentToComplete = appointment;

          this.completion = new Completion();
          this.completion.appointment = this.appointmentToComplete.id;
          this.completion.number = this.appointmentToComplete.number;
          this.completion.customer = this.appointmentToComplete.customer;
          this.completion.device = this.appointmentToComplete.device;
          this.completion.serviceDate = new Date(this.appointmentToComplete.serviceDate);

          this.completion.realTime = new TimeRange();
          this.completion.realTime.begin = {} as Time;
          this.completion.realTime.end = {} as Time;
          this.completion.realTime.begin.hours = this.appointmentToComplete.plannedTime.begin.hours;
          this.completion.realTime.begin.minutes = this.appointmentToComplete.plannedTime.begin.minutes;
          this.completion.realTime.end.hours = this.appointmentToComplete.plannedTime.end.hours;
          this.completion.realTime.end.minutes = this.appointmentToComplete.plannedTime.end.minutes;

          this.completion.items = JSON.parse(JSON.stringify(this.appointmentToComplete.items));
          this.completion.status = CompletionStatus.Unsigned;
          this.completionLoaded = true;

          this.getParts();
        });


    } else {

      this.completionService.getCompletion(id)
        .subscribe(completion => {
          this.completion = completion;
          this.completionLoaded = true;

          this.appointmentService.getAppointment(this.completion.appointment)
            .subscribe(appointment => {
              this.appointmentToComplete = appointment;

              this.getParts();
            });
        });
    }

    this.customerService.getCustomers()
      .subscribe(customers => this.allCustomers = customers);

    this.deviceService.getDevices()
      .subscribe(devices => this.allDevices = devices);
  }

  getParts(): void {
    this.warehouseService.getParts()
      .subscribe(parts => {
        this.allParts = parts;

        this.buildDisplayItems();
      });
  }

  buildDisplayItems(): void {
    this.displayItems = this.completion.items
      .map(ai => {
        let di = new DisplayCompletionItem();
        di.amount = ai.amount;
        di.part = this.allParts
          .find(p => ai.part == p.id);
        return di;
      });
  }

  isFormFilled(): boolean {
    return (this.newCompletionItem != undefined
      && this.newCompletionItem.amount != undefined
      && this.newCompletionItem.part != undefined
    );
  }

  addPart(): void {
    this.completion.items.push(this.newCompletionItem);
    this.newCompletionItem = new Item();
    this.buildDisplayItems();
  }

  removeItem(item: DisplayCompletionItem): void {
    let indexToRemove = this.completion.items
      .findIndex(i => i.amount == item.amount && i.part == item.part.id);

    this.completion.items = this.completion.items
      .filter((_, index) => index != indexToRemove);

    this.buildDisplayItems();
  }

  sign(): void {
    this.appointmentToComplete.status = AppointmentStatus.Complete;
    this.completion.status = CompletionStatus.Signed;

    this.appointmentService.updateAppointment(this.appointmentToComplete)
      .subscribe(() => {
        if (this.completion.id) {
          this.completionService.updateCompletion(this.completion)
            .subscribe(() => this.router.navigate(['/appointments'])
              .catch(reason => console.log("couldn't navigate to /appointments after signing")));
        } else {
          this.completionService.addCompletion(this.completion)
            .subscribe(() => this.router.navigate(['/appointments'])
              .catch(reason => console.log("couldn't navigate to /appointments after signing")));
        }
      });

  }

  isSigned(): boolean {
    return this.completion.status == CompletionStatus.Signed;
  }

}
