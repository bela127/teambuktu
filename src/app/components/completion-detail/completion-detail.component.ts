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
    this.completionService.getCompletion(id)
      .subscribe(completion => {
        this.completion = completion;

        this.appointmentService.getAppointment(this.completion.appointment)
          .subscribe(appointment => {
            this.appointmentToComplete = appointment;

            this.warehouseService.getParts()
              .subscribe(parts => {
                this.allParts = parts;

                this.buildDisplayItems();
              });
          });
      });

    this.customerService.getCustomers()
      .subscribe(customers => this.allCustomers = customers);

    this.deviceService.getDevices()
      .subscribe(devices => this.allDevices = devices);
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

  save(): void {
    this.completionService.updateCompletion(this.completion)
      .subscribe();
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
        this.completionService.updateCompletion(this.completion)
          .subscribe(() => this.router.navigate(['/appointments'])
            .catch(reason => console.log("couldn't navigate to /appointments after signing")));
      });

  }

  isSigned(): boolean {
    return this.completion.status == CompletionStatus.Signed;
  }

}
