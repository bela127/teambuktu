import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Device} from "../../container/device";
import {DeviceService} from "../../services/device.service";
import {CustomerService} from "../../services/customer.service";
import {Customer} from "../../container/customer";

@Component({
  selector: 'app-device-detail',
  templateUrl: './device-detail.component.html',
  styleUrls: ['./device-detail.component.css']
})
export class DeviceDetailComponent implements OnInit {

  private device: Device;
  private allCustomers: Customer[];

  constructor(private deviceService: DeviceService,
              private customerService: CustomerService,
              private route: ActivatedRoute) {
  }

  ngOnInit() {
    let id = +this.route.snapshot.paramMap.get("id");
    this.deviceService.getDevice(id)
      .subscribe(device => this.device = device);

    this.customerService.getCustomers()
      .subscribe(customers => this.allCustomers = customers);
  }

  save(): void {
    this.deviceService.updateDevice(this.device)
      .subscribe();
  }

}
