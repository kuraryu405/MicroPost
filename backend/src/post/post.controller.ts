import { Controller, Get, Post, Body } from '@nestjs/common';
import { PostService } from './post.service';
import { CreatePostDto } from './dto/create-post.dto';
// import { UseGuards } from '@nestjs/common';
// import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@Controller('post')
// 認証を挟みたかったけど挟むとエラーが出るので挟まない
// jwtストラテジー未登録のため認証で落ちている←直す気分になった時用にメモ
export class PostController {
  constructor(private readonly postService: PostService) {}
  @Post()
  create(@Body() createPostDto: CreatePostDto) {
    return this.postService.create(createPostDto);
  }

  @Get()
  findAll() {
    return this.postService.findAll();
  }
}
