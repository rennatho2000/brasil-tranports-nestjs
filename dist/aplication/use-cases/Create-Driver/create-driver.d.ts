import { Driver } from 'src/aplication/entities/driver/Driver';
import { DriverRepository } from 'src/aplication/repositories/driver-repository';
interface CreateDriverRequest {
    name: string;
    salary: number;
    truckId: string;
}
interface CreateDriverResponse {
    driver: Driver;
}
export declare class CreateDriver {
    private driverRepository;
    constructor(driverRepository: DriverRepository);
    execute(request: CreateDriverRequest): Promise<CreateDriverResponse>;
}
export {};
