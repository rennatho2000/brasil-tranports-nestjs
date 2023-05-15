import { RawConsumptionExpenses, RawTruck } from '@prisma/client';
import { ConsumptionExpenses } from 'src/aplication/entities/consumptionExpenses/ConsumptionExpenses';

type RawToEntity<T extends RawConsumptionExpenses> = GenericEntityMapper<T>;

type RawConsumptionExpensesWithRelations = RawConsumptionExpenses & {
  truck?: RawTruck;
};

export class PrismaConsumptionExpensesMapper {
  static toPrisma(consumptionExpenses: ConsumptionExpenses) {
    return {
      id: consumptionExpenses.id,
      spentLiters: consumptionExpenses.spentLiters,
      kmDriven: consumptionExpenses.kmDriven,
      averageConsumption: consumptionExpenses.averageConsumption,
      createdAt: consumptionExpenses.createdAt,
      truckId: consumptionExpenses.truckId,
    };
  }

  static toDomain(
    raw: RawConsumptionExpensesWithRelations,
  ): ConsumptionExpenses {
    const typedRaw: RawToEntity<RawConsumptionExpenses> = { ...raw };

    return new ConsumptionExpenses({
      ...typedRaw,
      truckId: typedRaw.truckId,
    });
  }
}
