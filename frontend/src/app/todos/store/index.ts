import { TodosEffects } from './todos.effects';
import { TodosFacade } from './todos.facade';

export const effects = [TodosEffects];
export const facades = [TodosFacade];

export * from './todos.actions';
export * from './todos.entities';
export * from './todos.reducers';
export * from './todos.selectors';
