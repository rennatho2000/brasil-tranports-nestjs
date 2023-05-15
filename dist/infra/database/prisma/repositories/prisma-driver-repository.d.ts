import { PrismaService } from '../prisma.service';
import { DriverRepository } from 'src/aplication/repositories/driver-repository';
import { Driver } from 'src/aplication/entities/driver/Driver';
export declare class PrismaDriverRepository implements DriverRepository {
    private prisma;
    constructor(prisma: PrismaService);
    create(driver: Driver): Promise<void>;
    findByTuckId(truckId: string): Promise<Driver | null>;
}
