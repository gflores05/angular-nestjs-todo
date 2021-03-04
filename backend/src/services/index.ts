import { DbService } from './db.service';
import { ModelService } from './model.service';
import { UserService } from './users.service';
import { TodoService } from './todos.service';
import { FireService } from './firedb.service';

export const services = [DbService, ModelService, UserService, TodoService, FireService];
