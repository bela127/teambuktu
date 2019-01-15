import {Appointment} from "../model/Appointment";
import {UserData} from "../model/UserData";
import {Task} from "../model/Task";
import {Note} from "../model/Note";
import {Customer} from "../model/Customer";
import {Order} from "../model/Order";
import {Device} from "../model/Device";
import {Part} from "../model/Part";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Injectable} from "@angular/core";

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private _userData: UserData;

  constructor (private http: HttpClient) { }

  set userData(userData: UserData){
    this._userData = userData;
  }

  get appointments(): Appointment[] {
    return this._userData.appointments
  }

  appointment(id:string): Appointment {
    for (let entry of this._userData.appointments) {
      if(entry.id == id)
        return entry;    
    }
    return null;
  }

  addAppointment(a:Appointment){
    this._userData.appointments.push(a);
  }

  updateAppointment(a:Appointment){
    let index = this._userData.appointments.findIndex((entry: Appointment) => {
      return entry.id == a.id;
    });
    this._userData.appointments[index] = a;
  }

  removeAppointment(id:string){
    let index = this._userData.appointments.findIndex((entry: Appointment) => {
      return entry.id == id;
    });
    this._userData.appointments.splice(index, 1);
  }

  get tasks(): Task[] {
      return this._userData.tasks;
  }

  task(id:string): Task {
    for (let entry of this._userData.tasks) {
      if(entry.id == id)
        return entry;
    }
    return null;
  }

  addTask(a:Task){
    this._userData.tasks.push(a);    
  }

  updateTask(a:Task){
    let index = this._userData.tasks.findIndex((entry: Task) => {
      return entry.id == a.id;
    });
    this._userData.tasks[index] = a;
  }

  removeTask(id:string){
    let index = this._userData.tasks.findIndex((entry: Task) => {
      return entry.id == id;
    });
    this._userData.tasks.splice(index, 1);
  }

  get notes(): Note[] {
    return this._userData.notes;
  }

  note(id:string): Note {
    for (let entry of this._userData.notes) {
      if(entry.id == id)
        return entry;
    }
    return null;
  }

  addNote(a:Note){
    this._userData.notes.push(a);    
  }

  updateNote(a:Note){
    let index = this._userData.notes.findIndex((entry: Note) => {
      return entry.id == a.id;
    });
    this._userData.notes[index] = a;
  }

  removeNote(id:string){
    let index = this._userData.notes.findIndex((entry: Task) => {
      return entry.id == id;
    });
    this._userData.notes.splice(index, 1);
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

  customer(id:string): Customer {
    for (let entry of this._userData.customers) {
      if(entry.id == id)
        return entry;
    }
    return null;
  }

  get orders(): Order[] {
    return this._userData.orders;
  }

  order(id:string): Order {
    for (let entry of this._userData.orders) {
      if(entry.id == id)
        return entry;
    }
    return null;
  }

  addOrder(a:Order){
    this._userData.orders.push(a);    
  }

  updateOrder(a:Order){
    let index = this._userData.orders.findIndex((entry: Order) => {
      return entry.id == a.id;
    });
    this._userData.orders[index] = a;
  }

  removeOrder(id:string){
    let index = this._userData.orders.findIndex((entry: Order) => {
      return entry.id == id;
    });
    this._userData.orders.splice(index, 1);
  }

  get devices(): Device[] {
    return this._userData.devices;
  }

  device(id:string): Device {
    for (let entry of this._userData.devices) {
      if(entry.id == id)
        return entry;
    }
    return null;
  }

  addDevice(a:Device){
    this._userData.devices.push(a);    
  }

  updateDevice(a:Device){
    let index = this._userData.devices.findIndex((entry: Device) => {
      return entry.id == a.id;
    });
    this._userData.devices[index] = a;
  }

  removeDevice(id:string){
    let index = this._userData.devices.findIndex((entry: Device) => {
      return entry.id == id;
    });
    this._userData.orders.splice(index, 1);
  }

  get parts(): Part[] {
    return this._userData.parts;
  }

  part(id:string): Part {
    for (let entry of this._userData.parts) {
      if(entry.id == id)
        return entry;
    }
    return null;
  }

  addPart(a:Part){
    this._userData.parts.push(a);    
  }

  updatePart(a:Part){
    let index = this._userData.parts.findIndex((entry: Part) => {
      return entry.id == a.id;
    });
    this._userData.parts[index] = a;
  }

  removePart(id:string){
    let index = this._userData.parts.findIndex((entry: Part) => {
      return entry.id == id;
    });
    this._userData.parts.splice(index, 1);
  }

  get stock(){
    return this._userData.stock;
  }

}
