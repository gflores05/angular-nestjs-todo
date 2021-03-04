import { Injectable } from '@nestjs/common';

import { ModelService } from './model.service';
import { Todo } from '../models';
import { DbService } from './db.service';
import { FireService } from './firedb.service';

@Injectable()
export class TodoService extends ModelService<Todo>{
  constructor(dbService: DbService, fireService: FireService) {
    super(dbService, fireService);

    this.tableName = 'todos';
    this.fields = ['id', 'userId', 'title', 'completed'];
  }
}
