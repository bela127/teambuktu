import {Unit} from "./unit.enum";
import {Currency} from "./currency.enum";

export class Part {
  id: number;
  number: string;
  name: string;
  description: string;
  unit: Unit;
  price: number;
  currency: Currency;
}
