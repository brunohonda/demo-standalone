import { Route } from '@angular/router';

import { CoursesListComponent } from './courses-list/courses-list.component';

export const COURSES_ROUTES: Route[] = [
  { path: '', component: CoursesListComponent }
];
