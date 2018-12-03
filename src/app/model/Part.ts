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
  private price: number;
  private partNo :string;
  private description: string;
  private unit: Unit;
  private currency: Currency;

  getPrice(): number {
    return this.price;
  }

  setPrice(price : number){
    this.price = price;
  }

  getPartNo(): string {
    return this.partNo;
  }

  setPartNo(partNo: string){
    this.partNo = partNo;
  }

  getDescription(): string {
    return this.description;
  }

  setDescription(description: string){
    this.description = description;
  }

  getUnit(): string {
    return this.unit.toString();
  }

  setUnit(unit: Unit){
    this.unit = unit;
  }

  getCurrency(): string {
    return this.currency.toString();
  }

  setCurrencyn(currency: Currency){
    this.currency = currency;
  }

}
