import {Info} from "./Info";

enum Status {
  Open,
  Finished,
}

export class Note extends Info {
  private text: string;
  private status: Status;
  private creationDate: Date;

  constructor(name: string, text?: string) {
    super(name);
    this.text = text && text || "(no text)";
  }

  getText(): string {
    return this.text;
  }

  setText(text : string){
    this.text = text;
  }

  getStatus(): Status {
    return this.status;
  }

  setStatus(status : Status){
    this.status = status;
  }

  getCreationDate(): Date {
    return this.creationDate;
  }

  setCreationDate(creationDate : Date){
    this.creationDate = creationDate;
  }
}
