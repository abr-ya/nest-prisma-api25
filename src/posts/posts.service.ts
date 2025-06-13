import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/database/database.service';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-user-dto';

const DEMO = [
  '0d39e19b-ec38-4e39-92f8-e7d2896de634',
  '150749d9-eab4-430d-b090-3ad81ee2cd61',
  '66d5c2f1-8577-442f-9ad7-3c59f8caf59f',
  '9c69b471-6bcd-4295-83b3-f800796334b9',
];

@Injectable()
export class PostsService {
  constructor(private readonly PrismaService: PrismaService) {}

  async create(createPostDto: CreatePostDto) {
    return this.PrismaService.blogPost.create({ data: createPostDto });
  }

  async findAll() {
    return this.PrismaService.blogPost.findMany();
  }

  async findOne(id: string) {
    const post = await this.PrismaService.blogPost.findUnique({ where: { id } });
    if (!post) throw new NotFoundException('Post Not Found');

    return post;
  }

  async update(id: string, updatePostDto: UpdatePostDto) {
    const post = await this.PrismaService.blogPost.findUnique({ where: { id } });
    if (!post) throw new NotFoundException(`Post ${id} not found!`);

    return this.PrismaService.blogPost.update({ where: { id }, data: updatePostDto });
  }

  async remove(id: string) {
    if (DEMO.includes(id)) throw new NotFoundException('This is protected post!');

    const post = await this.PrismaService.blogPost.findUnique({ where: { id } });
    if (!post) throw new NotFoundException(`Post ${id} not found!`);

    return this.PrismaService.blogPost.delete({ where: { id } });
  }
}
