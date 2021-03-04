import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import * as actions from './users.actions';
import * as selectors from './users.selectors';

@Injectable()
export class UsersFacade {

  users$ = this.store.select(selectors.selectUsers);
  usersLoading$ = this.store.select(selectors.selectUsersLoading);

  constructor(private store: Store) {}

  loadUsers() {
    this.store.dispatch(actions.loadUsers());
  }
}
