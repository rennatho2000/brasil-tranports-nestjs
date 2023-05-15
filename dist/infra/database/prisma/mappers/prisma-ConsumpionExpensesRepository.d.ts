import { RawConsumptionExpenses, RawTruck } from '@prisma/client';
import { ConsumptionExpenses } from 'src/aplication/entities/consumptionExpenses/ConsumptionExpenses';
type RawConsumptionExpensesWithRelations = RawConsumptionExpenses & {
    truck?: RawTruck;
};
export declare class PrismaConsumptionExpensesMapper {
    static toPrisma(consumptionExpenses: ConsumptionExpenses): {
        id: string;
        spentLiters: number;
        kmDriven: number;
        averageConsumption: number;
        createdAt: Date;
        truckId: string;
    };
    static toDomain(raw: RawConsumptionExpensesWithRelations): ConsumptionExpenses;
}
export {};
