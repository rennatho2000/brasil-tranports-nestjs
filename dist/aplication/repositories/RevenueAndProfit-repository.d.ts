import { RevenueAndProfit } from '../entities/RevenueAndOrofit/RevenueAndOrofit';
export declare abstract class RevenueAndProfitRepository {
    abstract create(revenueAndProfit: RevenueAndProfit): Promise<void>;
}
