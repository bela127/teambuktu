import {Info} from "./Info";
import {Device} from "./Device";

export class Customer extends Info{
  private devices: Device[] = [];
  getDevices(){
    return this.devices;
  }

  setDevices(devices: Device[]){
    this.devices = devices;
  }

  addDevice(device: Device){
    this.devices.push(device);
  }

  addDevices(devices: Device[]){
    this.devices = this.devices.concat(devices);
  }
}
