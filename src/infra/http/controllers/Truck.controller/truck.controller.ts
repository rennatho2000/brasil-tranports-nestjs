import { Body, Controller, Post, Get, Param } from '@nestjs/common';
import { TruckViewModel } from '../../view-models/truck-view-model/create-truck-view-model';
import { CreateTruckBody } from '../../dtos/truck-dtos/create-Truck-body';
import { CreateTruck } from 'src/aplication/use-cases/Create-Truck/CreateTruck';
import { GetAllTrucksParams } from '../../dtos/truck-dtos/list-truck-requeste';
import { GetAllTruckViewModel } from '../../view-models/truck-view-model/get-truck-view-model';
import { GetAllTrucksUseCase } from 'src/aplication/use-cases/Create-Truck/GetAllTruk';

@Controller('truck')
export class TruckController {
  constructor(
    private creatTruck: CreateTruck,
    private getAllTrucksUseCase: GetAllTrucksUseCase,
  ) {}

  @Post()
  async create(
    @Body()
    {
      plate,
      axes,
      model,
      stipulatedAverageConsumption,
      valuePerKmReceived,
    }: CreateTruckBody,
  ) {
    const { truck } = await this.creatTruck.execute({
      plate,
      model,
      axes,
      stipulatedAverageConsumption,
      valuePerKmReceived,
    });

    return { truck: TruckViewModel.toHTTP(truck) };
  }

  @Get('/:plate/')
  async getAllTrucks(
    @Param()
    { plate }: GetAllTrucksParams,
  ) {
    const { truck } = await this.getAllTrucksUseCase.execute({
      plate,
    });
    return GetAllTruckViewModel.toHTTP(truck);
  }
}
