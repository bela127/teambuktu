import {Info} from "./Info";

export class Note extends Info{
  private text: string;

  getText(): String {
    return this.text;
  }

  setText(text : String){
    this.text = text;
  }
}
