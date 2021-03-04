import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { User } from '../types';
import { Observable } from 'rxjs';

@Injectable()
export class UsersService {
  list(): Observable<User[]> {
    return this.http
      .get<User[]>(
        `${environment.apiUrl}/users`
      )
      .pipe(map((results) => results));
  }

  delete(id: number) {
    return this.http
      .delete(
        `${environment.apiUrl}/users/${id}`
      )
      .pipe(map((response) => response));
  }

  save(user: User) {
    if (user.id && user.id !== 0) {
      return this.http
      .put(
        `${environment.apiUrl}/users`,
        user
      )
      .pipe(map((response) => response));
    }
    return this.http
      .post(
        `${environment.apiUrl}/users`,
        user
      )
      .pipe(map((response) => response));
  }

  get(id: number): Observable<User> {
    return this.http
      .get<User>(
        `${environment.apiUrl}/users/${id}`
      )
      .pipe(map((results) => results));
  }

  constructor(
    private http: HttpClient
  ) {}
}