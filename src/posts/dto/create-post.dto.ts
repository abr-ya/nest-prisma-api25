import { IsNotEmpty, IsString, IsUrl } from 'class-validator';

export class CreatePostDto {
  @IsString()
  @IsNotEmpty()
  title: string;

  @IsString()
  @IsNotEmpty()
  content: string;

  @IsUrl()
  imageUrl: string;

  @IsString()
  @IsNotEmpty()
  authorId: string;
}
