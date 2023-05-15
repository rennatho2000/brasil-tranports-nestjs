import { Truck } from 'src/aplication/entities/truck/truck';
export declare class TruckViewModel {
    static toHTTP(truck: Truck): {
        id: string;
        plate: string;
        axes: number;
        stipulatedAverageConsumption: number;
        valuePerKmReceived: number;
    };
}
