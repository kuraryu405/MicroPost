import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class UserService {
    constructor(private prisma: PrismaService) {}
    
    async getPostByUserId(userId: string) {
        const posts = await this.prisma.post.findMany({
            where: { userId: parseInt(userId) },
            orderBy: { createdAt: 'desc' },
        });
        return posts;
    }
}
