import {Info} from "./Info";
import {Device} from "./Device";
import {ContactInfo} from "./ContactInfo";

export class Customer extends Info{
  private _devices: Device[] = [];
 private _location?: [number,number];
  private _contactInfo: ContactInfo;

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

  get location(){
    return this._location;
  }

  set location(location: [number,number]){
    this._location = location;
  }

  set contactInfo(contactInfo: ContactInfo){
    this._contactInfo = contactInfo;
  }

  get contactInfo(){
    return this._contactInfo;
  }
}
