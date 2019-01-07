import {Info} from "./Info";

export enum Status {
  Open,
  Finished,
  Canceld,
}

export class Note extends Info {
  private _text: string;
  private _status: Status;
  private _creationDate: Date;

  constructor(name: string, text?: string, open?: boolean, creationDate?: Date) {
    super(name);
    this._text = text && text || "(no text)";
    this._creationDate = creationDate && creationDate || new Date();
    this._status = Status.Open;
  }

  get text(): string {
    return this._text;
  }

  set text(text : string){
    this._text = text;
  }

  get status(): Status {
    return this._status;
  }

  set status(status : Status){
    this._status = status;
  }

  get creationDate(): Date {
    return this._creationDate;
  }

  set creationDate(creationDate : Date){
    this._creationDate = creationDate;
  }
}
