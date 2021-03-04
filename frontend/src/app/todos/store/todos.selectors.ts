import * as entities from './todos.entities';
import { createSelector } from '@ngrx/store';

// Todos
const selectTodosState = (state) => state.todos;

export const {
  selectAll: selectTodos
} = entities.todosAdapter.getSelectors(selectTodosState);

export const selectTodosLoading = createSelector(
  selectTodosState,
  state => state.loading
);

export const selectTodo = createSelector(
  selectTodosState,
  state => {
    return state.selectedTodo;
  }
);