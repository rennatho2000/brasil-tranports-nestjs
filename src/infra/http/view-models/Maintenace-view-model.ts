import { Maintenance } from 'src/aplication/entities/Maintenance/Maintenance';

export class MaintenanceViewModel {
  static toHTTP(maintenance: Maintenance) {
    return {
      id: maintenance.id,
      amountSpent: maintenance.amountSpent,
    };
  }
}
