"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AlreadyExistsError = void 0;
const common_1 = require("@nestjs/common");
class AlreadyExistsError extends common_1.ConflictException {
    constructor(message, code) {
        super(message, code);
        this.name = 'AlreadyExistsError';
    }
}
exports.AlreadyExistsError = AlreadyExistsError;
//# sourceMappingURL=AlreadyExistsError.js.map