import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { TodoService } from 'src/services/todos.service';
import { Todo } from '../../models';

@Controller('todos')
export class TodosController {

  constructor(private service: TodoService) {}

  @Get()
  async findAll(): Promise<Todo[]> {
    return await this.service.findAll();
  }

  @Post()
  async create(@Body() obj: Todo) {
    await this.service.insert(obj);

    return {status: "ok"}
  }

  @Get(':id')
  async findOne(@Param('id') id: number) {
    return await this.service.findById(id);
  }

  @Put()
  async update(@Body() obj: Todo) {
    await this.service.update(obj);
    return {status: "ok"}
  }

  @Delete(':id')
  async remove(@Param('id') id: number) {
    await this.service.delete(id);
    return {status: "ok"}
  }
}
