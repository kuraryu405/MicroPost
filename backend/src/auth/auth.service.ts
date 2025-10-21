import { Injectable } from '@nestjs/common';
import { CreateAuthDto } from './dto/create-auth.dto';
import { UpdateAuthDto } from './dto/update-auth.dto';
import { PrismaService } from '../prisma/prisma.service';
import * as bcrypt from 'bcrypt';
@Injectable()
export class AuthService {
  constructor(private prisma: PrismaService) {}
  async create(createAuthDto: CreateAuthDto) {
    const user = await this.prisma.user.create({
      data: {
        email: createAuthDto.email,
        hash: await bcrypt.hash(createAuthDto.password, 10), //DTO password ->  DBではhash
        name: createAuthDto.name,
      },
    });
    return user;
  }

  findAll() {
    return `This action returns all auth`;
  }

  findOne(id: number) {
    return `This action returns a #${id} auth`;
  }

  update(id: number, updateAuthDto: UpdateAuthDto) {
    return `This action updates a #${id} auth`;
  }

  remove(id: number) {
    return `This action removes a #${id} auth`;
  }

  async validatePassword(password: string, hash: string): Promise<boolean> {
    return bcrypt.compare(password, hash);
    //passwordの検証
  }

  async findByEmail(email: string) {
    return this.prisma.user.findUnique({
      where: { email },
    });
    //emailでユーザーを検索いなかったらnullが帰ってくる
  }
}
