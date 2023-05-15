import { Injectable } from '@nestjs/common';
import { Driver } from 'src/aplication/entities/driver/Driver';
import { Name } from 'src/aplication/entities/driver/Name';
import { DriverRepository } from 'src/aplication/repositories/driver-repository';
import { BadRequestError } from 'src/infra/errors/BadRequestError';

interface CreateDriverRequest {
  name: string;
  salary: number;
  truckId: string;
}

interface CreateDriverResponse {
  driver: Driver;
}
@Injectable()
export class CreateDriver {
  constructor(private driverRepository: DriverRepository) {}

  async execute(request: CreateDriverRequest): Promise<CreateDriverResponse> {
    const TruckidAlreadyUsed = await this.driverRepository.findByTuckId(
      request.truckId,
    );

    if (TruckidAlreadyUsed) {
      throw new BadRequestError(
        'This TruckId already used',
        'TruckIdIsAlreadyUsed/invalid_request',
      );
    }
    const { name, salary, truckId } = request;

    const driver = new Driver({
      name: new Name(name),
      salary,
      truckId,
    });

    await this.driverRepository.create(driver);

    return {
      driver,
    };
  }
}
