import { Body, Controller, Delete, Get, Param, Patch, Post, Query } from '@nestjs/common';
import { UserRoleType } from './users.types';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get() // GET /users or /users?role=value
  findAll(@Query('role') role?: UserRoleType) {
    return this.usersService.findAll(role);
  }

  @Get(':id') // GET /users/:id
  findOne(@Param('id') id: string) {
    return this.usersService.findOne(Number(id));
  }

  @Post() // POST /users
  create(@Body() user: any) {
    return this.usersService.create(user);
  }

  @Patch(':id') // PATCH /users/:id
  update(@Param('id') id: string, @Body() userData: any) {
    return this.usersService.update(Number(id), userData);
  }

  @Delete(':id') // DELETE /users/:id
  delete(@Param('id') id: string) {
    return this.usersService.delete(Number(id));
  }
}
