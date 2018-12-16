import {Info} from "./Info";
import {Device} from "./Device";

export class Customer extends Info{
  private _devices: Device[] = [];
  get devices(){
    return this._devices;
  }

  set devices(devices: Device[]){
    this._devices = devices;
  }

  addDevice(device: Device){
    this._devices.push(device);
  }

  addDevices(devices: Device[]){
    this._devices = this._devices.concat(devices);
  }
}
