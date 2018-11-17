import {Customer} from "./Customer";

class UserData {

  constructor(private userName: string, private userPwHash: string) {

  }

  getName() : string{
    return this.userName;
  }

  verifyPw(pwHash: string) : boolean{
    return this.userPwHash == pwHash;
  }

  getCustomers(){

  }

  setCustomers(){

  }

  addCustomer(){

  }

  getAppointments(){

  }

  setAppointments(){

  }

  addAppointment(){

  }

  getNotes(){

  }

  setNotes(){

  }

  addNote(){

  }

  getTasks(){

  }

  setTasks(){

  }

  addTask(){

  }


}
