import { NotFoundException } from '@nestjs/common';
export declare class NotFoundError extends NotFoundException {
    constructor(message: string, code: string);
}
