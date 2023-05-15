import { Maintenance } from '../entities/Maintenance/Maintenance';

export abstract class MaintenanceRepository {
  abstract create(maintenace: Maintenance): Promise<void>;
}
