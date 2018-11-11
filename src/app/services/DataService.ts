import { Appointment } from "../model/Appointment";

export class DataService {

    getAppointments(): Appointment[] {
        return [
            new Appointment("Appointment 1"),
            new Appointment("Appointment 2"),
            new Appointment("Appointment 3"),
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
