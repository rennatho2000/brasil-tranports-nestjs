"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Maintenance = void 0;
const crypto_1 = require("crypto");
class Maintenance {
    constructor(props, _id) {
        var _a;
        this._id = _id !== null && _id !== void 0 ? _id : (0, crypto_1.randomUUID)();
        this.props = Object.assign(Object.assign({}, props), { createdAt: (_a = props.createdAt) !== null && _a !== void 0 ? _a : new Date() });
    }
    get id() {
        return this._id;
    }
    set amountSpent(amountSpent) {
        this.props.amountSpent = amountSpent;
    }
    get amountSpent() {
        return this.props.amountSpent;
    }
    set createdAt(createdAt) {
        this.props.createdAt = createdAt;
    }
    get createdAt() {
        return this.props.createdAt;
    }
    set truckId(truckId) {
        this.props.truckId = truckId;
    }
    get truckId() {
        return this.props.truckId;
    }
    set driverId(driverId) {
        this.props.driverId = driverId;
    }
    get driverId() {
        return this.props.driverId;
    }
}
exports.Maintenance = Maintenance;
//# sourceMappingURL=Maintenance.js.map