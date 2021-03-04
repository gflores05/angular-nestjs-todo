import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Todo } from '../types';
import { Observable } from 'rxjs';

@Injectable()
export class TodosService {
  list(): Observable<Todo[]> {
    return this.http
      .get<Todo[]>(
        `${environment.apiUrl}/todos`
      )
      .pipe(map((results) => results));
  }

  delete(id: number) {
    return this.http
      .delete(
        `${environment.apiUrl}/todos/${id}`
      )
      .pipe(map((response) => response));
  }

  save(todo: Todo) {
    if (todo.id) {
      return this.http
      .put(
        `${environment.apiUrl}/todos`,
        {...todo, userId: todo.userid}
      )
      .pipe(map((response) => response));
    }
    return this.http
      .post(
        `${environment.apiUrl}/todos`,
        {...todo, userId: todo.userid}
      )
      .pipe(map((response) => response));
  }

  get(id: number): Observable<Todo> {
    return this.http
      .get<Todo>(
        `${environment.apiUrl}/todos/${id}`
      )
      .pipe(map((results) => results));
  }

  constructor(
    private http: HttpClient
  ) {}
}