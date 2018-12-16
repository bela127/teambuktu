import {Info} from "./Info";
import {PartPack} from "./PartPack";

export class Stock extends Info{

  private _description: string;
  private _stockItems: PartPack[] = [];


  get description(): string {
    return this._description;
  }

  set description(description: string){
    this._description = description;
  }

  get stockItems(){
    return this._stockItems;
  }

  set stockItems(stockItems: PartPack[]){
    this._stockItems = stockItems;
  }

  addStockItem(stockItem: PartPack){
    this._stockItems.push(stockItem);
  }

  addStockItems(stockItems: PartPack[]){
    this._stockItems = this._stockItems.concat(stockItems);
  }
}
