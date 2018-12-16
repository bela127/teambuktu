import {Info} from "./Info";
import {PartPack} from "./PartPack";

enum Status {
  New,
  InProgress,
  Cancelled,
  Delivered,
}

export class Order extends Info{
  private _orderItems: PartPack[] = [];
  private _orderNumber: string;
  private _description: string;
  private _orderDate: Date;
  private _lastUpdate: Date;
  private _status: Status;
  private _statusNote: string;


  get orderItems(): PartPack[] {
    return this._orderItems;
  }

  set orderItems(orderItems : PartPack[]){
    this._orderItems = orderItems;
  }

  addorderItem(orderItem : PartPack){
    this._orderItems.push(orderItem);
  }

  addorderItems(orderItems : PartPack[]){
    this._orderItems = this._orderItems.concat(orderItems);
  }

  set description(description: string){
    this._description = description;
  }

  get description(){
    return this._description;
  }

  set orderNumber(orderNumber: string){
    this._orderNumber = orderNumber;
  }

  get orderNumber(){
    return this._orderNumber;
  }

  set statusNote(statusNote: string){
    this._statusNote = statusNote;
  }

  get statusNote(){
    return this._statusNote;
  }

  set orderDate(orderDate: Date){
    this._orderDate = orderDate;
  }

  get orderDate(){
    return this._orderDate;
  }

  set lastUpdate(lastUpdate: Date){
    this._lastUpdate = lastUpdate;
  }

  get lastUpdate(){
    return this._lastUpdate;
  }

  set status(status: Status){
    this._status = status;
  }

  get status(){
    return this._status;
  }
}
