import {
  MiddlewareConsumer,
  Module,
  NestModule,
  RequestMethod,
} from '@nestjs/common';
import { CatsController } from './cats.controller';
import { CatsService } from './cats.service';
import { ICatsService } from './cats.service.interface';
import { LoggerMiddleware } from '../middleware/logger';
@Module({
  controllers: [CatsController],
  providers: [CatsService],
  exports: [CatsService],
})
export class CatsModule implements NestModule {
  configure(consumer: MiddlewareConsumer): any {
    consumer
      .apply(LoggerMiddleware)
      .exclude({
        path: 'cats/list',
        method: RequestMethod.GET,
      })
      .forRoutes(CatsController);
  }
}
