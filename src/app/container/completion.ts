import {TimeRange} from "./time-range";
import {Item} from "./item";
import {CompletionStatus} from "./completion-status.enum";

export class Completion {
  id: number;
  appointment: number;
  number: string;
  customer: number;
  device: number;
  serviceDate: Date;
  realTime: TimeRange;
  items: Item[];
  status: CompletionStatus;
}
