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
exports.RevenueAndProfitController = void 0;
const common_1 = require("@nestjs/common");
const CreateRevenueAndProfit_1 = require("../../../../aplication/use-cases/Create-RevenueAndProfit/CreateRevenueAndProfit");
const create_revenueAndProfit_boody_1 = require("../../dtos/create-revenueAndProfit-boody");
const revenueAndProfit_view_model_1 = require("../../view-models/revenueAndProfit-view-model");
let RevenueAndProfitController = class RevenueAndProfitController {
    constructor(creatRevenueAndProfit) {
        this.creatRevenueAndProfit = creatRevenueAndProfit;
    }
    async create({ revenue, spent, expendableCost, profit, wastedProfit, truckId, driverId, }) {
        const { revenueAndProfit } = await this.creatRevenueAndProfit.execute({
            revenue,
            spent,
            expendableCost,
            profit,
            wastedProfit,
            truckId,
            driverId,
        });
        return {
            revenueAndProfit: revenueAndProfit_view_model_1.RevenueAndProfitViewModel.toHTTP(revenueAndProfit),
        };
    }
};
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_revenueAndProfit_boody_1.CreateRevenueAndProfitBody]),
    __metadata("design:returntype", Promise)
], RevenueAndProfitController.prototype, "create", null);
RevenueAndProfitController = __decorate([
    (0, common_1.Controller)('revenueAndProfit'),
    __metadata("design:paramtypes", [CreateRevenueAndProfit_1.CreateRevenueAndProfit])
], RevenueAndProfitController);
exports.RevenueAndProfitController = RevenueAndProfitController;
//# sourceMappingURL=revenueAndProfit.controller.js.map