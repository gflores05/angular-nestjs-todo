import { Controller, Get } from '@nestjs/common';
import { Todo } from '../../models';

@Controller('todos')
export class TodosController {

  @Get()
  findAll(): Todo[] {
    return [];
  }
}
