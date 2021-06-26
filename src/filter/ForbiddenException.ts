import { HttpException, HttpStatus } from '@nestjs/common';

export class ForbiddenException extends HttpException {
  constructor(message, statusCode) {
    super(message, statusCode);
  }
}
