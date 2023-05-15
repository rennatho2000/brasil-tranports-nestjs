import { PrismaService } from '../prisma.service';
import { ConsumptionExpensesRepository, GetConsumptionExpensesProps } from 'src/aplication/repositories/ConsumptionExpenses-repository';
import { ConsumptionExpenses } from 'src/aplication/entities/consumptionExpenses/ConsumptionExpenses';
export declare class PrismaConsumptionExpensesRepository implements ConsumptionExpensesRepository {
    private prisma;
    constructor(prisma: PrismaService);
    create(consumptionExpenses: ConsumptionExpenses): Promise<void>;
    getConsumptionExpenses({ truckId, startDate, endDate, }: GetConsumptionExpensesProps): Promise<ConsumptionExpenses[]>;
}
