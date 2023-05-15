import { RevenueAndProfit } from 'src/aplication/entities/RevenueAndOrofit/RevenueAndOrofit';
import { RevenueAndProfitRepository } from 'src/aplication/repositories/RevenueAndProfit-repository';
interface CreateRevenueAndProfitRequest {
    revenue: number;
    spent: number;
    expendableCost: number;
    profit: number;
    wastedProfit: number;
    truckId: string;
    driverId: string;
}
interface CreateRevenueAndProfitResponse {
    revenueAndProfit: RevenueAndProfit;
}
export declare class CreateRevenueAndProfit {
    private revenueAndProfitRepository;
    constructor(revenueAndProfitRepository: RevenueAndProfitRepository);
    execute(request: CreateRevenueAndProfitRequest): Promise<CreateRevenueAndProfitResponse>;
}
export {};
