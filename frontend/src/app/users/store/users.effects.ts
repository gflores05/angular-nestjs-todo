import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import * as actions from './users.actions';
import { UsersService } from '../services/users.service';
import { catchError, map, switchMap } from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable()
export class UsersEffects {
  loadUsers$ = createEffect(() =>
    this.actions$.pipe(
      ofType(actions.loadUsers),
      switchMap(_ =>
        this.usersService.getUsers().pipe(
          map(users => actions.loadUsersSuccess({ users })),
          catchError((error: Error) =>
            of(
              actions.loadUsersFail({
                error: error.message
              })
            )
          )
        )
      )
    )
  );

  deleteUser$ = createEffect(() =>
    this.actions$.pipe(
      ofType(actions.deleteUser),
      switchMap(action =>
        this.usersService.delete(action.id).pipe(
          map(_ => actions.loadUsers()),
          catchError((error: Error) =>
            of(
              actions.loadUsersFail({
                error: error.message
              })
            )
          )
        )
      )
    )
  );

  constructor(
    private actions$: Actions,
    private usersService: UsersService
  ) {}
}