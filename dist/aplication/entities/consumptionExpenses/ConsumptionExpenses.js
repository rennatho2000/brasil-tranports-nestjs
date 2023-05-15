"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConsumptionExpenses = void 0;
const common_1 = require("@nestjs/common");
const crypto_1 = require("crypto");
let ConsumptionExpenses = class ConsumptionExpenses {
    constructor(props, _id) {
        var _a;
        this._id = _id !== null && _id !== void 0 ? _id : (0, crypto_1.randomUUID)();
        this.props = Object.assign(Object.assign({}, props), { createdAt: (_a = props.createdAt) !== null && _a !== void 0 ? _a : new Date() });
    }
    get id() {
        return this._id;
    }
    set spentLiters(spentLiters) {
        this.props.spentLiters = spentLiters;
    }
    get spentLiters() {
        return this.props.spentLiters;
    }
    set kmDriven(kmDriven) {
        this.props.kmDriven = kmDriven;
    }
    get kmDriven() {
        return this.props.kmDriven;
    }
    set averageConsumption(averageConsumption) {
        this.props.averageConsumption = averageConsumption;
    }
    get averageConsumption() {
        return this.props.averageConsumption;
    }
    set truckId(truckId) {
        this.props.truckId = truckId;
    }
    get truckId() {
        return this.props.truckId;
    }
    set createdAt(createdAt) {
        this.props.createdAt = createdAt;
    }
    get createdAt() {
        return this.props.createdAt;
    }
};
ConsumptionExpenses = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [Object, String])
], ConsumptionExpenses);
exports.ConsumptionExpenses = ConsumptionExpenses;
//# sourceMappingURL=ConsumptionExpenses.js.map