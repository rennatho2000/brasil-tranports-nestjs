import { RawMaintenance } from '@prisma/client';
import { Maintenance } from 'src/aplication/entities/Maintenance/Maintenance';

type RawToEntity<T extends RawMaintenance> = GenericEntityMapper<T>;

type RawmaintenanceWithRelations = RawMaintenance & {
  truck?: RawMaintenance;
};

export class PrisMamaintenanceMapper {
  static toPrisma(maintenance: Maintenance) {
    return {
      id: maintenance.id,
      amountSpent: maintenance.amountSpent,
      createdAt: maintenance.createdAt,
      truckId: maintenance.truckId,
      driverId: maintenance.driverId,
    };
  }

  static toDomain(raw: RawmaintenanceWithRelations): Maintenance {
    const typedRaw: RawToEntity<RawMaintenance> = { ...raw };

    return new Maintenance({
      ...typedRaw,
    });
  }
}
