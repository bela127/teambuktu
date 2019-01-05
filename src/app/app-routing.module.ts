import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CustomerDetailComponent} from "./components/customer-detail/customer-detail.component";
import {CustomersComponent} from "./components/customers/customers.component";
import {TaskDetailComponent} from "./components/task-detail/task-detail.component";
import {AppointmentDetailComponent} from "./components/appointment-detail/appointment-detail.component";
import {LoginComponent} from "./components/login/login.component";
import {TasksComponent} from "./components/tasks/tasks.component";
import {AppointmentsComponent} from "./components/appointments/appointments.component";

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'tasks', component: TasksComponent},
  {path: 'task/:id', component: TaskDetailComponent},
  {path: 'appointments', component: AppointmentsComponent},
  {path: 'appointment/:id', component: AppointmentDetailComponent},
  {path: 'customers', component: CustomersComponent},
  {path: 'customer/:id', component: CustomerDetailComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
