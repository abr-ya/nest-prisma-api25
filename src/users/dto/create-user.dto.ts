/* eslint-disable @typescript-eslint/no-unsafe-call */
import { IsEmail, IsEnum, IsNotEmpty, IsString } from 'class-validator';
import { UserRoleType } from './users.types';

export class CreateUserDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsEmail()
  email: string;

  @IsEnum(['BASIC', 'MODERATOR', 'ADMIN'], {
    message: 'Valid role required',
  })
  role: UserRoleType;
}
