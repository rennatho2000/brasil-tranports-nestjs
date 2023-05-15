import { Maintenance } from 'src/aplication/entities/Maintenance/Maintenance';
export declare class MaintenanceViewModel {
    static toHTTP(maintenance: Maintenance): {
        id: string;
        amountSpent: number;
    };
}
