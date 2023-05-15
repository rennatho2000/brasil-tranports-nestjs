import { CreateMaintenanceBody } from '../../dtos/create-Maintenance-body';
import { CreateMaintenace } from 'src/aplication/use-cases/Create-Maintenance/CreateMaintenance';
export declare class MaintenanceController {
    private createMaintenance;
    constructor(createMaintenance: CreateMaintenace);
    create({ amountSpent, driverId, truckId }: CreateMaintenanceBody): Promise<{
        maintenance: {
            id: string;
            amountSpent: number;
        };
    }>;
}
