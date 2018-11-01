import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './compontents/login';
import { AppointmentsComponent } from './compontents/appointments';
import { TasksComponent } from './compontents/tasks';

const routes: Routes = [
   { path: 'login', component: LoginComponent },
   { path: 'tasks', component: TasksComponent },
   { path: 'appointments', component: AppointmentsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
