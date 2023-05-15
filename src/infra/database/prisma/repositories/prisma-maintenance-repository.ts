import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { MaintenanceRepository } from 'src/aplication/repositories/maintenace-repository';
import { Maintenance } from 'src/aplication/entities/Maintenance/Maintenance';
import { PrisMamaintenanceMapper } from '../mappers/prisma-maintenance-mapper';

@Injectable()
export class PrismaMaintenanceRepository implements MaintenanceRepository {
  constructor(private prisma: PrismaService) {}

  async create(maintenance: Maintenance): Promise<void> {
    const raw = PrisMamaintenanceMapper.toPrisma(maintenance);

    await this.prisma.rawMaintenance.create({
      data: raw,
    });
  }
}
