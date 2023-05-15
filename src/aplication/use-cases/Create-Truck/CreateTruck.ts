import { Injectable } from '@nestjs/common';
import { Axes } from 'src/aplication/entities/truck/axes';
import { Truck } from 'src/aplication/entities/truck/truck';
import { TruckRepository } from 'src/aplication/repositories/truck-repository';
import { BadRequestError } from 'src/infra/errors/BadRequestError';

interface CreateTruckRequest {
  plate: string;
  axes: number;
  model: string;
  stipulatedAverageConsumption: number;
  valuePerKmReceived: number;
}

interface CreateTruckResponse {
  truck: Truck;
}
@Injectable()
export class CreateTruck {
  constructor(private truckRepository: TruckRepository) {}

  async execute(request: CreateTruckRequest): Promise<CreateTruckResponse> {
    const TruckPlateAlreadyExists = await this.truckRepository.getByplate(
      request.plate,
    );

    if (TruckPlateAlreadyExists) {
      throw new BadRequestError(
        'Truck with this plate already exists',
        'Truck/invalid_request',
      );
    }

    const {
      model,
      plate,
      axes,
      stipulatedAverageConsumption,
      valuePerKmReceived,
    } = request;

    const truck = new Truck({
      plate,
      model,
      axes: new Axes(axes),
      stipulatedAverageConsumption,
      valuePerKmReceived,
    });

    await this.truckRepository.create(truck);

    return {
      truck,
    };
  }
}
