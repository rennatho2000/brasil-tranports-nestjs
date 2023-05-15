import { ConsumptionExpenses } from '../entities/consumptionExpenses/ConsumptionExpenses';
export declare abstract class reportsConsumptionExpensesRepository {
    abstract findConsumptionExpenses(id: string): Promise<ConsumptionExpenses[]>;
}
