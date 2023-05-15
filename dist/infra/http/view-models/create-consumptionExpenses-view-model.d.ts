import { ConsumptionExpenses } from 'src/aplication/entities/consumptionExpenses/ConsumptionExpenses';
export declare class ConsumptionExpensesViewModel {
    static toHTTP(consumptionExpenses: ConsumptionExpenses): {
        id: string;
        spentLiters: number;
        kmDriven: number;
        averageConsumption: number;
        truckId: string;
    };
}
