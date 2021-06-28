import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatsModule } from './cats/cats.module';
import { LitteCatsModule } from './litte-cats/litte-cats.module';
import { ConfigModule } from 'nestjs-config';
import * as path from 'path';
import { StatusMonitorModule } from 'nest-status-monitor';
import statusMonitorConfig from './util/statusMonitor';
import { AuthModule } from './modules/auth/auth.module';
import { TaskModule } from './task/task.module';
import { ScheduleModule } from '@nestjs/schedule';
@Module({
  imports: [
    StatusMonitorModule.setUp(statusMonitorConfig),
    ConfigModule.load(path.resolve(__dirname, 'config', '**/!(*.d).{ts,js}')),
    CatsModule,
    LitteCatsModule,
    AuthModule,
    ScheduleModule.forRoot(),
    TaskModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
