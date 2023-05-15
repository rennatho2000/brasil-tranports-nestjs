import { Body, Controller, Post } from '@nestjs/common';
import { CreateRevenueAndProfit } from 'src/aplication/use-cases/Create-RevenueAndProfit/CreateRevenueAndProfit';
import { CreateRevenueAndProfitBody } from '../../dtos/create-revenueAndProfit-boody';
import { RevenueAndProfitViewModel } from '../../view-models/revenueAndProfit-view-model';

@Controller('revenueAndProfit')
export class RevenueAndProfitController {
  constructor(private creatRevenueAndProfit: CreateRevenueAndProfit) {}

  @Post()
  async create(
    @Body()
    {
      revenue,
      spent,
      expendableCost,
      profit,
      wastedProfit,
      truckId,
      driverId,
    }: CreateRevenueAndProfitBody,
  ) {
    const { revenueAndProfit } = await this.creatRevenueAndProfit.execute({
      revenue,
      spent,
      expendableCost,
      profit,
      wastedProfit,
      truckId,
      driverId,
    });

    return {
      revenueAndProfit: RevenueAndProfitViewModel.toHTTP(revenueAndProfit),
    };
  }
}
