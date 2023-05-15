import { ConsumptionExpenses } from 'src/aplication/entities/consumptionExpenses/ConsumptionExpenses';
import { reportsConsumptionExpensesRepository } from 'src/aplication/repositories/ReportsConsumption-repositories';
interface reportsConsumptionExpensesRequest {
    id: string;
}
interface reportsConsumptionExpensesResponse {
    reportsconsumptionExpenses: ConsumptionExpenses[];
}
export declare class RepostConsumptionExpenses {
    private reportsconsumptionExpensesRepository;
    constructor(reportsconsumptionExpensesRepository: reportsConsumptionExpensesRepository);
    execute(request: reportsConsumptionExpensesRequest): Promise<reportsConsumptionExpensesResponse>;
}
export {};
