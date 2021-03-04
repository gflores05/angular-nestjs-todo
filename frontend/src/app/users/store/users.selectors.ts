import * as entities from './users.entities';
import { createSelector } from '@ngrx/store';

// Users
const selectUsersState = (state) => {
  return state.users;
};

export const {
  selectAll: selectUsers
} = entities.usersAdapter.getSelectors(selectUsersState);

export const selectUsersLoading = createSelector(
  selectUsersState,
  state => state.loading
);
