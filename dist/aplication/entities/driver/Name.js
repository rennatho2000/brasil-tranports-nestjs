"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Name = void 0;
class Name {
    get value() {
        return this.name;
    }
    validateNameLength(name) {
        return name.length >= 10 && name.length <= 36;
    }
    constructor(name) {
        const isNameLengthValid = this.validateNameLength(name);
        if (!isNameLengthValid) {
            throw new Error('Name length error.');
        }
        this.name = name;
    }
}
exports.Name = Name;
//# sourceMappingURL=Name.js.map