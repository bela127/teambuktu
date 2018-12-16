import {Info} from "./Info";

export class User extends Info{

  private _email: string;
  private _phone: string;

  constructor(name: string, private pwHash: string) {
    super(name);
  }

  validatePwHash(pwHash: string): boolean {
    return this.pwHash == pwHash;
  }

  set email(email: string){
    this._email = email;
  }

  get email(){
    return this._email;
  }

  set phone(phone: string){
    this._phone = phone;
  }

  get phone(){
    return this._phone;
  }
}
