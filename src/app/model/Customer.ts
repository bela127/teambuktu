import {Info} from "./Info";
import {Device} from "./Device";
import {ContactInfo} from "./ContactInfo";
import {Appointment} from "./Appointment";
import {Completion} from "./Completion";

export class Customer extends Info{
  private _devices: Device[] = [];
  private _appointments: Appointment[] = [];
  private _completions: Completion[] = [];
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

  get appointments(){
    return this._appointments;
  }

  set appointments(appointments: Appointment[]){
    this._appointments = appointments;
  }

  addAppointment(appointment: Appointment){
    this._appointments.push(appointment);
  }

  addAppointments(appointments: Appointment[]){
    this._appointments = this._appointments.concat(appointments);
  }

  get completions(){
    return this._completions;
  }

  set completions(completions: Completion[]){
    this._completions = completions;
  }

  addCompletion(completion: Completion){
    this._completions.push(completion);
  }

  addCompletions(completions: Completion[]){
    this._completions = this._completions.concat(completions);
  }
}
