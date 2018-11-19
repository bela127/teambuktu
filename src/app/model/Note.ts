import {Info} from "./Info";

export class Note extends Info {
  private text: string;

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
}
