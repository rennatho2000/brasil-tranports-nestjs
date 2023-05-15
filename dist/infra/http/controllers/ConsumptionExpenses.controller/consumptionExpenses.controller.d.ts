import { CreateConsumptionExpenses } from 'src/aplication/use-cases/ConsumptionExpenses/CreateConsumpitionExpenses/CreateConsumptionExpenses';
import { CreateConsumptionExpensesBody } from '../../dtos/consumptionExpenses-dtos/create-consumptionExpenses-body';
import { GetConsumptionExpenses } from 'src/aplication/use-cases/ConsumptionExpenses/CreateConsumpitionExpenses/GetConsumptionExpenses';
import { GetConsumptionExpensesParams } from '../../dtos/consumptionExpenses-dtos/get-consumptionExpenses-Requeste';
export declare class ConsumptionExpensesController {
    private consumptionExpenses;
    private readonly getConsumptionExpensesUseCase;
    constructor(consumptionExpenses: CreateConsumptionExpenses, getConsumptionExpensesUseCase: GetConsumptionExpenses);
    create({ spentLiters, kmDriven, averageConsumption, truckId, }: CreateConsumptionExpensesBody): Promise<{
        consumptionExpenses: {
            id: string;
            spentLiters: number;
            kmDriven: number;
            averageConsumption: number;
            truckId: string;
        };
    }>;
    getConsumptionExpenses({ startDate, endDate, truckId }: GetConsumptionExpensesParams): Promise<{
        data: {
            consumptionExpenses: import("../../../../aplication/entities/consumptionExpenses/ConsumptionExpenses").ConsumptionExpenses[];
        };
    }>;
}
