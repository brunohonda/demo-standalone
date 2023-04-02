import { Route } from '@angular/router';

import { CoursesListComponent } from './courses-list/courses-list.component';

export const COURSES_ROUTES: Route[] = [
  { path: 'list', component: CoursesListComponent },
  { path: 'new', loadComponent: () => import('./courses-new/courses-new.component').then(m => m.CoursesNewComponent) },
  { path: 'edit/:id', loadComponent: () => import('./courses-edit/courses-edit.component') },
  { path: '', redirectTo: 'list', pathMatch: 'prefix' },
];
