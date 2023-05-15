import { CreateRevenueAndProfit } from 'src/aplication/use-cases/Create-RevenueAndProfit/CreateRevenueAndProfit';
import { CreateRevenueAndProfitBody } from '../../dtos/create-revenueAndProfit-boody';
export declare class RevenueAndProfitController {
    private creatRevenueAndProfit;
    constructor(creatRevenueAndProfit: CreateRevenueAndProfit);
    create({ revenue, spent, expendableCost, profit, wastedProfit, truckId, driverId, }: CreateRevenueAndProfitBody): Promise<{
        revenueAndProfit: {
            revenue: number;
            spent: number;
            expendableCost: number;
            profit: number;
            wastedProfit: number;
            truckId: string;
            driverId: string;
        };
    }>;
}
