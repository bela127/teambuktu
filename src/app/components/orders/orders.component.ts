import {Component, OnInit} from '@angular/core';
import {Order} from "../../container/order";
import {OrderService} from "../../services/order.service";

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {

  private orders: Order[];

  private displayedColumns = ['number', 'orderDate', 'lastUpdate', 'status', 'edit'];

  constructor(private orderService: OrderService) {
  }

  ngOnInit() {
    this.orderService.getOrders()
      .subscribe(orders => this.orders = orders);
  }

  edit(order: Order): void {
    console.log("Editing order " + JSON.stringify(order));
  }

  public add(): void {
    console.log("Adding order");
  }

}
