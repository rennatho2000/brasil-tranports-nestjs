import { Driver } from '../entities/driver/Driver';

export abstract class DriverRepository {
  abstract create(driver: Driver): Promise<void>;
  abstract findByTuckId(truckId: string): Promise<Driver | null>;
}
