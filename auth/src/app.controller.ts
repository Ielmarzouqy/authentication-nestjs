import { Controller, Get, Post, Body } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('api')
export class AppController {
  constructor(private readonly appService: AppService) {}

  // @Get()
  // getHello(): string {
  //   return this.appService.getHello();
  // }
  @Post('register')
  async register(
    @Body('name') name:string,

    @Body('email') email:string,

    @Body('password') password:string
  ){
    

  }
}
