import { ConsumptionExpenses } from 'src/aplication/entities/consumptionExpenses/ConsumptionExpenses';

export class GetConsumptionExpensesViewModel {
  static toHTTP(consumptionExpenses: ConsumptionExpenses[]) {
    return {
      data: { consumptionExpenses },
    };
  }
}
