import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable, take } from 'rxjs';

import { API_URL } from './../../../../main';
import { Course } from '@shared/interfaces/course.interface';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  constructor(
    private readonly httpClient: HttpClient,
    @Inject(API_URL) private readonly apiUrl: string
  ) { }

  get(): Observable<Course[]> {
    return this.httpClient
      .get<Course[]>(`${ this.apiUrl }/courses`)
      .pipe(take(1));
  }

  create(data: Course) {
    return this.httpClient
      .post(`${ this.apiUrl }/courses`, data)
      .pipe(take(1));
  }
}
