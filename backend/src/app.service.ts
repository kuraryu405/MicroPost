import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
  getUser(): string {
    const user = await this.prisma.user.findMany();
    return user;
  }
}
