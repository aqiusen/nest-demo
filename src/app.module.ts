import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatsModule } from './cats/cats.module';
import { LitteCatsModule } from './litte-cats/litte-cats.module';

@Module({
  imports: [CatsModule, LitteCatsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
