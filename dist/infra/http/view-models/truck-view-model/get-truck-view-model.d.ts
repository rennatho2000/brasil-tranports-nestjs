import { Truck } from 'src/aplication/entities/truck/truck';
export declare class GetAllTruckViewModel {
    static toHTTP(truck: Truck[]): {
        data: {
            truck: Truck[];
        };
    };
}
