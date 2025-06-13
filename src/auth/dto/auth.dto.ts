import { IsEmail, IsOptional, IsString, MinLength } from 'class-validator';

export class AuthDto {
  @IsOptional()
  @IsString()
  name: string;

  @IsString({
    message: 'Email is required',
  })
  @IsEmail()
  email: string;

  @MinLength(4, {
    message: 'Pass must have minimum 4 symbols!',
  })
  @IsString({
    message: 'Password is required',
  })
  password: string;
}
