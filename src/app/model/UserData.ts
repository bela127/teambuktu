import {Customer} from "./Customer";

class UserData {

  constructor(private userName: String, private userPwHash: String) {

  }

  getName() : String{
    return this.userName;
  }

  verifyPw(pwHash: String) : boolean{
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
