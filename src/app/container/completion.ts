import {TimeRange} from "./time-range";
import {Item} from "./item";

export class Completion {
  id: number;
  number: string;
  customer: number;
  device: number;
  serviceDate: Date;
  realTime: TimeRange;
  items: Item[];
}
