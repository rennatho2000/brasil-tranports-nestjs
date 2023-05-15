import { ConflictException } from '@nestjs/common';

export class AlreadyExistsError extends ConflictException {
  constructor(message: string, code: string) {
    super(message, code);
    this.name = 'AlreadyExistsError';
  }
}
