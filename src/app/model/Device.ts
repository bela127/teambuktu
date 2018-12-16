import {Info} from "./Info";
import {Customer} from "./Customer";

export class Device extends Info{
  private _serialNo: string;
  private _description: string;
  private _purchaseDate: Date;

  constructor(name: string, private _customer: Customer, private _location?: [number,number]){
    super(name);
  }

  get customer(){
    return this._customer;
  }

  get location(){
    return this._location;
  }

  set location(location: [number,number]){
    this._location = location;
  }

  set serialNo(serialNo: string){
    this._serialNo = serialNo;
  }

  get serialNo(){
    return this._serialNo;
  }

  set purchaseDate(purchaseDate: Date){
    this._purchaseDate = purchaseDate;
  }

  get purchaseDate(){
    return this._purchaseDate;
  }

  set description(description: string){
    this._description = description;
  }

  get description(){
    return this._description;
  }

}
