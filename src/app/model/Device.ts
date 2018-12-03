import {Info} from "./Info";
import {Customer} from "./Customer";

export class Device extends Info{
  private serialNo: string;
  private description: string;
  private purchaseDate: Date;

  constructor(name: string, private customer: Customer, private location?: [number,number]){
    super(name);
  }

  getCustomer(){
    return this.customer;
  }

  getLocation(){
    return this.location;
  }

  setLocation(location: [number,number]){
    return this.location = location;
  }

  setSerialNo(serialNo: string){
    this.serialNo = serialNo;
  }

  getSerialNo(){
    return this.serialNo;
  }

  setPurchaseDate(purchaseDate: Date){
    this.purchaseDate = purchaseDate;
  }

  getPurchaseDate(){
    return this.purchaseDate;
  }

  setDescription(description: string){
    this.description = description;
  }

  getDescription(){
    return this.description;
  }

}
