import { ActionReducer, combineReducers, createReducer, on } from '@ngrx/store';
import * as entities from './users.entities';
import * as actions from './users.actions';

const _usersReducer = createReducer(
  entities.userInitialState,
  on(actions.loadUsers, state => ({ ...state, loading: true })),
  on(actions.loadUsersSuccess, (state, { users }) =>
    entities.usersAdapter.setAll(users, { ...state, loading: false })
  ),
  on(actions.loadUsersFail, (state, action) =>
    entities.usersAdapter.removeAll({
      ...state,
      loading: false
    })
  )
);

export function usersReducer(state: entities.UsersState, action) {
  return _usersReducer(state, action);
}
