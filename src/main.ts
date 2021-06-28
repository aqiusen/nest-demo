import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { HttpExceptionFilter } from './filter/error.filter';
import { LoggingInterceptor } from './interceptor/LoggingInterceptor';
import * as dotenv from 'dotenv';
// 这里默认dotenv读取的是项目根目录的数据，因此直接写文件数据即可
//如果不指定path，那么默认的是读取的.env 文件，如果指定，则读取文件
// const productConfig = dotenv.config({ path: '.production.env' });
// 函数式中间件
const testMiddleWare = (res: any, req: any, next) => {
  next();
};
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.use(testMiddleWare); //先经过全局中间件，然后经过AppModule中模块的中间件
  app.useGlobalFilters(new HttpExceptionFilter());
  app.useGlobalInterceptors(new LoggingInterceptor());
  app.useGlobalPipes(
    new ValidationPipe({
      transform: true,
    }),
  );
  await app.listen(3000);
  // console.log('dotEnv.config', dotenv.config(), 'production =', productConfig);
  console.log('dotEnv.config', dotenv.config());
  console.log(process.env);
}
bootstrap();
