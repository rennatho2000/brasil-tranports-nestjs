import { Truck } from 'src/aplication/entities/truck/truck';
import { TruckRepository } from 'src/aplication/repositories/truck-repository';
interface CreateTruckRequest {
    plate: string;
    axes: number;
    model: string;
    stipulatedAverageConsumption: number;
    valuePerKmReceived: number;
}
interface CreateTruckResponse {
    truck: Truck;
}
export declare class CreateTruck {
    private truckRepository;
    constructor(truckRepository: TruckRepository);
    execute(request: CreateTruckRequest): Promise<CreateTruckResponse>;
}
export {};
