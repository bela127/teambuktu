import {DataObject} from "./DataObject";

export class Info extends DataObject{

  constructor(private _name: string) {
    super(_name);
  }

  get name(): string {
    return this._name;
  }
}
