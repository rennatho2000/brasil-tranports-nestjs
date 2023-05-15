import { RawDriver, RawMaintenance, RawRevenueAndProfit, RawTruck } from '@prisma/client';
import { Driver } from 'src/aplication/entities/driver/Driver';
type RawDriverWithRelations = RawDriver & {
    truck?: RawTruck;
    maintenance?: RawMaintenance[];
    revenueAndProfit?: RawRevenueAndProfit[];
};
export declare class PrismaDriverMapper {
    static toPrisma(driver: Driver): {
        id: string;
        name: string;
        salary: number;
        createdAt: Date;
        truckId: string;
        RevenueAndProfit: import("../../../../aplication/entities/RevenueAndOrofit/RevenueAndOrofit").RevenueAndProfit[] | null | undefined;
        Maintenance: import("../../../../aplication/entities/Maintenance/Maintenance").Maintenance[] | null | undefined;
    };
    static toDomain(raw: RawDriverWithRelations): Driver;
}
export {};
