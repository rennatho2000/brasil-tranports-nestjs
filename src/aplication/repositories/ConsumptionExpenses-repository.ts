import { ConsumptionExpenses } from '../entities/consumptionExpenses/ConsumptionExpenses';

export interface GetConsumptionExpensesProps {
  truckId: string;
  startDate: Date;
  endDate: Date;
}

export abstract class ConsumptionExpensesRepository {
  abstract create(consumptionExpenses: ConsumptionExpenses): Promise<void>;
  abstract getConsumptionExpenses(
    payload: GetConsumptionExpensesProps,
  ): Promise<ConsumptionExpenses[]>;
}
