import { Controller, Get, Param, Post, Body } from '@nestjs/common';
import { UserService } from './user.service';


@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get(':id')
  getUser(@Param('id') id: string) {
    return this.userService.getPostByUserId(id);
    //ユーザーの投稿一覧
    // ユーザーのプロフィール情報もまとめて所得する。。？
  }

}
