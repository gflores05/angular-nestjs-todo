import { EntityState, createEntityAdapter } from '@ngrx/entity';
import { Todo} from '../types';

export interface TodosState extends EntityState<Todo> {
  loading: boolean;
  selectedTodo: Todo;
}

export const todosAdapter = createEntityAdapter<Todo>();

const initialState = {
  loading: false,
  selectedTodo: {} as Todo
};

export const todoInitialState: TodosState = todosAdapter.getInitialState(
  initialState
);
