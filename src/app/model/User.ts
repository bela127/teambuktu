import {Info} from "./Info";

export class User extends Info{

  private email: string;
  private phone: string;

  constructor(name: string, private pwHash: string) {
    super(name);
  }

  validatePwHash(pwHash: string): boolean {
    return this.pwHash == pwHash;
  }

  setEmail(email: string){
    this.email = email;
  }

  getEmail(){
    return this.email;
  }

  setPhone(phone: string){
    this.phone = phone;
  }

  getPhone(){
    return this.phone;
  }
}
