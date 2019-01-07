import {Datasource, Timestamp} from "./Timestamp";

export class DataObject {
  private _timestamp;

  constructor(private _id: string) {
  }

  get id() {
    return this._id;
  }

  get timestamp(){
    return this._timestamp;
  }

  updateData(datasource: Datasource){
    this._timestamp = new Timestamp(new Date(Date.now()),datasource);
  }
}
