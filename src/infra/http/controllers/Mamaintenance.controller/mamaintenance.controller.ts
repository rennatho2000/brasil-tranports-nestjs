import { Body, Controller, Post } from '@nestjs/common';
import { CreateMaintenanceBody } from '../../dtos/create-Maintenance-body';
import { MaintenanceViewModel } from '../../view-models/Maintenace-view-model';
import { CreateMaintenace } from 'src/aplication/use-cases/Create-Maintenance/CreateMaintenance';

@Controller('Maintenance')
export class MaintenanceController {
  constructor(private createMaintenance: CreateMaintenace) {}

  @Post()
  async create(
    @Body()
    { amountSpent, driverId, truckId }: CreateMaintenanceBody,
  ) {
    const { maintenance } = await this.createMaintenance.execute({
      amountSpent,
      driverId,
      truckId,
    });

    return { maintenance: MaintenanceViewModel.toHTTP(maintenance) };
  }
}
