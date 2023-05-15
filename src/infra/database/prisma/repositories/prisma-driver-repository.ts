import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { DriverRepository } from 'src/aplication/repositories/driver-repository';
import { Driver } from 'src/aplication/entities/driver/Driver';
import { PrismaDriverMapper } from '../mappers/prisma-Driver-mapper';

@Injectable()
export class PrismaDriverRepository implements DriverRepository {
  constructor(private prisma: PrismaService) {}

  async create(driver: Driver): Promise<void> {
    const raw = PrismaDriverMapper.toPrisma(driver);

    await this.prisma.rawDriver.create({
      data: raw,
    });
  }
  async findByTuckId(truckId: string): Promise<Driver | null> {
    const raw = await this.prisma.rawDriver.findFirst({
      where: {
        truckId,
      },
    });

    return raw ? PrismaDriverMapper.toDomain(raw) : null;
  }
}
