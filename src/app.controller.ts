import { Controller, Get } from '@nestjs/common';
import {
  ConfigParam,
  ConfigService,
  Configurable,
  InjectConfig,
} from 'nestjs-config';
import * as path from 'path';
import { AppService } from './app.service';
import develop from './config/develop';

/**
 * 参考网上的教程configService注入的全部是ConfigService { helpers: {} }
 * 可以获取参数的方式：
 * 1.直接注入@Configurable()
 * 2.通过@ConfigParam获取数据，用文件名.xxxx 作为名字，第二个参数是默认值
 */
@Controller('/app/auth')
export class AppController {
  constructor(private readonly appService: AppService) {}
  @Get()
  @Configurable()
  getHello(
    @ConfigParam('develop') { name, age, sex = '' },
    @ConfigParam('event.url', '') url,
  ): string {
    // name =  zhangsan  age =  11  sex =  man
    console.log('develop = ', develop); //develop =  { name: 'zhangsan', age: 11 }
    console.log('name = ', name, ' age = ', age, ' sex = ', sex, ' url=', url);
    return this.appService.getHello();
  }
}
