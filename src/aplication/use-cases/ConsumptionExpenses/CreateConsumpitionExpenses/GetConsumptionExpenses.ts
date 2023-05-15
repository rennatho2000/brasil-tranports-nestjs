import { Injectable } from '@nestjs/common';
import { ConsumptionExpenses } from 'src/aplication/entities/consumptionExpenses/ConsumptionExpenses';

import { ConsumptionExpensesRepository } from 'src/aplication/repositories/ConsumptionExpenses-repository';
import { NotFoundError } from 'src/infra/errors/NotFoundError';

interface ConsumptionExpensesRequest {
  truckId: string;
  startDate: Date;
  endDate: Date;
}
interface CountRecipientNotificationsResponse {
  consumptionExpenses: ConsumptionExpenses[];
}
@Injectable()
export class GetConsumptionExpenses {
  constructor(
    private consumptionExpensesRepository: ConsumptionExpensesRepository,
  ) {}

  async execute(
    request: ConsumptionExpensesRequest,
  ): Promise<CountRecipientNotificationsResponse> {
    const { truckId, startDate, endDate } = request;

    const consumptionExpenses =
      await this.consumptionExpensesRepository.getConsumptionExpenses({
        truckId,
        startDate: new Date(startDate),
        endDate: new Date(endDate),
      });

    if (!consumptionExpenses) {
      throw new NotFoundError(
        'consumptionExpenses',
        'consumptionExpenses/consumptionExpenses_not_found',
      );
    }

    return { consumptionExpenses };
  }
}
