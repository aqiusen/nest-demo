import { Injectable, Logger } from '@nestjs/common';
import { Cron, Interval, Timeout } from '@nestjs/schedule';
@Injectable()
export class TaskService {
  private readonly logger = new Logger(TaskService.name);

  @Cron('45 * * * * *')
  handleCron() {
    this.logger.debug('Call when the second is 45');
  }

  @Interval(10000)
  handleInterval() {
    console.log('@@@@@@@@@@@@@@@@@@@@@@@@@@');
    this.logger.debug('Call every 10 seconds');
  }

  @Timeout(5000)
  handleTimerOut() {
    this.logger.debug('Call once after 5 seconds');
  }
}
