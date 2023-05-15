import { InMemoryConsumptionExpensesRepository } from 'test/repositories/in-memory-consumptionExpenses';
import { CreateConsumptionExpenses } from './CreateConsumptionExpenses';

describe('Create ConsumptionExpenses', () => {
  it('should be able to create a ConsumptionExpenses', async () => {
    const consumptionExpensesRepository =
      new InMemoryConsumptionExpensesRepository();
    const createconsumptionExpenses = new CreateConsumptionExpenses(
      consumptionExpensesRepository,
    );

    const { consumptionExpenses } = await createconsumptionExpenses.execute({
      spentLiters: 22,
      kmDriven: 22,
      averageConsumption: 22,
      truckId: '0d2f3ec5-205d-4343-b9b4-013bae318d64',
    });

    expect(consumptionExpenses).toBeTruthy();
  });
});
