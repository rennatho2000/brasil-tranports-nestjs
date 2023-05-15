import { BadRequestException } from '@nestjs/common';

export class BadRequestError extends BadRequestException {
  constructor(message: string, code: string) {
    super(message, code);
    this.name = 'BadRequest';
  }
}
