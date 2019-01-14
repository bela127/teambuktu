import {UserData} from "../model/UserData";
import {User} from "../model/User";
import {Appointment} from "../model/Appointment";
import {Customer} from "../model/Customer";
import {Device} from "../model/Device";
import {Note} from "../model/Note";
import {Task} from "../model/Task";
import {Part} from "../model/Part";
import {Order} from "../model/Order";
import {PartPack} from "../model/PartPack";
import {Stock} from "../model/Stock";

export class MockDataBase {

  isConnected(): boolean{
    return true;
  }

  tryLoadData(userName: string, pwHash: string): UserData{
    if(this.validateUser(userName,pwHash)){
      return this.userData;
    }
    return null;
  }

  trySaveData(userData: UserData, pwHash: string): boolean{
    if(this.validateUser(userData.user.name, pwHash) && userData.user.validatePwHash(pwHash)){
      this.userData = userData;
      return true;
    }
    return false;
  }

  validateUser(userName: string, pwHash: string): boolean{
    if(this.user.name == userName && this.user.validatePwHash(pwHash)){
      return true;
    }
    return false;
  }

  constructor(){
    this.user = new User("a","a");

    this.userData = new UserData(this.user);

    let c1 = new Customer("HSKA");
    let c2 = new Customer("KIT");
    let c3 = new Customer("DHBW");
    let c4 = new Customer("PH");

    this.userData.appointments=[
      new Appointment("Appointment 1"),
      new Appointment("Appointment 2"),
      new Appointment("Appointment 3"),
      new Appointment("Appointment 4"),
      new Appointment("Appointment 5"),
    ];

    this.userData.customers=[
      c1,
      c2,
      c3,
      c4,
    ];

    let d1 = new Device("Device1", [0,0]);
    let d2 = new Device("Device2", [42,1337]);
    let d3 = new Device("Device3", [1234567,9876543]);
    let d4 = new Device("Device4", [764,876]);
    let d5 = new Device("Device5", [67,43]);

    d1.serialNo = "6324-3460-0401";
    d2.serialNo = "1324-1023-0403";
    d3.serialNo = "8968-2134-0405";
    d4.serialNo = "0266-5001-0407";
    d5.serialNo = "7824-3521-0409";

    d1.description = "The first service product ever.";
    d2.description = "Another one.";
    d3.description = "(no description)";
    d4.description = "4: 0266-5001-0407";
    d5.description = "5: 7824-3521-0409";

    d1.purchaseDate = new Date();
    d2.purchaseDate = new Date();
    d3.purchaseDate = new Date();
    d4.purchaseDate = new Date();
    d5.purchaseDate = new Date();

    c1.devices=[d1,d2];
    c2.devices=[d3];
    c3.devices=[d4];
    c4.devices=[d5];

    this.userData.appointments[0].device = d1;
    this.userData.appointments[1].device = d2;
    this.userData.appointments[2].device = d3;
    this.userData.appointments[3].device = d4;
    this.userData.appointments[4].device = d5;

    this.userData.appointments[0].startDateReal = new Date();
    this.userData.appointments[1].startDateReal = new Date();
    this.userData.appointments[2].startDateReal = new Date();
    this.userData.appointments[3].startDateReal = new Date();
    this.userData.appointments[4].startDateReal = new Date();

    this.userData.devices=[d1, d2, d3, d4, d5];

    this.userData.notes=
      [
      new Note("Note1"),
      new Note("Note2", "The appointments should maybe have more descriptive names."),
      new Note("Note3", "Maybe there should be a 'back' button somewhere in this ui..."),
      new Note("Note4", "Constructor overloading is quite hacky in TypeScript")
      ];

    let t1 = new Task("Task1");
    t1.text="Note1 should get some text";
    this.userData.tasks=
      [
      t1,
      new Task("Task2", "This is the second mock task with some text. It also has a fancy list in it:" +
        "\n" +
        "\n - [ ] Item 1" +
        "\n - [ ] Item 2" +
        "\n - [ ] Item 3" +
        "\n" +
        "\nNot that bad, right?")
      ];

    let p1 = new Part("PC");
    p1.price = 1250.99;
    let p2 = new Part("Monitor");
    p2.price = 250.99;
    let p3 = new Part("Keyboard");
    p3.price = 15.99;
    this.userData.parts =[p1,p2,p3];

    this.userData.orders =
      [
        new Order("order 1"),
        new Order("order 2"),
        new Order("order 3"),
      ];

    this.userData.orders[0].orderItems=
      [
      new PartPack(p1,5),
        new PartPack(p2,5),
      ];

    this.userData.stock = new Stock("MyCar")
    this.userData.stock.stockItems =
      [
        new PartPack(p1,1),
        new PartPack(p2,1),
        new PartPack(p3,6),
      ];
  }

  readonly user: User;
  private userData: UserData;
}
