import { Controller, Get, Request, UnauthorizedException, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from './auth/jwt-auth.guard';
import { UsersService } from './users/users.service';

@Controller()
export class AppController {
  constructor(private readonly usersService: UsersService) {}

  @UseGuards(JwtAuthGuard)
  @Get('users/profile')
  async getProfile(@Request() req) {
    const user = await this.usersService.findOne(req.user.id);
    if (!user) {
      throw new UnauthorizedException();
    }
    user.service = req.user.service;

    return user;
  }
}
