import { RevenueAndProfit } from 'src/aplication/entities/RevenueAndOrofit/RevenueAndOrofit';

export class RevenueAndProfitViewModel {
  static toHTTP(revenueAndProfit: RevenueAndProfit) {
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
