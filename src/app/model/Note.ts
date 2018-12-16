import {Info} from "./Info";

enum Status {
  Open,
  Finished,
}

export class Note extends Info {
  private _text: string;
  private _status: Status;
  public open: boolean; // alternative to two-option-enum?
  private _creationDate: Date;

  constructor(name: string, text?: string, open?: boolean, creationDate?: Date) {
    super(name);
    this._text = text && text || "(no text)";
    this._creationDate = creationDate && creationDate || new Date();
    this._status = this.open ? Status.Open : Status.Finished;
    this.open = open == undefined ? true : open;
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
