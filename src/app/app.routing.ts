import { Routes } from '@angular/router';

export const APP_ROUTES: Routes = [
  { path: 'courses', loadChildren: () => import('./courses/courses.routing').then(m => m.COURSES_ROUTES) },
  { path: 'students', loadChildren: () => import('./students/students.routing') },
];
