import { Routes } from '@angular/router';
import { TasksComponent } from './tasks/tasks.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: '/users/u1',
    pathMatch: 'full',
  },
  {
    path: 'users/:userId',
    component: TasksComponent,
    title: 'User Tasks',
  },
];
