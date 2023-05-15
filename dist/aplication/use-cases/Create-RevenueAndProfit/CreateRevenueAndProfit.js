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
exports.CreateRevenueAndProfit = void 0;
const common_1 = require("@nestjs/common");
const RevenueAndOrofit_1 = require("../../entities/RevenueAndOrofit/RevenueAndOrofit");
const RevenueAndProfit_repository_1 = require("../../repositories/RevenueAndProfit-repository");
let CreateRevenueAndProfit = class CreateRevenueAndProfit {
    constructor(revenueAndProfitRepository) {
        this.revenueAndProfitRepository = revenueAndProfitRepository;
    }
    async execute(request) {
        const { revenue, spent, expendableCost, profit, wastedProfit, truckId, driverId, } = request;
        const revenueAndProfit = new RevenueAndOrofit_1.RevenueAndProfit({
            revenue,
            spent,
            expendableCost,
            profit,
            wastedProfit,
            truckId,
            driverId,
        });
        await this.revenueAndProfitRepository.create(revenueAndProfit);
        return {
            revenueAndProfit,
        };
    }
};
CreateRevenueAndProfit = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [RevenueAndProfit_repository_1.RevenueAndProfitRepository])
], CreateRevenueAndProfit);
exports.CreateRevenueAndProfit = CreateRevenueAndProfit;
//# sourceMappingURL=CreateRevenueAndProfit.js.map