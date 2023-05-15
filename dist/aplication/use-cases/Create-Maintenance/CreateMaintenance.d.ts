import { Maintenance } from '../../entities/Maintenance/Maintenance';
import { MaintenanceRepository } from 'src/aplication/repositories/maintenace-repository';
interface CreateMaintenaceRequest {
    amountSpent: number;
    truckId: string;
    driverId: string;
}
interface CreateMaintenaceResponse {
    maintenance: Maintenance;
}
export declare class CreateMaintenace {
    private driverRepository;
    constructor(driverRepository: MaintenanceRepository);
    execute(request: CreateMaintenaceRequest): Promise<CreateMaintenaceResponse>;
}
export {};
