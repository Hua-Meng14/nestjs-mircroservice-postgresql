import { Controller, Get } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @MessagePattern({ role: 'item', cmd: 'create' })
  createItem(itemDto) {
    // console.log(itemDto)
    return this.appService.createItem(itemDto);
  }

  @MessagePattern({ role: 'item', cmd: 'get-by-id' })
  getItemById(id: number) {
    return this.appService.getItemById(id);
  }
}
