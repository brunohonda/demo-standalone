import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable, take } from 'rxjs';

import { API_URL } from './../../../../main';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(
    private readonly httpClient: HttpClient,
    @Inject(API_URL) private readonly apiUrl: string
  ) { }

  get(): Observable<string[]> {
    return this.httpClient
      .get<string[]>(`${ this.apiUrl }/categories`)
      .pipe(take(1));
  }
}
