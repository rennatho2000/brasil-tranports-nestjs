import { Injectable } from '@nestjs/common';

import { Maintenance } from '../../entities/Maintenance/Maintenance';
import { MaintenanceRepository } from 'src/aplication/repositories/maintenace-repository';

interface CreateMaintenaceRequest {
  amountSpent: number;
  truckId: string;
  driverId: string;
}

interface CreateMaintenaceResponse {
  maintenance: Maintenance;
}

@Injectable()
export class CreateMaintenace {
  constructor(private driverRepository: MaintenanceRepository) {}

  async execute(
    request: CreateMaintenaceRequest,
  ): Promise<CreateMaintenaceResponse> {
    const { amountSpent, truckId, driverId } = request;

    const maintenance = new Maintenance({
      amountSpent,
      truckId,
      driverId,
    });

    await this.driverRepository.create(maintenance);

    return {
      maintenance,
    };
  }
}
