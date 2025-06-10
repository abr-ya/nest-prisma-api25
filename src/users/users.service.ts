import { Injectable } from '@nestjs/common';
import { UserRoleType } from './dto/users.types';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user-dto';

@Injectable()
export class UsersService {
  private users = [
    { id: 1, name: 'Leanne Graham', email: 'Sincere@april.biz', role: 'BASIC' },
    { id: 2, name: 'Ervin Howell', email: 'Shanna@melissa.tv', role: 'BASIC' },
    { id: 3, name: 'Clementine Bauch', email: 'Nathan@yesenia.net', role: 'MODERATOR' },
    { id: 4, name: 'Patricia Lebsack', email: 'Julianne.OConner@kory.org', role: 'MODERATOR' },
    { id: 5, name: 'Chelsey Dietrich', email: 'Lucio_Hettinger@annie.ca', role: 'ADMIN' },
  ];

  findAll(role?: UserRoleType) {
    if (role) {
      return this.users.filter((user) => user.role === role);
    }
    return this.users;
  }

  findOne(id: number) {
    const user = this.users.find((user) => user.id === id);

    return user;
  }

  create(createUserDto: CreateUserDto) {
    const usersByHighestId = [...this.users].sort((a, b) => b.id - a.id);
    const newUser = { id: usersByHighestId[0].id + 1, ...createUserDto };
    this.users.push(newUser);

    return newUser;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    this.users = this.users.map((user) => {
      if (user.id === id) return { ...user, ...updateUserDto };
      return user;
    });

    return this.findOne(id);
  }

  delete(id: number) {
    const userToRemove = this.findOne(id);
    this.users = this.users.filter((user) => user.id !== id);

    return userToRemove;
  }
}
