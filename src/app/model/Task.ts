import {Note} from "./Note";

export class Task extends Note{
  private _startDate: Date;

  private _endDate: Date;

  get startDate(): Date {
    return this._startDate;
  }

  set startDate(date : Date){
    this._startDate = date;
  }

  get endDate(): Date {
    return this._endDate;
  }

  set endDate(date : Date){
    this._endDate = date;
  }
}
