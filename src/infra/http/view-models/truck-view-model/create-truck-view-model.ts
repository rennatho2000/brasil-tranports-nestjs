import { Truck } from 'src/aplication/entities/truck/truck';

export class TruckViewModel {
  static toHTTP(truck: Truck) {
    return {
      id: truck.id,
      plate: truck.plate,
      axes: truck.axes.value,
      stipulatedAverageConsumption: truck.stipulatedAverageConsumption,
      valuePerKmReceived: truck.valuePerKmReceived,
    };
  }
}
