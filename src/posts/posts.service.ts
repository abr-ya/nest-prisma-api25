import { Injectable, NotFoundException } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { DatabaseService } from 'src/database/database.service';

const DEMO = [
  '0d39e19b-ec38-4e39-92f8-e7d2896de634',
  '150749d9-eab4-430d-b090-3ad81ee2cd61',
  '66d5c2f1-8577-442f-9ad7-3c59f8caf59f',
  '9c69b471-6bcd-4295-83b3-f800796334b9',
];

@Injectable()
export class PostsService {
  constructor(private readonly databaseService: DatabaseService) {}

  async create(createPostDto: Prisma.BlogPostCreateInput) {
    return this.databaseService.blogPost.create({ data: createPostDto });
  }

  async findAll() {
    return this.databaseService.blogPost.findMany();
  }

  async findOne(id: string) {
    return this.databaseService.blogPost.findUnique({ where: { id } });
  }

  async update(id: string, updatePostDto: Prisma.BlogPostUpdateInput) {
    return this.databaseService.blogPost.update({ where: { id }, data: updatePostDto });
  }

  async remove(id: string) {
    if (DEMO.includes(id)) throw new NotFoundException('This is protected post!');

    return this.databaseService.blogPost.delete({ where: { id } });
  }
}
