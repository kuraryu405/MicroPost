import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { PostModule } from './post/post.module';
import { AuthModule } from './auth/auth.module';
import { PrismaModule } from './prisma/prisma.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [UserModule, PostModule, AuthModule, PrismaModule, ConfigModule.forRoot({
    isGlobal: true,
  })],
  providers: [AppService],
})
export class AppModule {}
