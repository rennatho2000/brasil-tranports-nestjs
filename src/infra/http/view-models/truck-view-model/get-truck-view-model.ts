import { Truck } from 'src/aplication/entities/truck/truck';

export class GetAllTruckViewModel {
  static toHTTP(truck: Truck[]) {
    return {
      data: { truck },
    };
  }
}
