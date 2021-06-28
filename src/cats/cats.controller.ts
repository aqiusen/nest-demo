import {
  Body,
  Controller,
  Get,
  UseGuards,
  HttpStatus,
  Param,
  Post,
  Query,
  UseInterceptors,
  UsePipes,
} from '@nestjs/common';

import { CatsService } from './cats.service';
import { ForbiddenException } from '../filter/ForbiddenException';
import { LoggingInterceptor } from '../interceptor/LoggingInterceptor';
import { LitteCatsService } from '../litte-cats/litte-cats.service';
import { ICatsService } from './cats.service.interface';
import { SaveValidationPipe } from '../pipe/validation.pipe';
import { saveCatSchema } from '../schema/cats.save.schema';
import { CatsDto } from 'src/dto/cats.dto';
import { AuthGuard } from 'src/auth/auth';
import { Roles } from 'src/decorators/roles.decorator';
import { Reflector } from '@nestjs/core';
import { ConfigService, InjectConfig } from 'nestjs-config';
@Controller('cats')
@UseInterceptors(LoggingInterceptor)
export class CatsController {
  constructor(
    @InjectConfig() private readonly config: ConfigService,
    private readonly catsService: CatsService,
    private litterCats: LitteCatsService,
  ) {
    console.log('###config=', config);
    this.config = config;
  }

  @Get('/')
  @UseGuards(AuthGuard)
  @Roles('admin')
  getCats() {
    console.log('@@@@@@=', this.config);
    return this.catsService.getCats();
  }

  @Get('/list')
  getList() {
    console.log('@@@@@@test');
    console.log(this.litterCats.getLitterCats());
    const list = [];
    for (let i = 0; i < 10; i++) {
      list.push('this is item ' + i);
    }
    return list;
  }

  @Get('/error')
  getException() {
    // throw new HttpException('Forbidden', HttpStatus.FORBIDDEN);
    /**
     * 如果传递的response是一个对象，那么返回的就是这个对象
     * {
        "error": "Forbidden",
        "age": 11
       }
     如果返回的是一个字符串：则会把字符串放到message中，然后错误码也返回来
     {
      "statusCode": 403,
      "message": "Forbidden"
      }
     * */
    // throw new HttpException(
    //   { error: 'Forbidden', age: 11 },
    //   HttpStatus.FORBIDDEN,
    // );
    throw new ForbiddenException('ForbiddenException', HttpStatus.BAD_GATEWAY);
  }

  @Get('/:id')
  getInfoById(@Param('id') id: number) {
    console.log(typeof id === 'number'); //默认的是false
    return JSON.stringify(id);
  }

  /**
   * 增加了对参数的校验
   * */
  @Post('/save')
  saveData(@Body() body: CatsDto) {
    // success to save{} params ={"name":"zhangsan","age":"22"}
    // 如果选择的不是Params传递值，而是body，那么数据就会在body上
    // success to save{"age":23,"name":"zhangsan1"} params ={}
    return 'success to save' + JSON.stringify(body);
  }
}
