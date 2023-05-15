import { ConsumptionExpenses } from '../entities/consumptionExpenses/ConsumptionExpenses';
export interface GetConsumptionExpensesProps {
    truckId: string;
    startDate: Date;
    endDate: Date;
}
export declare abstract class ConsumptionExpensesRepository {
    abstract create(consumptionExpenses: ConsumptionExpenses): Promise<void>;
    abstract getConsumptionExpenses(payload: GetConsumptionExpensesProps): Promise<ConsumptionExpenses[]>;
}
