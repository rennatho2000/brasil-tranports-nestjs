import { RawConsumptionExpenses, RawDriver, RawMaintenance, RawRevenueAndProfit, RawTruck } from '@prisma/client';
import { Truck } from 'src/aplication/entities/truck/truck';
type RawTruckWithRelations = RawTruck & {
    driver?: RawDriver[];
    maintenance?: RawMaintenance[];
    consumptionExpenses?: RawConsumptionExpenses[];
    revenueAndProfit?: RawRevenueAndProfit[];
};
export declare class PrismaTruckMapper {
    static toPrisma(truck: Truck): {
        id: string;
        model: string;
        plate: string;
        axes: number;
        stipulatedAverageConsumption: number;
        valuePerKmReceived: number;
        createdAt: Date;
    };
    static toDomain(raw: RawTruckWithRelations): Truck;
}
export {};
