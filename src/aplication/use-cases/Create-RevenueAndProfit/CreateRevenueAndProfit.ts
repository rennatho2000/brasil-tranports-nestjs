import { Injectable } from '@nestjs/common';
import { RevenueAndProfit } from 'src/aplication/entities/RevenueAndOrofit/RevenueAndOrofit';
import { RevenueAndProfitRepository } from 'src/aplication/repositories/RevenueAndProfit-repository';

interface CreateRevenueAndProfitRequest {
  revenue: number;
  spent: number;
  expendableCost: number;
  profit: number;
  wastedProfit: number;
  truckId: string;
  driverId: string;
}

interface CreateRevenueAndProfitResponse {
  revenueAndProfit: RevenueAndProfit;
}

@Injectable()
export class CreateRevenueAndProfit {
  constructor(private revenueAndProfitRepository: RevenueAndProfitRepository) {}
  async execute(
    request: CreateRevenueAndProfitRequest,
  ): Promise<CreateRevenueAndProfitResponse> {
    const {
      revenue,
      spent,
      expendableCost,
      profit,
      wastedProfit,
      truckId,
      driverId,
    } = request;

    const revenueAndProfit = new RevenueAndProfit({
      revenue,
      spent,
      expendableCost,
      profit,
      wastedProfit,
      truckId,
      driverId,
    });

    await this.revenueAndProfitRepository.create(revenueAndProfit);

    return {
      revenueAndProfit,
    };
  }
}
