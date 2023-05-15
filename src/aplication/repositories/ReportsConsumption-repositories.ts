import { ConsumptionExpenses } from '../entities/consumptionExpenses/ConsumptionExpenses';

export abstract class reportsConsumptionExpensesRepository {
  abstract findConsumptionExpenses(id: string): Promise<ConsumptionExpenses[]>;
}
