import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Todo } from '../types';
import * as actions from './todos.actions';
import * as selectors from './todos.selectors';

@Injectable()
export class TodosFacade {

  todos$ = this.store.select(selectors.selectTodos);
  todosLoading$ = this.store.select(selectors.selectTodosLoading);
  todo$ = this.store.select(selectors.selectTodo);
  
  constructor(private store: Store) {}

  loadTodos() {
    this.store.dispatch(actions.loadTodos());
  }

  loadTodo(id) {
    this.store.dispatch(actions.loadTodo({id}));
  }

  deleteTodo(id: number) {
    this.store.dispatch(actions.deleteTodo({id}));
  }
  saveTodo(todo: Todo) {
    this.store.dispatch(actions.saveTodo({todo}));
  }
}
