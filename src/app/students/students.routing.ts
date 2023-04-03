import { Routes } from '@angular/router';
import { StudentsComponent } from './students.component';

export default [
  {
    path: '',
    component: StudentsComponent,
    children: [
      { path: 'list', loadComponent: () => import('./student-list/student-list.component') },
      { path: 'new', loadComponent: () => import('./student-new/student-new.component') },
      { path: '', redirectTo: 'list', pathMatch: 'full' },
    ]
  }
] as Routes;
