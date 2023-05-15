import { RawDriver, RawRevenueAndProfit, RawTruck } from '@prisma/client';
import { RevenueAndProfit } from 'src/aplication/entities/RevenueAndOrofit/RevenueAndOrofit';
type RawRevenueAndProfitWithRelations = RawRevenueAndProfit & {
    driver?: RawDriver;
    truck?: RawTruck;
};
export declare class PrismaRevenueAndProfitMapper {
    static toPrisma(revenueAndProfit: RevenueAndProfit): {
        id: string;
        revenue: number;
        spent: number;
        expendableCost: number;
        profit: number;
        wastedProfit: number;
        createdAt: Date;
        truckId: string;
        driverId: string;
    };
    static toDomain(raw: RawRevenueAndProfitWithRelations): RevenueAndProfit;
}
export {};
