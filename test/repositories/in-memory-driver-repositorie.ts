import { Driver } from 'src/aplication/entities/driver/Driver';
import { DriverRepository } from 'src/aplication/repositories/driver-repository';

export class InMemorydriverRepository implements DriverRepository {
  public drivers: Driver[] = [];

  async create(driver: Driver) {
    this.drivers.push(driver);
  }
}
