"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BadRequestError = void 0;
const common_1 = require("@nestjs/common");
class BadRequestError extends common_1.BadRequestException {
    constructor(message, code) {
        super(message, code);
        this.name = 'BadRequest';
    }
}
exports.BadRequestError = BadRequestError;
//# sourceMappingURL=BadRequestError.js.map