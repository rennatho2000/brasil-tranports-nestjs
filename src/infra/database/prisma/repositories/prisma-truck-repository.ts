import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { TruckRepository } from 'src/aplication/repositories/truck-repository';
import { Truck } from 'src/aplication/entities/truck/truck';
import { PrismaTruckMapper } from '../mappers/prisma-Truck-mapper';

@Injectable()
export class PrismaTruckRepository implements TruckRepository {
  constructor(private prisma: PrismaService) {}

  async create(truck: Truck): Promise<void> {
    const raw = PrismaTruckMapper.toPrisma(truck);

    await this.prisma.rawTruck.create({
      data: raw,
    });
  }
  async getByplate(plate: string): Promise<Truck | null> {
    const raw = await this.prisma.rawTruck.findFirst({
      where: {
        plate,
      },
    });

    return raw ? PrismaTruckMapper.toDomain(raw) : null;
  }
  async getAllByPlate(): Promise<Truck[]> {
    const rawList = await this.prisma.rawTruck.findMany({
      where: {},
    });

    return rawList.map((raw) => {
      return PrismaTruckMapper.toDomain(raw);
    });
  }
}
