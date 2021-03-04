import { Injectable } from '@nestjs/common';

import { ModelService } from './model.service';
import { User } from '../models';
import { DbService } from './db.service';
import { FireService } from './firedb.service';

@Injectable()
export class UserService extends ModelService<User>{
  constructor(dbService: DbService, fireService: FireService) {
    super(dbService, fireService);

    this.tableName = 'users';
    this.fields = ['id', 'name', 'username', 'email', 'address', 'phone', 'website', 'company'];
  }
}
