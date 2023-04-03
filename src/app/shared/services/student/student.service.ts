import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Student } from '@shared/interfaces/student.interface';
import { Observable, take } from 'rxjs';

import { API_URL } from './../../../../main';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(
    private readonly httpClient: HttpClient,
    @Inject(API_URL) private readonly apiUrl: string
  ) { }

  get(): Observable<Student[]> {
    return this.httpClient
      .get<Student[]>(`${this.apiUrl}/students`)
      .pipe(take(1))
  }

  create(data: Student): Observable<void> {
    return this.httpClient
      .post<void>(`${this.apiUrl}/students`, data)
      .pipe(take(1));
  }
}
