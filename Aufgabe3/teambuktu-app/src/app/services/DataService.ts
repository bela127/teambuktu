import { Appointment } from "../model/Appointment";

export class DataService {

    getAppointments(): Appointment[]{
        return [
            new Appointment("Hallo"),
            new Appointment("Welt"),
            new Appointment("Jaaa"),
        ];
    }

    getTasks(): any{
        return [
            {name:"Hallo", link:"Welt"},
            {name:"Hallo", link:"Welt"},
            {name:"Hallo", link:"Welt"}
        ];
    }

}