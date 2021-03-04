import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { User } from '../types';
import { Observable } from 'rxjs';

@Injectable()
export class UsersService {
  getUsers(): Observable<User[]> {
    return this.http
      .get<User[]>(
        `${environment.apiUrl}/users`
      )
      .pipe(map((results) => results));
  }

  constructor(
    private http: HttpClient
  ) {}
}