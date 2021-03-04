import { Injectable } from '@nestjs/common';

import { ModelService } from './model.service';
import { Todo } from '../models';
import { DbService } from './db.service';

@Injectable()
export class TodoService extends ModelService<Todo>{
  constructor(dbService: DbService) {
    super(dbService);

    this.tableName = 'todos';
    this.fields = ['id', 'userId', 'title', 'completed'];
  }
}
