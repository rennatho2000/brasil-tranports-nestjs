"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RevenueAndProfitViewModel = void 0;
class RevenueAndProfitViewModel {
    static toHTTP(revenueAndProfit) {
        return {
            revenue: revenueAndProfit.revenue,
            spent: revenueAndProfit.spent,
            expendableCost: revenueAndProfit.expendableCost,
            profit: revenueAndProfit.profit,
            wastedProfit: revenueAndProfit.wastedProfit,
            truckId: revenueAndProfit.truckId,
            driverId: revenueAndProfit.driverId,
        };
    }
}
exports.RevenueAndProfitViewModel = RevenueAndProfitViewModel;
//# sourceMappingURL=revenueAndProfit-view-model.js.map