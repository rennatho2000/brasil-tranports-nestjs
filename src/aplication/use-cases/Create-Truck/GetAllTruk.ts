import { Injectable } from '@nestjs/common';
import { Truck } from 'src/aplication/entities/truck/truck';
import { TruckRepository } from 'src/aplication/repositories/truck-repository';

interface CreateTruckRequest {
  plate: string;
}

interface CreateTruckResponse {
  truck: Truck[];
}
@Injectable()
export class GetAllTrucksUseCase {
  constructor(private truckRepository: TruckRepository) {}

  async execute(request: CreateTruckRequest): Promise<CreateTruckResponse> {
    const { plate } = request;
    const truck = await this.truckRepository.getAllByPlate({ plate });

    return {
      truck,
    };
  }
}
