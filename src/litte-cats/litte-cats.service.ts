import { Get, Injectable } from '@nestjs/common';
import { CatsService } from '../cats/cats.service';

@Injectable()
export class LitteCatsService {
  constructor() {}

  getLitterCats() {
    return 'other call getLitterCats';
  }
}
