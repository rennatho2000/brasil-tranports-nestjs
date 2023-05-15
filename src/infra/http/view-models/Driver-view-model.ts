import { Driver } from 'src/aplication/entities/driver/Driver';

export class DriverViewModel {
  static toHTTP(driver: Driver) {
    return {
      id: driver.id,
      name: driver.name.value,
      salary: driver.salary,
      truckId: driver.truckId,
    };
  }
}
