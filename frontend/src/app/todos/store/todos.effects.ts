import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import * as actions from './todos.actions';
import { TodosService } from '../services/todos.service';
import { catchError, map, switchMap, tap } from 'rxjs/operators';
import { of } from 'rxjs';
import { Router } from '@angular/router';

@Injectable()
export class TodosEffects {
  loadTodos$ = createEffect(() =>
    this.actions$.pipe(
      ofType(actions.loadTodos),
      switchMap(_ =>
        this.todosService.list().pipe(
          map(todos => actions.loadTodosSuccess({ todos })),
          catchError((error: Error) =>
            of(
              actions.loadTodosFail({
                error: error.message
              })
            )
          )
        )
      )
    )
  );

  loadTodo$ = createEffect(() =>
    this.actions$.pipe(
      ofType(actions.loadTodo),
      switchMap(action =>
        this.todosService.get(action.id).pipe(
          map(todo => actions.loadTodoSuccess({ todo })),
          catchError((error: Error) =>
            of(
              actions.loadTodosFail({
                error: error.message
              })
            )
          )
        )
      )
    )
  );

  deleteTodo$ = createEffect(() =>
    this.actions$.pipe(
      ofType(actions.deleteTodo),
      switchMap(action =>
        this.todosService.delete(action.id).pipe(
          map(_ => actions.loadTodos()),
          catchError((error: Error) =>
            of(
              actions.loadTodosFail({
                error: error.message
              })
            )
          )
        )
      )
    )
  );

  saveTodo$ = createEffect(() =>
    this.actions$.pipe(
      ofType(actions.saveTodo),
      switchMap(action =>
        this.todosService.save(action.todo).pipe(
          tap(_ => this.router.navigateByUrl('/todos')),
          catchError((error: Error) =>
            of(
              actions.loadTodosFail({
                error: error.message
              })
            )
          )
        )
      )
    ), {dispatch: false}
  );

  constructor(
    private actions$: Actions,
    private todosService: TodosService,
    private router: Router
  ) {}
}