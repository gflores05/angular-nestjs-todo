import { EntityState, createEntityAdapter } from '@ngrx/entity';
import { User} from '../types';

export interface UsersState extends EntityState<User> {
  loading: boolean;
  selectedUser: User;
}

export const usersAdapter = createEntityAdapter<User>();

const initialState = {
  loading: false,
  selectedUser: {} as User
};

export const userInitialState: UsersState = usersAdapter.getInitialState(
  initialState
);
