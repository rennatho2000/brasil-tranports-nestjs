"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Axes = void 0;
class Axes {
    get value() {
        return this.axes;
    }
    validateAxesLength(axes) {
        return axes >= 2 && axes <= 3;
    }
    constructor(axes) {
        const isAxesLengthValid = this.validateAxesLength(axes);
        if (!isAxesLengthValid) {
            throw new Error('Axes invalid number of axes error.');
        }
        this.axes = axes;
    }
}
exports.Axes = Axes;
//# sourceMappingURL=axes.js.map