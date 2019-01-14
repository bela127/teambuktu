import { Component, OnInit } from '@angular/core';
import {Device} from "../../model/Device";
import {DataService} from "../../services/DataService";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-device-detail',
  templateUrl: './device-detail.component.html',
  styleUrls: ['./device-detail.component.css']
})
export class DeviceDetailComponent implements OnInit {

  device: Device;

  constructor(private dataService: DataService, private route: ActivatedRoute) { }

  ngOnInit() {
    let id = this.route.snapshot.paramMap.get("id");
    this.device = this.dataService.device(id);
  }

}
