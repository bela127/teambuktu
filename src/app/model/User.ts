import {Info} from "./Info";
import {ContactInfo} from "./ContactInfo";

export class User extends Info{

  private _contactInfo: ContactInfo;

  constructor(name: string, private pwHash: string) {
    super(name);
  }

  validatePwHash(pwHash: string): boolean {
    return this.pwHash == pwHash;
  }

  set contactInfo(contactInfo: ContactInfo){
    this._contactInfo = contactInfo;
  }

  get contactInfo(){
    return this._contactInfo;
  }


}
