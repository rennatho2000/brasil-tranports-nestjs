import { Driver } from './Driver';
import { Name } from './Name';

describe('DriverTeste', () => {
  it('should be able to create a driver', () => {
    const driver = new Driver({
      name: new Name('JavaScrip in Node'),
      salary: 3000,
      truckId: '242324-i2424-r9222',
    });
    expect(driver).toBeTruthy();
  });
});
