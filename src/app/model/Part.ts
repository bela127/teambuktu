import {Info} from "./Info";

enum Unit{
  piece,
  meter,
  kg,
  liter,
  box,
}

enum Currency {
  EUR,
  USD,
}

export class Part extends Info{
  private _price: number;
  private _partNo :string;
  private _description: string;
  private _unit: Unit;
  private _currency: Currency;

  get price(): number {
    return this._price;
  }

  set price(price : number){
    this._price = price;
  }

  get partNo(): string {
    return this._partNo;
  }

  set partNo(partNo: string){
    this._partNo = partNo;
  }

  get description(): string {
    return this._description;
  }

  set description(description: string){
    this._description = description;
  }

  get unit(): Unit {
    return this._unit;
  }

  set unit(unit: Unit){
    this._unit = unit;
  }

  get currency(): Currency {
    return this._currency;
  }

  set currencyn(currency: Currency){
    this._currency = currency;
  }

}
