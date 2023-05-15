import { Body, Controller, Post } from '@nestjs/common';
import { CreateDriver } from '../../../../aplication/use-cases/Create-Driver/create-driver';
import { CreateDriverBody } from '../../dtos/create-DriverBody-body';
import { DriverViewModel } from '../../view-models/Driver-view-model';

@Controller('driver')
export class DriverController {
  constructor(private creatDriver: CreateDriver) {}

  @Post()
  async create(@Body() { name, salary, truckId }: CreateDriverBody) {
    const { driver } = await this.creatDriver.execute({
      name,
      salary,
      truckId,
    });

    return { driver: DriverViewModel.toHTTP(driver) };
  }
}
