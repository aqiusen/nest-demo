import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { HttpExceptionFilter } from './filter/error.filter';
import { LoggingInterceptor } from './interceptor/LoggingInterceptor';
// 函数式中间件
const testMiddleWare = (res: any, req: any, next) => {
  console.log('enter it ');
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
}
bootstrap();
