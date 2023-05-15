"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PrismaRevenueAndProfitMapper = void 0;
const RevenueAndOrofit_1 = require("../../../../aplication/entities/RevenueAndOrofit/RevenueAndOrofit");
class PrismaRevenueAndProfitMapper {
    static toPrisma(revenueAndProfit) {
        return {
            id: revenueAndProfit.id,
            revenue: revenueAndProfit.revenue,
            spent: revenueAndProfit.spent,
            expendableCost: revenueAndProfit.expendableCost,
            profit: revenueAndProfit.profit,
            wastedProfit: revenueAndProfit.wastedProfit,
            createdAt: revenueAndProfit.createdAt,
            truckId: revenueAndProfit.truckId,
            driverId: revenueAndProfit.driverId,
        };
    }
    static toDomain(raw) {
        const typedRaw = Object.assign({}, raw);
        return new RevenueAndOrofit_1.RevenueAndProfit(Object.assign({}, typedRaw));
    }
}
exports.PrismaRevenueAndProfitMapper = PrismaRevenueAndProfitMapper;
//# sourceMappingURL=prisma-revenueAndProfit-mapper.js.map