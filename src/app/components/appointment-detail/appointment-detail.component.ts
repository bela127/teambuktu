import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {Appointment} from "../../container/appointment";
import {Customer} from "../../container/customer";
import {AppointmentService} from "../../services/appointment.service";
import {CustomerService} from "../../services/customer.service";
import {Device} from "../../container/device";
import {DeviceService} from "../../services/device.service";
import {Part} from "../../container/part";
import {WarehouseService} from "../../services/warehouse.service";
import {Item} from "../../container/item";

class DisplayAppointmentItem {
  amount: number;
  part: Part;
}

@Component({
  selector: 'app-appointment-detail',
  templateUrl: './appointment-detail.component.html',
  styleUrls: ['./appointment-detail.component.css']
})
export class AppointmentDetailComponent implements OnInit {

  private appointment: Appointment;
  private allCustomers: Customer[];
  private allDevices: Device[];
  private allParts: Part[];

  private newAppointmentItem: Item;

  private displayItems: DisplayAppointmentItem[];

  private displayedColumns = ['amount', 'unit', 'number', 'name', 'price', 'currency'];

  constructor(private appointmentService: AppointmentService,
              private customerService: CustomerService,
              private deviceService: DeviceService,
              private warehouseService: WarehouseService,
              private route: ActivatedRoute,
              private router: Router) {
  }

  ngOnInit() {
    this.newAppointmentItem = new Item();

    let id = +this.route.snapshot.paramMap.get("id");
    this.appointmentService.getAppointment(id)
      .subscribe(appointment => {
        this.appointment = appointment;

        this.warehouseService.getParts()
          .subscribe(parts => {
            this.allParts = parts;

            this.buildDisplayItems();
          });
      });

    this.customerService.getCustomers()
      .subscribe(customers => this.allCustomers = customers);

    this.deviceService.getDevices()
      .subscribe(devices => this.allDevices = devices);
  }

  buildDisplayItems(): void {
    this.displayItems = this.appointment.items
      .map(ai => {
        let di = new DisplayAppointmentItem();
        di.amount = ai.amount;
        di.part = this.allParts
          .find(p => ai.part == p.id);
        return di;
      });
  }

  save(): void {
    this.appointmentService.updateAppointment(this.appointment)
      .subscribe();
  }

  gotoCustomer(): void {
    if (this.appointment.customer) {
      this.router.navigate(['/customer/' + this.appointment.customer])
        .catch(reason => console.log("couldn't navigate to customer with id=" + this.appointment.customer));
    }
  }

  gotoDevice(): void {
    if (this.appointment.device) {
      this.router.navigate(['/device/' + this.appointment.device])
        .catch(reason => console.log("couldn't navigate to device with id=" + this.appointment.device + ": " + reason));
    }
  }

  isFormFilled(): boolean {
    return (this.newAppointmentItem != undefined
      && this.newAppointmentItem.amount != undefined
      && this.newAppointmentItem.part != undefined
    );
  }

  addPart(): void {
    this.appointment.items.push(this.newAppointmentItem);
    this.newAppointmentItem = new Item();
    this.buildDisplayItems();
  }

}
