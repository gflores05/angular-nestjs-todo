import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { User } from '../types';
import * as actions from './users.actions';
import * as selectors from './users.selectors';

@Injectable()
export class UsersFacade {

  users$ = this.store.select(selectors.selectUsers);
  usersLoading$ = this.store.select(selectors.selectUsersLoading);
  user$ = this.store.select(selectors.selectUser);
  
  constructor(private store: Store) {}

  loadUsers() {
    this.store.dispatch(actions.loadUsers());
  }

  deleteUser(id: number) {
    this.store.dispatch(actions.deleteUser({id}));
  }
  saveUser(user: User) {
    this.store.dispatch(actions.saveUser({user}));
  }
}
