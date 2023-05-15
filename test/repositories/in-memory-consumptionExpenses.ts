import { ConsumptionExpenses } from 'src/aplication/entities/consumptionExpenses/ConsumptionExpenses';
import { ConsumptionExpensesRepository } from 'src/aplication/repositories/consumptionExpenses-repository';

export class InMemoryConsumptionExpensesRepository
  implements ConsumptionExpensesRepository
{
  public consumptionExpenses: ConsumptionExpenses[] = [];

  async create(consumptionExpenses: ConsumptionExpenses) {
    this.consumptionExpenses.push(consumptionExpenses);
  }
}
