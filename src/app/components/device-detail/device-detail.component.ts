import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Device} from "../../container/device";
import {DeviceService} from "../../services/device.service";

@Component({
  selector: 'app-device-detail',
  templateUrl: './device-detail.component.html',
  styleUrls: ['./device-detail.component.css']
})
export class DeviceDetailComponent implements OnInit {

  private device: Device;

  constructor(private deviceService: DeviceService,
              private route: ActivatedRoute) {
  }

  ngOnInit() {
    let id = +this.route.snapshot.paramMap.get("id");
    this.deviceService.getDevice(id)
      .subscribe(device => this.device = device);
  }

  save(): void {
    this.deviceService.updateDevice(this.device)
      .subscribe();
  }

}
