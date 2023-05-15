import { Maintenance } from './Maintenance';

describe('MaintenaceTeste', () => {
  it('should be able to create a Maintenace', () => {
    const maintenace = new Maintenance({
      amountSpent: 7000,
    });
    expect(maintenace).toBeTruthy();
  });
});
