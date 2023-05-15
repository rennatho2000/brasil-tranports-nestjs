import { ConsumptionExpenses } from 'src/aplication/entities/consumptionExpenses/ConsumptionExpenses';
import { ConsumptionExpensesRepository } from 'src/aplication/repositories/ConsumptionExpenses-repository';
interface CreateConsumptionExpensesRequest {
    spentLiters: number;
    kmDriven: number;
    averageConsumption: number;
    truckId: string;
}
interface CreateConsumptionExpensesResponse {
    consumptionExpenses: ConsumptionExpenses;
}
export declare class CreateConsumptionExpenses {
    private consumptionExpensesRepository;
    constructor(consumptionExpensesRepository: ConsumptionExpensesRepository);
    execute(request: CreateConsumptionExpensesRequest): Promise<CreateConsumptionExpensesResponse>;
}
export {};
