import {Component, OnInit} from '@angular/core';
import {Part} from "../../container/part";
import {WarehouseService} from "../../services/warehouse.service";
import {Item} from "../../container/item";

class DisplayStockItem {
  amount: number;
  part: Part;
}

@Component({
  selector: 'app-stock',
  templateUrl: './stock.component.html',
  styleUrls: ['./stock.component.css']
})
export class StockComponent implements OnInit {

  private items: Item[];

  private allParts: Part[];

  private displayedColumns = ['amount', 'unit', 'number', 'name', 'price', 'currency'];
  private displayItems: DisplayStockItem[];

  constructor(private warehouseService: WarehouseService) {
  }

  ngOnInit() {
    this.warehouseService.getParts()
      .subscribe(parts => {
        this.allParts = parts;

        this.getStock();
      });
  }

  getStock(): void {
    this.warehouseService.getStock()
      .subscribe(items => {
        this.items = items;

        this.buildDisplayItems();
      });
  }

  buildDisplayItems(): void {
    this.displayItems = this.items
      .map(ai => {
        let di = new DisplayStockItem();
        di.amount = ai.amount;
        di.part = this.allParts
          .find(p => ai.part == p.id);
        return di;
      });
  }
}
