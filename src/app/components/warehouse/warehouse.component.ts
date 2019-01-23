import {Component, OnInit, ViewChild} from '@angular/core';
import {OrdersComponent} from "../orders/orders.component";

@Component({
  selector: 'app-warehouse',
  templateUrl: './warehouse.component.html',
  styleUrls: ['./warehouse.component.css']
})
export class WarehouseComponent implements OnInit {

  @ViewChild("orders") private orders: OrdersComponent;

  constructor() {
  }

  ngOnInit() {
  }

  addOrder(): void {
    this.orders.add();
  }

}
