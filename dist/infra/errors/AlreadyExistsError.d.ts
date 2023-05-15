import { ConflictException } from '@nestjs/common';
export declare class AlreadyExistsError extends ConflictException {
    constructor(message: string, code: string);
}
