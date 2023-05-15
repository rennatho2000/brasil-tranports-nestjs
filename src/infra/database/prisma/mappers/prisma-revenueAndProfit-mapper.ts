import { RawDriver, RawRevenueAndProfit, RawTruck } from '@prisma/client';
import { RevenueAndProfit } from 'src/aplication/entities/RevenueAndOrofit/RevenueAndOrofit';

type RawToEntity<T extends RawRevenueAndProfit> = GenericEntityMapper<T>;

type RawRevenueAndProfitWithRelations = RawRevenueAndProfit & {
  driver?: RawDriver;
  truck?: RawTruck;
};

export class PrismaRevenueAndProfitMapper {
  static toPrisma(revenueAndProfit: RevenueAndProfit) {
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
  static toDomain(raw: RawRevenueAndProfitWithRelations): RevenueAndProfit {
    const typedRaw: RawToEntity<RawRevenueAndProfit> = { ...raw };

    return new RevenueAndProfit({
      ...typedRaw,
    });
  }
}
