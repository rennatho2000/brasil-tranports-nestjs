import {
  RawConsumptionExpenses,
  RawDriver,
  RawMaintenance,
  RawRevenueAndProfit,
  RawTruck,
} from '@prisma/client';
import { Axes } from 'src/aplication/entities/truck/axes';
import { Truck } from 'src/aplication/entities/truck/truck';

type RawToEntity<T extends RawTruck> = GenericEntityMapper<T>;

type RawTruckWithRelations = RawTruck & {
  driver?: RawDriver[];
  maintenance?: RawMaintenance[];
  consumptionExpenses?: RawConsumptionExpenses[];
  revenueAndProfit?: RawRevenueAndProfit[];
};

export class PrismaTruckMapper {
  static toPrisma(truck: Truck) {
    return {
      id: truck.id,
      model: truck.model,
      plate: truck.plate,
      axes: Number(truck.axes.value),
      stipulatedAverageConsumption: truck.stipulatedAverageConsumption,
      valuePerKmReceived: truck.valuePerKmReceived,
      createdAt: truck.createdAt,
    };
  }

  static toDomain(raw: RawTruckWithRelations): Truck {
    const typedRaw: RawToEntity<RawTruck> = { ...raw };

    return new Truck({
      ...typedRaw,
      axes: new Axes(typedRaw.axes),
      driver: [],
      consumptionExpenses: [],
      revenueAndProfit: [],
      maintenance: [],
    });
  }
}
