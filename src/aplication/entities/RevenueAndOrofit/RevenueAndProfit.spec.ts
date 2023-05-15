import { RevenueAndOrofit } from './RevenueAndOrofit';

describe('RevenueAndOrofitTeste', () => {
  it('should be able to create a revenueAndOrofit', () => {
    const revenueAndOrofit = new RevenueAndOrofit({
      revenue: 33,
      spent: 44,
      expendableCost: 44,
      profit: 33,
      wastedProfit: 33,
    });
    expect(revenueAndOrofit).toBeTruthy();
  });
});
