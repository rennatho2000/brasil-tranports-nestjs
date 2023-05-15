import { Driver } from '../entities/driver/Driver';
export declare abstract class DriverRepository {
    abstract create(driver: Driver): Promise<void>;
    abstract findByTuckId(truckId: string): Promise<Driver | null>;
}
