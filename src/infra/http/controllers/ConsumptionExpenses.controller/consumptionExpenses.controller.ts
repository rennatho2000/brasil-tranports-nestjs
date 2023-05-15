import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateConsumptionExpenses } from 'src/aplication/use-cases/ConsumptionExpenses/CreateConsumpitionExpenses/CreateConsumptionExpenses';
import { CreateConsumptionExpensesBody } from '../../dtos/consumptionExpenses-dtos/create-consumptionExpenses-body';
import { ConsumptionExpensesViewModel } from '../../view-models/consumptionExpenses-view-model/create-consumptionExpenses-view-model';
import { GetConsumptionExpenses } from 'src/aplication/use-cases/ConsumptionExpenses/CreateConsumpitionExpenses/GetConsumptionExpenses';
import { Param } from '@nestjs/common';
import { GetConsumptionExpensesParams } from '../../dtos/consumptionExpenses-dtos/get-consumptionExpenses-Requeste';
import { GetConsumptionExpensesViewModel } from '../../view-models/consumptionExpenses-view-model/get-consumptionExpenses-view-model';

@Controller('consumption-expencess')
export class ConsumptionExpensesController {
  constructor(
    private consumptionExpenses: CreateConsumptionExpenses,
    private readonly getConsumptionExpensesUseCase: GetConsumptionExpenses,
  ) {}

  @Post()
  async create(
    @Body()
    {
      spentLiters,
      kmDriven,
      averageConsumption,
      truckId,
    }: CreateConsumptionExpensesBody,
  ) {
    const { consumptionExpenses } = await this.consumptionExpenses.execute({
      spentLiters,
      kmDriven,
      averageConsumption,
      truckId,
    });

    return {
      consumptionExpenses:
        ConsumptionExpensesViewModel.toHTTP(consumptionExpenses),
    };
  }
  @Get('/:truckId/:startDate/:endDate/')
  async getConsumptionExpenses(
    @Param()
    { startDate, endDate, truckId }: GetConsumptionExpensesParams,
  ) {
    const { consumptionExpenses } =
      await this.getConsumptionExpensesUseCase.execute({
        startDate,
        endDate,
        truckId,
      });

    return GetConsumptionExpensesViewModel.toHTTP(consumptionExpenses);
  }
}
