import {Appointment} from "../model/Appointment";
import {UserData} from "../model/UserData";
import {Task} from "../model/Task";
import {Note} from "../model/Note";
import {Customer} from "../model/Customer";
import {Order} from "../model/Order";
import {Device} from "../model/Device";
import {Part} from "../model/Part";

export class DataService {

  private _userData: UserData;

  set userData(userData: UserData){
    this._userData = userData;
  }


    get appointments(): Appointment[] {
    return this._userData.appointments
    }

    appointment(id:String): Appointment {
        for (let entry of this._userData.appointments) {
            if(entry.id == id)
                return entry;    
        }
        return null;
    }

    get tasks(): Task[] {
        return this._userData.tasks;
    }

  task(id:String): Task {
    for (let entry of this._userData.tasks) {
      if(entry.id == id)
        return entry;
    }
    return null;
  }

  get notes(): Note[] {
    return this._userData.notes;
  }

  note(id:String): Note {
    for (let entry of this._userData.notes) {
      if(entry.id == id)
        return entry;
    }
    return null;
  }

  get user(): string {
    if (this._userData != null) {
      return this._userData.user.name;
    } else {
      return "(none)"
    }
  }

  get customers(): Customer[] {
    return this._userData.customers;
  }

  customer(id:String): Customer {
    for (let entry of this._userData.customers) {
      if(entry.id == id)
        return entry;
    }
    return null;
  }

  get orders(): Order[] {
    return this._userData.orders;
  }

  order(id:String): Order {
    for (let entry of this._userData.orders) {
      if(entry.id == id)
        return entry;
    }
    return null;
  }

  get devices(): Device[] {
    return this._userData.devices;
  }

  device(id:String): Device {
    for (let entry of this._userData.devices) {
      if(entry.id == id)
        return entry;
    }
    return null;
  }

  get parts(): Part[] {
    return this._userData.parts;
  }

  part(id:String): Part {
    for (let entry of this._userData.parts) {
      if(entry.id == id)
        return entry;
    }
    return null;
  }

}
