import { Truck } from 'src/aplication/entities/truck/truck';
import { TruckRepository } from 'src/aplication/repositories/truck-repository';
interface CreateTruckRequest {
    plate: string;
}
interface CreateTruckResponse {
    truck: Truck[];
}
export declare class GetAllTrucksUseCase {
    private truckRepository;
    constructor(truckRepository: TruckRepository);
    execute(request: CreateTruckRequest): Promise<CreateTruckResponse>;
}
export {};
