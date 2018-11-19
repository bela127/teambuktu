import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from './components/login';
import {AppointmentsComponent} from './components/appointments';
import {TasksComponent} from './components/tasksnotes';
import {TaskComponent} from "./components/task";
import {CustomerlistComponent} from "./components/customerlist";
import {AppointmentComponent} from './components/appointment';
import {CustomerdetailComponent} from "./components/customerdetail";

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'tasks', component: TasksComponent},
  {path: 'task/:id', component: TaskComponent},
  {path: 'appointments', component: AppointmentsComponent},
  {path: 'appointment/:id', component: AppointmentComponent},
  {path: 'customerlist', component: CustomerlistComponent},
  {path: 'customer/:id', component: CustomerdetailComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
