import { createAction, props } from '@ngrx/store';
import { User } from '../types';

const MODULE = '[Users]';

export const loadUsers = createAction(`${MODULE} Load Users`);

export const loadUsersSuccess = createAction(
  `${MODULE} Load Users Success`,
  props<{ users: User[] }>()
);

export const loadUsersFail = createAction(
  `${MODULE} Load Users Fail`,
  props<{ error: string }>()
);

export const deleteUser = createAction(
  `${MODULE} Delete User`,
  props<{ id: number }>()
);
