import { Injectable } from '@nestjs/common';

import { hash } from 'argon2';
import { AuthDto } from 'src/auth/dto/auth.dto';
import { PrismaService } from 'src/database/database.service';

@Injectable()
export class UsersService {
  constructor(private readonly prisma: PrismaService) {}

  async getById(id: string) {
    const user = await this.prisma.user.findUnique({
      where: {
        id,
      },
    });

    return user;
  }

  async getByEmail(email: string) {
    const user = await this.prisma.user.findUnique({
      where: {
        email,
      },
    });

    return user;
  }

  async create(dto: AuthDto) {
    return this.prisma.user.create({
      data: {
        id: `nest_${dto.email}`,
        firstName: dto.name,
        lastName: '',
        email: dto.email,
        password: await hash(dto.password),
      },
    });
  }
}
