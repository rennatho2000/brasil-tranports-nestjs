import { Injectable } from '@nestjs/common';
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
@Injectable()
export class CreateConsumptionExpenses {
  constructor(
    private consumptionExpensesRepository: ConsumptionExpensesRepository,
  ) {}

  async execute(
    request: CreateConsumptionExpensesRequest,
  ): Promise<CreateConsumptionExpensesResponse> {
    const { spentLiters, kmDriven, averageConsumption, truckId } = request;

    const consumptionExpenses = new ConsumptionExpenses({
      spentLiters,
      kmDriven,
      averageConsumption,
      truckId,
    });

    await this.consumptionExpensesRepository.create(consumptionExpenses);

    return {
      consumptionExpenses,
    };
  }
}
