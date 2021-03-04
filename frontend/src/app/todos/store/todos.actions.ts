import { createAction, props } from '@ngrx/store';
import { Todo } from '../types';

const MODULE = '[Todos]';

export const loadTodos = createAction(`${MODULE} Load Todos`);

export const loadTodosSuccess = createAction(
  `${MODULE} Load Todos Success`,
  props<{ todos: Todo[] }>()
);

export const loadTodosFail = createAction(
  `${MODULE} Load Todos Fail`,
  props<{ error: string }>()
);

export const loadTodo = createAction(
  `${MODULE} Load Todo`,
  props<{ id: number }>()
);

export const loadTodoSuccess = createAction(
  `${MODULE} Load Todo Success`,
  props<{ todo: Todo }>()
);

export const loadTodoFail = createAction(
  `${MODULE} Load Todo Fail`,
  props<{ error: string }>()
);

export const deleteTodo = createAction(
  `${MODULE} Delete Todo`,
  props<{ id: number }>()
);

export const saveTodo = createAction(
  `${MODULE} Save Todo`,
  props<{ todo: Todo }>()
);
