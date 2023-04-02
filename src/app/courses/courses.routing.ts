import { Route } from '@angular/router';

import { CoursesListComponent } from './courses-list/courses-list.component';
import { CoursesNewComponent } from './courses-new/courses-new.component';

export const COURSES_ROUTES: Route[] = [
  { path: 'list', component: CoursesListComponent },
  { path: 'new', component: CoursesNewComponent },
  { path: '', redirectTo: 'list', pathMatch: 'prefix' },
];
