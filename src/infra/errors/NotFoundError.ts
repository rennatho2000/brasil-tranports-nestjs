import { NotFoundException } from '@nestjs/common';

export class NotFoundError extends NotFoundException {
  constructor(message: string, code: string) {
    super(message, code);
    this.name = 'NotFoundError';
  }
}
