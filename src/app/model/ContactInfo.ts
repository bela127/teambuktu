import {Datasource, Timestamp} from "./Timestamp";

export class ContactInfo {
  private _timestamp;
  private _email: string;
  private _phone: string;
  private _web: string;
  private _address: string;

  get timestamp(){
    return this._timestamp;
  }

  updateData(datasource: Datasource){
    this._timestamp = new Timestamp(new Date(Date.now()),datasource);
  }

  set email(email: string){
    this._email = email;
  }

  get email(){
    return this._email;
  }

  set phone(phone: string){
    this._phone = phone;
  }

  get phone(){
    return this._phone;
  }

  set web(web: string){
    this._web = web;
  }

  get web(){
    return this._web;
  }

  set address(address: string){
    this._address = address;
  }

  get address(){
    return this._address;
  }
}
