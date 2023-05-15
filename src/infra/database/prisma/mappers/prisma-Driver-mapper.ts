import {
  RawDriver,
  RawMaintenance,
  RawRevenueAndProfit,
  RawTruck,
} from '@prisma/client';
import { Driver } from 'src/aplication/entities/driver/Driver';
import { Name } from 'src/aplication/entities/driver/Name';

type RawToEntity<T extends RawDriver> = GenericEntityMapper<T>;

type RawDriverWithRelations = RawDriver & {
  truck?: RawTruck;
  maintenance?: RawMaintenance[];
  revenueAndProfit?: RawRevenueAndProfit[];
};

export class PrismaDriverMapper {
  static toPrisma(driver: Driver) {
    return {
      id: driver.id,
      name: driver.name.value,
      salary: Number(driver.salary),
      createdAt: driver.createdAt,
      truckId: driver.truckId,
      RevenueAndProfit: driver.revenueAndProfit,
      Maintenance: driver.maintenance,
    };
  }

  static toDomain(raw: RawDriverWithRelations): Driver {
    const typedRaw: RawToEntity<RawDriver> = { ...raw };

    return new Driver({
      ...typedRaw,
      name: new Name(typedRaw.name),
    });
  }
}
