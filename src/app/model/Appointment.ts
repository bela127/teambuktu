import {Task} from "./Task";
import {Customer} from "./Customer";
import {ContactInfo} from "./ContactInfo";
import {User} from "./User";
import {Device} from "./Device";
import {PartPack} from "./PartPack";
import {Completion} from "./Completion";

export class Appointment extends Task{
  private _user: User;
  private _device: Device;
  private _parts: PartPack[];

  private _startDateReal: Date;
  private _endDateReal: Date;

  constructor(name: string) {
    super(name);
  }

  set user(user: User){
    this._user = user;
  }

  get user(){
    return this._user;
  }

  set device(device: Device){
    this._device = device;
  }

  get device(){
    return this._device;
  }

  get parts(){
    return this._parts;
  }

  set parts(parts: PartPack[]){
    this._parts = parts;
  }

  addPart(part: PartPack){
    this._parts.push(part);
  }

  addParts(parts: PartPack[]){
    this._parts = this._parts.concat(parts);
  }

  get startDateReal(): Date {
    return this._startDateReal;
  }

  set startDateReal(date : Date){
    this._startDateReal = date;
  }

  get endDateReal(): Date {
    return this._endDateReal;
  }

  set endDateReal(date : Date){
    this._endDateReal = date;
  }
}
