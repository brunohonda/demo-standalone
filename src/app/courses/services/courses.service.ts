import { Inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { API_URL } from '../../../main';
import { Observable, take } from 'rxjs';
import { Course } from 'src/app/shared/interface/couse.interface';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  constructor(
    private readonly httpClient: HttpClient,
    @Inject(API_URL) private readonly apiUrl: string
  ) { }

  get(): Observable<Course[]> {
    return this.httpClient
      .get<Course[]>(`${ this.apiUrl }/courses`)
      .pipe(take(1));
  }
}
