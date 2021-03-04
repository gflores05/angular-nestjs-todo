import { ActionReducer, combineReducers, createReducer, on } from '@ngrx/store';
import * as entities from './todos.entities';
import * as actions from './todos.actions';

const _todosReducer = createReducer(
  entities.todoInitialState,
  on(actions.loadTodos, state => ({ ...state, loading: true })),
  on(actions.loadTodosSuccess, (state, { todos }) =>
    entities.todosAdapter.setAll(todos, { ...state, loading: false })
  ),
  on(actions.loadTodoSuccess, (state, { todo }) =>
    ({ ...state, selectedTodo: todo })
  ),
  on(actions.loadTodosFail, (state, action) =>
    entities.todosAdapter.removeAll({
      ...state,
      loading: false
    })
  )
);

export function todosReducer(state: entities.TodosState, action) {
  return _todosReducer(state, action);
}
