import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CustomerDetailComponent} from "./components/customer-detail/customer-detail.component";
import {CustomersComponent} from "./components/customers/customers.component";
import {TaskDetailComponent} from "./components/task-detail/task-detail.component";
import {AppointmentDetailComponent} from "./components/appointment-detail/appointment-detail.component";
import {LoginComponent} from "./components/login/login.component";
import {TasksComponent} from "./components/tasks/tasks.component";
import {AppointmentsComponent} from "./components/appointments/appointments.component";
import {WarehouseComponent} from "./components/warehouse/warehouse.component";
import {DeviceDetailComponent} from "./components/device-detail/device-detail.component";
import {DevicesComponent} from "./components/devices/devices.component";
import {CompletionDetailComponent} from "./components/completion-detail/completion-detail.component";
import {CompletionsComponent} from "./components/completions/completions.component";

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'tasks', component: TasksComponent},
  {path: 'task/:id', component: TaskDetailComponent},
  {path: 'appointments', component: AppointmentsComponent},
  {path: 'appointment/:id', component: AppointmentDetailComponent},
  {path: 'customers', component: CustomersComponent},
  {path: 'customer/:id', component: CustomerDetailComponent},
  {path: 'warehouse', component: WarehouseComponent},
  {path: 'devices', component: DevicesComponent},
  {path: 'device/:id', component: DeviceDetailComponent},
  {path: 'completions', component: CompletionsComponent},
  {path: 'completion/:id', component: CompletionDetailComponent},
  {path: 'completion/:id/:aid', component: CompletionDetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
