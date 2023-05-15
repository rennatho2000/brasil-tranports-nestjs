import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { RevenueAndProfitRepository } from 'src/aplication/repositories/RevenueAndProfit-repository';
import { PrismaRevenueAndProfitMapper } from '../mappers/prisma-revenueAndProfit-mapper';
import { RevenueAndProfit } from 'src/aplication/entities/RevenueAndOrofit/RevenueAndOrofit';

@Injectable()
export class PrismaRevenueAndProfitRepository
  implements RevenueAndProfitRepository
{
  constructor(private prisma: PrismaService) {}

  async create(revenueAndProfit: RevenueAndProfit): Promise<void> {
    const raw = PrismaRevenueAndProfitMapper.toPrisma(revenueAndProfit);

    await this.prisma.rawRevenueAndProfit.create({
      data: raw,
    });
  }
}
