"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Truck = void 0;
const crypto_1 = require("crypto");
class Truck {
    constructor(props, id) {
        var _a;
        this._id = id !== null && id !== void 0 ? id : (0, crypto_1.randomUUID)();
        this.props = Object.assign(Object.assign({}, props), { createdAt: (_a = props.createdAt) !== null && _a !== void 0 ? _a : new Date(), driver: props.driver, consumptionExpenses: props.consumptionExpenses, revenueAndProfit: props.revenueAndProfit, maintenance: props.maintenance });
    }
    get id() {
        return this._id;
    }
    set model(model) {
        this.props.model = model;
    }
    get model() {
        return this.props.model;
    }
    set plate(plate) {
        this.props.plate = plate;
    }
    get plate() {
        return this.props.plate;
    }
    set axes(axes) {
        this.props.axes = axes;
    }
    get axes() {
        return this.props.axes;
    }
    set stipulatedAverageConsumption(stipulatedAverageConsumption) {
        this.props.stipulatedAverageConsumption = stipulatedAverageConsumption;
    }
    get stipulatedAverageConsumption() {
        return this.props.stipulatedAverageConsumption;
    }
    set valuePerKmReceived(valuePerKmReceived) {
        this.props.valuePerKmReceived = valuePerKmReceived;
    }
    get valuePerKmReceived() {
        return this.props.valuePerKmReceived;
    }
    set createdAt(createdAt) {
        this.props.createdAt = createdAt;
    }
    get createdAt() {
        return this.props.createdAt;
    }
    set driver(driver) {
        this.props.driver = driver;
    }
    get driver() {
        return this.props.driver;
    }
    set consumptionExpenses(consumptionExpenses) {
        this.props.consumptionExpenses = consumptionExpenses;
    }
    get consumptionExpenses() {
        return this.props.consumptionExpenses;
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
exports.Truck = Truck;
//# sourceMappingURL=truck.js.map