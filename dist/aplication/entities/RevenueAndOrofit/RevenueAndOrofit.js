"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RevenueAndProfit = void 0;
const crypto_1 = require("crypto");
class RevenueAndProfit {
    constructor(props) {
        var _a;
        this._id = (0, crypto_1.randomUUID)();
        this.props = Object.assign(Object.assign({}, props), { createdAt: (_a = props.createdAt) !== null && _a !== void 0 ? _a : new Date() });
    }
    get id() {
        return this._id;
    }
    get revenue() {
        return this.props.revenue;
    }
    set spent(spent) {
        this.props.spent = spent;
    }
    get spent() {
        return this.props.spent;
    }
    set expendableCost(expendableCost) {
        this.props.expendableCost = expendableCost;
    }
    get expendableCost() {
        return this.props.expendableCost;
    }
    set profit(profit) {
        this.props.profit = profit;
    }
    get profit() {
        return this.props.profit;
    }
    set wastedProfit(wastedProfit) {
        this.props.wastedProfit = wastedProfit;
    }
    get wastedProfit() {
        return this.props.wastedProfit;
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
exports.RevenueAndProfit = RevenueAndProfit;
//# sourceMappingURL=RevenueAndOrofit.js.map