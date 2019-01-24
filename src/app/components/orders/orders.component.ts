import {Component, OnInit, ViewChild} from '@angular/core';
import {Order} from "../../container/order";
import {OrderService} from "../../services/order.service";
import {MatDialog, MatTable} from "@angular/material";
import {OrderDetailDialogComponent} from "../order-detail-dialog/order-detail-dialog.component";
import {OrderStatus} from "../../container/order-status.enum";

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {

  private orders: Order[];

  private displayedColumns = ['number', 'orderDate', 'lastUpdate', 'status', 'edit'];
  @ViewChild('ordersTable') private ordersTable: MatTable<Order>;

  constructor(private orderDetailDialog: MatDialog,
              private orderService: OrderService) {
  }

  ngOnInit() {
    this.getOrders();
  }

  getOrders(): void {
    this.orderService.getOrders()
      .subscribe(orders => {
        this.orders = orders;

        if (this.ordersTable) {
          this.ordersTable.renderRows();
        }
      });
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

          this.orderService.updateOrder(order)
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

          this.orderService.addOrder(order)
            .subscribe(order => {
              this.orders.push(order);
              this.ordersTable.renderRows();
            });
        }
      })
  }

}
