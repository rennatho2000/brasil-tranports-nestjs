import { Maintenance } from '../entities/Maintenance/Maintenance';
export declare abstract class MaintenanceRepository {
    abstract create(maintenace: Maintenance): Promise<void>;
}
