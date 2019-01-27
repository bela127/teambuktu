import {AppRoutingModule} from './app-routing.module';

import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import {MaterialModule} from './material-module';

import {HttpClientModule} from "@angular/common/http";

import {SessionService} from './services/session.service';
import {SidenavService} from './services/sidenav.service';

import {RootComponent} from './components/root/root.component';
import {LoginComponent} from "./components/login/login.component";
import {AppointmentsComponent} from "./components/appointments/appointments.component";
import {AppointmentDetailComponent} from './components/appointment-detail/appointment-detail.component';
import {TasksComponent} from "./components/tasks/tasks.component";
import {TaskDetailComponent} from './components/task-detail/task-detail.component';
import {CustomersComponent} from './components/customers/customers.component';
import {CustomerDetailComponent} from './components/customer-detail/customer-detail.component';
import {WarehouseComponent} from './components/warehouse/warehouse.component';
import {DeviceDetailComponent} from './components/device-detail/device-detail.component';
import {DevicesComponent} from './components/devices/devices.component';
import {PartsComponent} from './components/parts/parts.component';
import {CompletionDetailComponent} from './components/completion-detail/completion-detail.component';
import {CompletionsComponent} from './components/completions/completions.component';
import {StockComponent} from './components/stock/stock.component';
import {OrdersComponent} from './components/orders/orders.component';
import {OrderDetailDialogComponent} from './components/order-detail-dialog/order-detail-dialog.component';

@NgModule({
  declarations: [
    RootComponent,
    LoginComponent,
    AppointmentsComponent,
    AppointmentDetailComponent,
    TasksComponent,
    TaskDetailComponent,
    CustomersComponent,
    CustomerDetailComponent,
    WarehouseComponent,
    DeviceDetailComponent,
    DevicesComponent,
    PartsComponent,
    CompletionDetailComponent,
    CompletionsComponent,
    StockComponent,
    OrdersComponent,
    OrderDetailDialogComponent,
  ],
  imports: [
    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    HttpClientModule,
  ],
  entryComponents: [
    OrderDetailDialogComponent
  ],
  providers: [
    SessionService,
    SidenavService],
  bootstrap: [RootComponent],
})
export class AppModule {
}
