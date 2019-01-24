import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material";
import {Order} from "../../container/order";
import {OrderStatus} from "../../container/order-status.enum";
import {Item} from "../../container/item";
import {Part} from "../../container/part";
import {WarehouseService} from "../../services/warehouse.service";
import {DisplayItem} from "../../container/display-item";

@Component({
  selector: 'app-order-detail-dialog',
  templateUrl: './order-detail-dialog.component.html',
  styleUrls: ['./order-detail-dialog.component.css']
})
export class OrderDetailDialogComponent implements OnInit {

  private order: Order;

  private allParts: Part[];
  private allStatusVariants: string[];

  private newItem: Item;
  private displayItems: DisplayItem[];

  private displayedColumns = ['amount', 'unit', 'number', 'name', 'price', 'currency', 'action'];

  constructor(@Inject(MAT_DIALOG_DATA) private data: any,
              private dialogRef: MatDialogRef<OrderDetailDialogComponent>,
              private warehouseService: WarehouseService) {
  }

  ngOnInit() {
    this.newItem = new Item();

    this.getParts();

    this.allStatusVariants = [];
    for (let unitKey in OrderStatus) {
      this.allStatusVariants.push(unitKey);
    }

    this.order = this.data;

  }

  getParts(): void {
    this.warehouseService.getParts()
      .subscribe(parts => {
        this.allParts = parts;

        this.buildDisplayItems();
      });
  }

  buildDisplayItems(): void {
    this.displayItems = this.order.items
      .map(ai => {
        let di = new DisplayItem();
        di.amount = ai.amount;
        di.part = this.allParts
          .find(p => ai.part == p.id);
        return di;
      });
  }

  isNewItemFormFilled(): boolean {
    return (this.newItem != undefined
      && this.newItem.amount != undefined
      && this.newItem.part != undefined
    );
  }

  addPart(): void {
    this.order.items.push(this.newItem);
    this.newItem = new Item();
    this.buildDisplayItems();
  }

  removeItem(item: DisplayItem): void {
    let indexToRemove = this.order.items
      .findIndex(i => i.amount == item.amount && i.part == item.part.id);

    this.order.items = this.order.items
      .filter((_, index) => index != indexToRemove);

    this.buildDisplayItems();
  }

  isNewOrder(): boolean {
    return this.order.id == undefined;
  }

  isNewOrderFormFilled(): boolean {
    return (this.order != undefined
      && this.order.number != undefined
      && this.order.description != undefined
      && this.order.items != undefined
      && this.order.items.length > 0
    );
  }

  saveAndClose(): void {
    this.dialogRef.close(this.order);
  }

}
