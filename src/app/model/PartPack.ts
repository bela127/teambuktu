import {Part} from "./Part";
import {Info} from "./Info";

export class PartPack  extends Info{

  constructor(private _part: Part, private _count: number) {
    super(_part.name);
  }

  get count(): number {
    return this._count;
  }

  set count(count: number){
    this._count = count;
  }

  get part(): Part {
    return this._part;
  }
}
