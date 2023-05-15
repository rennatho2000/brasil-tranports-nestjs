import { ConsumptionExpenses } from 'src/aplication/entities/consumptionExpenses/ConsumptionExpenses';

export class ConsumptionExpensesViewModel {
  static toHTTP(consumptionExpenses: ConsumptionExpenses) {
    return {
      id: consumptionExpenses.id,
      spentLiters: consumptionExpenses.spentLiters,
      kmDriven: consumptionExpenses.kmDriven,
      averageConsumption: consumptionExpenses.averageConsumption,
      truckId: consumptionExpenses.truckId,
    };
  }
}
