import { PrismaService } from '../prisma.service';
import { MaintenanceRepository } from 'src/aplication/repositories/maintenace-repository';
import { Maintenance } from 'src/aplication/entities/Maintenance/Maintenance';
export declare class PrismaMaintenanceRepository implements MaintenanceRepository {
    private prisma;
    constructor(prisma: PrismaService);
    create(maintenance: Maintenance): Promise<void>;
}
