import { provideHttpClient } from '@angular/common/http';
import { InjectionToken } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';

import { AppComponent } from './app/app.component';
import { APP_ROUTES } from './app/app.routing';


export const API_URL = new InjectionToken<string>('api url');

bootstrapApplication(
  AppComponent,
  {
    providers: [
      { provide: API_URL, useValue: 'http://localhost:3000' },
      provideRouter(APP_ROUTES),
      provideHttpClient(),
    ],
  })
  .catch(err => console.error(err));

