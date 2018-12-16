import {Customer} from "./Customer";
import {User} from "./User";
import {Appointment} from "./Appointment";
import {Note} from "./Note";
import {Task} from "./Task";
import {Device} from "./Device";
import {Order} from "./Order";
import {Part} from "./Part";
import {Stock} from "./Stock";

export class UserData {

  constructor(private _user: User){

  }

  get user() : User{
    return this._user;
  }

  private _customers: Customer[] = [];
  get customers(){
    return this._customers;
  }

  set customers(customers: Customer[]){
    this._customers = customers;
  }

  addCustomer(customer: Customer){
    this._customers.push(customer);
  }

  addCustomers(customers: Customer[]){
    this._customers = this._customers.concat(customers);
  }

  private _appointments: Appointment[] = [];
  get appointments(){
    return this._appointments;
  }

  set appointments(appointments: Appointment[]){
    this._appointments = appointments;
  }

  addAppointment(appointment: Appointment){
    this._appointments.push(appointment);
  }

  addAppointments(appointments: Appointment[]){
    this._appointments = this._appointments.concat(appointments);
  }

  private _notes: Note[] = [];
  get notes(){
    return this._notes;
  }

  set notes(notes: Note[]){
    this._notes = notes;
  }

  addNote(note: Note){
    this._notes.push(note);
  }

  addNotes(notes: Note[]){
    this._notes = this._notes.concat(notes);
  }

  private _tasks: Task[] = [];
  get tasks(){
    return this._tasks;
  }

  set tasks(tasks: Task[]){
    this._tasks = tasks;
  }

  addTask(task: Task){
    this._tasks.push(task);
  }

  addTasks(tasks: Task[]){
    this._tasks = this._tasks.concat(tasks);
  }

  private _devices: Device[] = [];
  get devices(){
    return this._devices;
  }

  set devices(devices: Device[]){
    this._devices = devices;
  }

  addDevice(device: Device){
    this._devices.push(device);
  }

  addDevices(devices: Device[]){
    this._devices = this._devices.concat(devices);
  }

  private _orders: Order[] = [];
  get orders(){
    return this._orders;
  }

  set orders(orders: Order[]){
    this._orders = orders;
  }

  addOrder(order: Order){
    this._orders.push(order);
  }

  addOrders(orders: Order[]){
    this._orders = this._orders.concat(orders);
  }

  private _parts: Part[] = [];
  get parts(){
    return this._parts;
  }

  set parts(parts: Part[]){
    this._parts = parts;
  }

  addPart(part: Part){
    this._parts.push(part);
  }

  addParts(parts: Part[]){
    this._parts = this._parts.concat(parts);
  }

  private _stock: Stock;
  get stock(){
    return this._stock;
  }

  set stock(stock: Stock){
    this._stock = stock;
  }

}
