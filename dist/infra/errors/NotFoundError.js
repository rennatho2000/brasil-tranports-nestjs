"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotFoundError = void 0;
const common_1 = require("@nestjs/common");
class NotFoundError extends common_1.NotFoundException {
    constructor(message, code) {
        super(message, code);
        this.name = 'NotFoundError';
    }
}
exports.NotFoundError = NotFoundError;
//# sourceMappingURL=NotFoundError.js.map