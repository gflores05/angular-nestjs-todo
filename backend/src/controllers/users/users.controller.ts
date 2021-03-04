import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { UserService } from 'src/services/users.service';
import { User } from '../../models';

@Controller('users')
export class UsersController {

  constructor(private service: UserService) {}

  @Get()
  async findAll(): Promise<User[]> {
    return await this.service.findAll();
  }

  @Post()
  async create(@Body() obj: User) {
    await this.service.insert(obj);

    return {status: "ok"}
  }

  @Get(':id')
  async findOne(@Param('id') id: number) {
    return await this.service.findById(id);
  }

  @Put()
  async update(@Body() obj: User) {
    await this.service.update(obj);
    return {status: "ok"}
  }

  @Delete(':id')
  async remove(@Param('id') id: number) {
    await this.service.delete(id);
    return {status: "ok"}
  }
}
