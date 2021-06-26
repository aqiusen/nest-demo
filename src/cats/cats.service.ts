import { Injectable } from '@nestjs/common';
import { ICatsService } from './cats.service.interface';
@Injectable()
export class CatsService implements ICatsService {
  getCats(): string {
    return 'Hello Cats!';
  }
}
