import {Item} from "./item";
import {OrderStatus} from "./order-status.enum";

export class Order {
  id: number;
  number: string;
  description: string;
  orderDate: Date;
  lastUpdate: Date;
  status: OrderStatus;

  /**
   * Info on the status change.
   */
  statusNote: string;
  items: Item[];
}
