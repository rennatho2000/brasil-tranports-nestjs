import { InMemorydriverRepository } from 'test/repositories/in-memory-driver-repositorie';
import { CreateDriver } from './create-driver';

describe('Create Driver', () => {
  it('should be able to create a notification', async () => {
    const driverRepository = new InMemorydriverRepository();
    const createDriver = new CreateDriver(driverRepository);

    const { driver } = await createDriver.execute({
      name: ' JavaScript In Node',
      salary: 3000,
      truckId: '242324-i2424-r9222',
    });

    expect(driverRepository.drivers).toHaveLength(1);
    expect(driverRepository.drivers[0]).toEqual(driver);
  });
});
