import { BadRequestException } from '@nestjs/common';
export declare class BadRequestError extends BadRequestException {
    constructor(message: string, code: string);
}
