import { EntityState, createEntityAdapter } from '@ngrx/entity';
import { User} from '../types';

export interface UsersState extends EntityState<User> {
  loading: boolean;
}

export const usersAdapter = createEntityAdapter<User>();

const initialState = {
  loading: false
};

export const userInitialState: UsersState = usersAdapter.getInitialState(
  initialState
);
