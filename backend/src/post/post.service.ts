import { Injectable } from '@nestjs/common';
import { CreatePostDto } from './dto/create-post.dto';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class PostService {
  constructor(private prisma: PrismaService) {}
  create(createPostDto: CreatePostDto) {
    return this.prisma.post.create({
      data:{
        content: createPostDto.content,
        userId: createPostDto.userId,
      }
    })
  }

  findAll() {
    return this.prisma.post.findMany({
      orderBy: { createdAt: 'desc' },
      include: {
        author: {
          select: {
            name: true,
          },
        }
      },
    });
  }

}
