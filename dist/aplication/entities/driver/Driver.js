"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Driver = void 0;
const crypto_1 = require("crypto");
class Driver {
    constructor(props, _id) {
        var _a;
        this._id = _id !== null && _id !== void 0 ? _id : (0, crypto_1.randomUUID)();
        this.props = Object.assign(Object.assign({}, props), { createdAt: (_a = props.createdAt) !== null && _a !== void 0 ? _a : new Date() });
    }
    get id() {
        return this._id;
    }
    set name(name) {
        this.props.name = name;
    }
    get name() {
        return this.props.name;
    }
    set salary(salary) {
        this.props.salary = salary;
    }
    get salary() {
        return this.props.salary;
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
    set revenueAndProfit(revenueAndProfit) {
        this.props.revenueAndProfit = revenueAndProfit;
    }
    get revenueAndProfit() {
        return this.props.revenueAndProfit;
    }
    set maintenance(maintenance) {
        this.props.maintenance = maintenance;
    }
    get maintenance() {
        return this.props.maintenance;
    }
}
exports.Driver = Driver;
//# sourceMappingURL=Driver.js.map