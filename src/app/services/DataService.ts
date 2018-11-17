import { Appointment } from "../model/Appointment";
import {Customer} from "../model/Customer";

export class DataService {

    getAppointments(): Appointment[] {
      var c1 = new Customer("HSKA")
        return [
            new Appointment("Appointment 1", c1),
            new Appointment("Appointment 2", c1),
            new Appointment("Appointment 3", c1),
        ];
    }

    getAppointment(id:String): Appointment {
        for (let entry of this.getAppointments()) {
            if(entry.getId() == id)
                return entry;    
        }
        return null;
    }

    getTasks(): any {
        return [
            {name:"Hallo", link:"Welt"},
            {name:"Hallo", link:"Welt"},
            {name:"Hallo", link:"Welt"}
        ];
    }

}
