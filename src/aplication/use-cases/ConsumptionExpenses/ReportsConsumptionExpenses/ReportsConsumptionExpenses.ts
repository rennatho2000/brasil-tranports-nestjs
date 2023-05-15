import { Injectable } from '@nestjs/common';
import { ConsumptionExpenses } from 'src/aplication/entities/consumptionExpenses/ConsumptionExpenses';
import { reportsConsumptionExpensesRepository } from 'src/aplication/repositories/ReportsConsumption-repositories';

interface reportsConsumptionExpensesRequest {
  id: string;
}

interface reportsConsumptionExpensesResponse {
  reportsconsumptionExpenses: ConsumptionExpenses[];
}
@Injectable()
export class RepostConsumptionExpenses {
  constructor(
    private reportsconsumptionExpensesRepository: reportsConsumptionExpensesRepository,
  ) {}

  async execute(
    request: reportsConsumptionExpensesRequest,
  ): Promise<reportsConsumptionExpensesResponse> {
    const { id } = request;

    const reportsconsumptionExpenses =
      await this.reportsconsumptionExpensesRepository.findConsumptionExpenses(
        id,
      );

    return {
      reportsconsumptionExpenses,
    };
  }
}
