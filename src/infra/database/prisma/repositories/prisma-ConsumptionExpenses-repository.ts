import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import {
  ConsumptionExpensesRepository,
  GetConsumptionExpensesProps,
} from 'src/aplication/repositories/ConsumptionExpenses-repository';
import { ConsumptionExpenses } from 'src/aplication/entities/consumptionExpenses/ConsumptionExpenses';
import { PrismaConsumptionExpensesMapper } from '../mappers/prisma-ConsumpionExpensesRepository';

@Injectable()
export class PrismaConsumptionExpensesRepository
  implements ConsumptionExpensesRepository
{
  constructor(private prisma: PrismaService) {}

  async create(consumptionExpenses: ConsumptionExpenses): Promise<void> {
    const raw = PrismaConsumptionExpensesMapper.toPrisma(consumptionExpenses);

    await this.prisma.rawConsumptionExpenses.create({
      data: raw,
    });
  }
  async getConsumptionExpenses({
    truckId,
    startDate,
    endDate,
  }: GetConsumptionExpensesProps): Promise<ConsumptionExpenses[]> {
    const rawList = await this.prisma.rawConsumptionExpenses.findMany({
      where: {
        truckId,
        createdAt: {
          gte: startDate,
          lt: endDate,
        },
      },
    });
    return rawList.map((raw) => {
      return PrismaConsumptionExpensesMapper.toDomain(raw);
    });
  }
}
