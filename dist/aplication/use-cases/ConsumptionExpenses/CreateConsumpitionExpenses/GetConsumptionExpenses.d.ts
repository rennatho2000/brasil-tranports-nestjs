import { ConsumptionExpenses } from 'src/aplication/entities/consumptionExpenses/ConsumptionExpenses';
import { ConsumptionExpensesRepository } from 'src/aplication/repositories/ConsumptionExpenses-repository';
interface ConsumptionExpensesRequest {
    truckId: string;
    startDate: Date;
    endDate: Date;
}
interface CountRecipientNotificationsResponse {
    consumptionExpenses: ConsumptionExpenses[];
}
export declare class GetConsumptionExpenses {
    private consumptionExpensesRepository;
    constructor(consumptionExpensesRepository: ConsumptionExpensesRepository);
    execute(request: ConsumptionExpensesRequest): Promise<CountRecipientNotificationsResponse>;
}
export {};
