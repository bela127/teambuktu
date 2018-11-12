import {Task} from "./Task";
import {Customer} from "./Customer";

export class Appointment extends Task{

  constructor(private name: String, private customer: Customer) {
    super(name);
  }

  getCustomer(): Customer {
    return this.customer;
  }


}
