import { PrismaService } from '../prisma.service';
import { TruckRepository } from 'src/aplication/repositories/truck-repository';
import { Truck } from 'src/aplication/entities/truck/truck';
export declare class PrismaTruckRepository implements TruckRepository {
    private prisma;
    constructor(prisma: PrismaService);
    create(truck: Truck): Promise<void>;
    getByplate(plate: string): Promise<Truck | null>;
    getAllByPlate(): Promise<Truck[]>;
}
