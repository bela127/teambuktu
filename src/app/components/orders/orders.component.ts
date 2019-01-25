import {Component, OnInit, ViewChild} from '@angular/core';
import {Order} from "../../container/order";
import {MatDialog, MatTable} from "@angular/material";
import {OrderDetailDialogComponent} from "../order-detail-dialog/order-detail-dialog.component";
import {OrderStatus} from "../../container/order-status.enum";
import {WarehouseService} from "../../services/warehouse.service";

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {

  private orders: Order[];
  private displayOrders: Order[];

  private displayedColumns = ['number', 'orderDate', 'lastUpdate', 'status', 'edit'];
  @ViewChild('ordersTable') private ordersTable: MatTable<Order>;

  constructor(private orderDetailDialog: MatDialog,
              private warehouseService: WarehouseService) {
  }

  ngOnInit() {
    this.getOrders();
  }

  getOrders(): void {
    this.warehouseService.getOrders()
      .subscribe(orders => {
        this.orders = orders;
        this.sortOrders();

        if (this.ordersTable) {
          this.ordersTable.renderRows();
        }
      });
  }

  sortOrders(): void {
    let cancelledOrDeliveredOrders = this.orders
      .filter(item => item.status == OrderStatus.Cancelled || item.status == OrderStatus.Delivered);

    let excessOrders = cancelledOrDeliveredOrders.length > 10 ? cancelledOrDeliveredOrders.length - 10 : 0;

    this.displayOrders = this.orders
      .sort(this.compareOrders)
      .slice(0, this.orders.length - excessOrders);
  }

  compareOrders(a: Order, b: Order): number {
    if (a.status == b.status) {
      return 0;
    } else {
      if (a.status == OrderStatus.New
        || a.status == OrderStatus.InProgress && b.status != OrderStatus.New
        || a.status == OrderStatus.Delivered && b.status == OrderStatus.Cancelled) {
        return -1;
      } else {
        return 1;
      }
    }
  }

  edit(order: Order): void {
    const dialogRef = this.orderDetailDialog.open(OrderDetailDialogComponent, {
      data: order,
    });

    dialogRef.afterClosed()
      .subscribe(result => {
        if (result) {
          let order: Order = result;
          order.lastUpdate = new Date();

          this.warehouseService.updateOrder(order)
            .subscribe(() => {
              this.getOrders();
            });
        }
      })
  }

  public add(): void {
    let order = new Order();
    order.number = "";
    order.description = "";
    order.status = OrderStatus.New;
    order.statusNote = "";
    order.items = [];
    order.orderDate = new Date();

    const dialogRef = this.orderDetailDialog.open(OrderDetailDialogComponent, {
      data: order,
    });

    dialogRef.afterClosed()
      .subscribe(result => {
        if (result) {
          let order: Order = result;
          order.lastUpdate = new Date();

          this.warehouseService.addOrder(order)
            .subscribe(order => {
              this.orders.push(order);
              this.sortOrders();
              this.ordersTable.renderRows();
            });
        }
      })
  }

}
