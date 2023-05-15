import { RawMaintenance } from '@prisma/client';
import { Maintenance } from 'src/aplication/entities/Maintenance/Maintenance';
type RawmaintenanceWithRelations = RawMaintenance & {
    truck?: RawMaintenance;
};
export declare class PrisMamaintenanceMapper {
    static toPrisma(maintenance: Maintenance): {
        id: string;
        amountSpent: number;
        createdAt: Date;
        truckId: string;
        driverId: string;
    };
    static toDomain(raw: RawmaintenanceWithRelations): Maintenance;
}
export {};
