import {Datasource, Timestamp} from "./Timestamp";

export class Info {
  private _timestamp;

  constructor(private _name: string) {
  }

  get name(): string {
    return this._name;
  }

  get id() {
    return this._name;
  }

  get timestamp(){
    return this._timestamp;
  }

  updateData(datasource: Datasource){
    this._timestamp = new Timestamp(new Date(Date.now()),datasource);
  }
}
