import { Injectable, UnauthorizedException, ConflictException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { CreateAuthDto } from './dto/create-auth.dto';
import { PrismaService } from '../prisma/prisma.service';
import * as bcrypt from 'bcrypt';
import { User } from '@prisma/client';
@Injectable()
export class AuthService {
  constructor(
    private prisma: PrismaService,
    private jwtService: JwtService,
  ) {}
  async create(createAuthDto: CreateAuthDto) {
   
    const existingUser = await this.prisma.user.findUnique({
      where: { email: createAuthDto.email },
    });

    if (existingUser) {
      throw new ConflictException('このメールアドレスは既に登録されています');
    }

  
    const user = await this.prisma.user.create({
      data: {
        email: createAuthDto.email,
        hash: await bcrypt.hash(createAuthDto.password, 10), //DTO password ->  DBではhash
        name: createAuthDto.name,
      },
    });

    // パスワード情報を除外して返す
    const { hash, ...result } = user;
    return result;
  }



  async AuthUser(
    email: string,
    password: string,
  ): Promise<{ token: string; user: Pick<User, 'id' | 'email' | 'name'> }> {
    if (!email || !password) {
      throw new UnauthorizedException('Invalid credentials');
    }
    // emailでユーザーを検索いなかったらnullが帰ってくる
    const user = await this.prisma.user.findUnique({
      where: { email },
    });
    if (!user) {
      throw new UnauthorizedException('Invalid credentials');
    }
    // パスワードでの認証
    const isPasswordValid = await bcrypt.compare(password, user.hash);
    if (!isPasswordValid) {
      throw new UnauthorizedException('Invalid credentials');
    }
    // トークンを生成
    const payload = { userId: user.id, email: user.email };
    const token = this.jwtService.sign(payload);
    const publicUser: Pick<User, 'id' | 'email' | 'name'> = {
      id: user.id,
      email: user.email,
      name: user.name,
    };
    return { token, user: publicUser };
  }
}
