import { ConsumptionExpenses } from 'src/aplication/entities/consumptionExpenses/ConsumptionExpenses';
export declare class GetConsumptionExpensesViewModel {
    static toHTTP(consumptionExpenses: ConsumptionExpenses[]): {
        data: {
            consumptionExpenses: ConsumptionExpenses[];
        };
    };
}
