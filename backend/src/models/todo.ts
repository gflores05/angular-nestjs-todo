import { Model } from './model';

export interface Todo extends Model {
  userId: number;
  title: string;
  completed: boolean;
}
