import { PrismaService } from '../prisma.service';
import { RevenueAndProfitRepository } from 'src/aplication/repositories/RevenueAndProfit-repository';
import { RevenueAndProfit } from 'src/aplication/entities/RevenueAndOrofit/RevenueAndOrofit';
export declare class PrismaRevenueAndProfitRepository implements RevenueAndProfitRepository {
    private prisma;
    constructor(prisma: PrismaService);
    create(revenueAndProfit: RevenueAndProfit): Promise<void>;
}
