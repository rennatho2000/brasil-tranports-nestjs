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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConsumptionExpensesController = void 0;
const common_1 = require("@nestjs/common");
const CreateConsumptionExpenses_1 = require("../../../../aplication/use-cases/ConsumptionExpenses/CreateConsumpitionExpenses/CreateConsumptionExpenses");
const create_consumptionExpenses_body_1 = require("../../dtos/consumptionExpenses-dtos/create-consumptionExpenses-body");
const create_consumptionExpenses_view_model_1 = require("../../view-models/consumptionExpenses-view-model/create-consumptionExpenses-view-model");
const GetConsumptionExpenses_1 = require("../../../../aplication/use-cases/ConsumptionExpenses/CreateConsumpitionExpenses/GetConsumptionExpenses");
const common_2 = require("@nestjs/common");
const get_consumptionExpenses_Requeste_1 = require("../../dtos/consumptionExpenses-dtos/get-consumptionExpenses-Requeste");
const get_consumptionExpenses_view_model_1 = require("../../view-models/consumptionExpenses-view-model/get-consumptionExpenses-view-model");
let ConsumptionExpensesController = class ConsumptionExpensesController {
    constructor(consumptionExpenses, getConsumptionExpensesUseCase) {
        this.consumptionExpenses = consumptionExpenses;
        this.getConsumptionExpensesUseCase = getConsumptionExpensesUseCase;
    }
    async create({ spentLiters, kmDriven, averageConsumption, truckId, }) {
        const { consumptionExpenses } = await this.consumptionExpenses.execute({
            spentLiters,
            kmDriven,
            averageConsumption,
            truckId,
        });
        return {
            consumptionExpenses: create_consumptionExpenses_view_model_1.ConsumptionExpensesViewModel.toHTTP(consumptionExpenses),
        };
    }
    async getConsumptionExpenses({ startDate, endDate, truckId }) {
        const { consumptionExpenses } = await this.getConsumptionExpensesUseCase.execute({
            startDate,
            endDate,
            truckId,
        });
        return get_consumptionExpenses_view_model_1.GetConsumptionExpensesViewModel.toHTTP(consumptionExpenses);
    }
};
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_consumptionExpenses_body_1.CreateConsumptionExpensesBody]),
    __metadata("design:returntype", Promise)
], ConsumptionExpensesController.prototype, "create", null);
__decorate([
    (0, common_1.Get)('/:truckId/:startDate/:endDate/'),
    __param(0, (0, common_2.Param)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [get_consumptionExpenses_Requeste_1.GetConsumptionExpensesParams]),
    __metadata("design:returntype", Promise)
], ConsumptionExpensesController.prototype, "getConsumptionExpenses", null);
ConsumptionExpensesController = __decorate([
    (0, common_1.Controller)('consumption-expencess'),
    __metadata("design:paramtypes", [CreateConsumptionExpenses_1.CreateConsumptionExpenses,
        GetConsumptionExpenses_1.GetConsumptionExpenses])
], ConsumptionExpensesController);
exports.ConsumptionExpensesController = ConsumptionExpensesController;
//# sourceMappingURL=consumptionExpenses.controller.js.map