import {
  ArgumentMetadata,
  BadRequestException,
  PipeTransform,
} from '@nestjs/common';
import { ObjectSchema } from '@hapi/joi';

export class SaveValidationPipe implements PipeTransform {
  constructor(private readonly schema: ObjectSchema) {}

  transform(value: any, metadata: ArgumentMetadata): any {
    if (value.age) {
      value.age = parseInt(value.age, 10);
    }

    const { error } = this.schema.validate(value);
    if (error) {
      throw new BadRequestException(
        'Validation failed,' + error,
        'value=' + JSON.stringify(value),
      );
    }
    console.log('SaveValidationPipe', value, JSON.stringify(metadata));
    return value;
  }
}
