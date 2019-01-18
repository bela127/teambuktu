import {Component, OnInit} from '@angular/core';
import {Device} from "../../container/device";
import {DeviceService} from "../../services/device.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-devices',
  templateUrl: './devices.component.html',
  styleUrls: ['./devices.component.css']
})
export class DevicesComponent implements OnInit {

  private devices: Device[];

  constructor(private deviceService: DeviceService,
              private router: Router) {
  }

  ngOnInit() {
    this.getDevices();
  }

  getDevices(): void {
    this.deviceService.getDevices()
      .subscribe(devices => this.devices = devices);
  }

  add(): void {
    let device = new Device();
    device.name = "New Service Product / Device";
    device.number = "-1";
    this.deviceService.addDevice(device)
      .subscribe(device => {
        this.devices.push(device);
        this.router.navigate(['/device/' + device.id])
          .catch(e => console.log("Navigation didn't work:" + e));
      });
  }

}
