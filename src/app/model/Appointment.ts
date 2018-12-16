import {Task} from "./Task";
import {Customer} from "./Customer";

export class Appointment extends Task{

  constructor(name: string, private _customer: Customer) {
    super(name);
  }

  get customer(): Customer {
    return this._customer;
  }


}
