import { RevenueAndProfit } from '../entities/RevenueAndOrofit/RevenueAndOrofit';

export abstract class RevenueAndProfitRepository {
  abstract create(revenueAndProfit: RevenueAndProfit): Promise<void>;
}
