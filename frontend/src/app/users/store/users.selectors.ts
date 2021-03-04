import * as entities from './users.entities';
import { createSelector } from '@ngrx/store';

// Users
const selectUsersState = (state) => state.users;

export const {
  selectAll: selectUsers
} = entities.usersAdapter.getSelectors(selectUsersState);

export const selectUsersLoading = createSelector(
  selectUsersState,
  state => state.loading
);

export const selectUser = createSelector(
  selectUsersState,
  state => {
    return state.selectedUser;
  }
);