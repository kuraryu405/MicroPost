import { Controller, Get } from '@nestjs/common';

@Controller()
export class AppController {
  @Get()
  getRoot() {
    return {
      message: 'MicroPost API is running',
      version: '1.0.0',
      endpoints: {
        auth: '/auth',
        user: '/user',
        post: '/post',
      },
    };
  }

  @Get('health')
  getHealth() {
    return {
      status: 'ok',
      timestamp: new Date().toISOString(),
    };
  }
}

