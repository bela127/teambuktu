import {AppRoutingModule} from './app-routing.module';

import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import {MaterialModule} from './material-module';

import {HttpClientModule} from "@angular/common/http";

import {SessionService} from './services/SessionService';
import {SidenavService} from './services/SidenavService';
import {DataService} from './services/DataService';
import {DataBaseService} from "./services/DataBaseService";

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
  providers: [
    SessionService,
    SidenavService,
    DataService,
    DataBaseService],
  bootstrap: [RootComponent],
})
export class AppModule {
}
