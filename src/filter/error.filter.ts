import {
  ArgumentsHost,
  Catch,
  ExceptionFilter,
  HttpException,
} from '@nestjs/common';

@Catch(HttpException)
export class HttpExceptionFilter implements ExceptionFilter {
  catch(exception: any, host: ArgumentsHost): any {
    // exception = {"response":"ForbiddenException","status":502,"message":"ForbiddenException"}
    console.log('exception =', JSON.stringify(exception));
    const ctx = host.switchToHttp();
    const response = ctx.getResponse();
    const request = ctx.getRequest();
    const status = exception.getStatus();
    response.status(status).json({
      statusCode: status,
      timestame: new Date().toISOString(),
      path: request.url,
      exception: JSON.stringify(exception),
    });
  }
}
