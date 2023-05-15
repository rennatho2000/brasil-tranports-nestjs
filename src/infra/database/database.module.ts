import { Module } from '@nestjs/common';

import { DriverRepository } from 'src/aplication/repositories/driver-repository';
import { PrismaDriverRepository } from './prisma/repositories/prisma-driver-repository';
import { PrismaService } from './prisma/prisma.service';
import { TruckRepository } from 'src/aplication/repositories/truck-repository';
import { PrismaTruckRepository } from './prisma/repositories/prisma-truck-repository';
import { ConsumptionExpensesRepository } from 'src/aplication/repositories/ConsumptionExpenses-repository';
import { PrismaConsumptionExpensesRepository } from './prisma/repositories/prisma-ConsumptionExpenses-repository';
import { MaintenanceRepository } from 'src/aplication/repositories/maintenace-repository';
import { PrismaMaintenanceRepository } from './prisma/repositories/prisma-maintenance-repository';
import { RevenueAndProfitRepository } from 'src/aplication/repositories/RevenueAndProfit-repository';
import { PrismaRevenueAndProfitRepository } from './prisma/repositories/prisma-revenueAndProfit-mapper';

@Module({
  controllers: [],
  exports: [
    DriverRepository,
    TruckRepository,
    ConsumptionExpensesRepository,
    MaintenanceRepository,
    RevenueAndProfitRepository,
  ],
  providers: [
    PrismaService,
    {
      provide: DriverRepository,

      useClass: PrismaDriverRepository,
    },
    PrismaService,
    {
      provide: TruckRepository,
      useClass: PrismaTruckRepository,
    },
    PrismaService,
    {
      provide: ConsumptionExpensesRepository,
      useClass: PrismaConsumptionExpensesRepository,
    },
    {
      provide: MaintenanceRepository,
      useClass: PrismaMaintenanceRepository,
    },
    {
      provide: RevenueAndProfitRepository,
      useClass: PrismaRevenueAndProfitRepository,
    },
  ],
})
export class DatabaseModule {}
