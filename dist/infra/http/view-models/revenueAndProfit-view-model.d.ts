import { RevenueAndProfit } from 'src/aplication/entities/RevenueAndOrofit/RevenueAndOrofit';
export declare class RevenueAndProfitViewModel {
    static toHTTP(revenueAndProfit: RevenueAndProfit): {
        revenue: number;
        spent: number;
        expendableCost: number;
        profit: number;
        wastedProfit: number;
        truckId: string;
        driverId: string;
    };
}
