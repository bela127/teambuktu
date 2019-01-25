import {Component, OnInit} from '@angular/core';
import {Part} from "../../container/part";
import {WarehouseService} from "../../services/warehouse.service";
import {Item} from "../../container/item";
import {DisplayItem} from "../../container/display-item";
import {Order} from "../../container/order";
import {OrderStatus} from "../../container/order-status.enum";

@Component({
  selector: 'app-stock',
  templateUrl: './stock.component.html',
  styleUrls: ['./stock.component.css']
})
export class StockComponent implements OnInit {

  private items: Item[];

  private allParts: Part[];
  private allOrders: Order[];

  private displayedColumns = ['amount', 'unit', 'number', 'name', 'price', 'currency'];
  private displayItems: DisplayItem[];

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
    this.warehouseService.getOrders()
      .subscribe(orders => {
        console.log("start computing stock");
        this.allOrders = orders
          .filter(o => o.status == OrderStatus.Delivered);

        this.items = [];
        let maxPartId = this.allParts.map(p => p.id)
          .sort()[this.allParts.length - 1];

        for (let i = 0; i <= maxPartId; i++) {
          this.items.push({part: i, amount: 0} as Item);
        }

        this.allOrders
          .forEach(o => {
            o.items.forEach(oi => this.items[oi.part].amount += oi.amount)
          });

        this.items = this.items
          .filter(i => i.amount > 0);

        this.buildDisplayItems();
        console.log("done computing stock")
      });
  }

  buildDisplayItems(): void {
    this.displayItems = this.items
      .map(ai => {
        let di = new DisplayItem();
        di.amount = ai.amount;
        di.part = this.allParts
          .find(p => ai.part == p.id);
        return di;
      });
  }
}
