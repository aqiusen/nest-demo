import { Controller, Get } from '@nestjs/common';
import { LitteCatsService } from './litte-cats.service';

@Controller('litte-cats')
export class LitteCatsController {
  constructor(private readonly litteCatsService: LitteCatsService) {}
  @Get()
  getLitterCats() {
    return this.litteCatsService.getLitterCats();
  }
}
