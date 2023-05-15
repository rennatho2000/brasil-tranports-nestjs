import { DatabaseModule } from 'src/infra/database/database.module';
import { DriverController } from './Driver.controller/driver.controller';
import { CreateDriver } from 'src/aplication/use-cases/Create-Driver/create-driver';
import { Module } from '@nestjs/common';
import { TruckController } from './Truck.controller/truck.controller';
import { CreateTruck } from 'src/aplication/use-cases/Create-Truck/CreateTruck';
import { RevenueAndProfitController } from './RevenueAndProfit.controller/revenueAndProfit.controller';
import { CreateConsumptionExpenses } from 'src/aplication/use-cases/ConsumptionExpenses/CreateConsumpitionExpenses/CreateConsumptionExpenses';
import { CreateRevenueAndProfit } from 'src/aplication/use-cases/Create-RevenueAndProfit/CreateRevenueAndProfit';
import { MaintenanceController } from './Mamaintenance.controller/mamaintenance.controller';
import { CreateMaintenace } from 'src/aplication/use-cases/Create-Maintenance/CreateMaintenance';
import { ConsumptionExpensesController } from './ConsumptionExpenses.controller/consumptionExpenses.controller';
import { GetConsumptionExpenses } from 'src/aplication/use-cases/ConsumptionExpenses/CreateConsumpitionExpenses/GetConsumptionExpenses';
import { GetAllTrucksUseCase } from 'src/aplication/use-cases/Create-Truck/GetAllTruk';

@Module({
  imports: [DatabaseModule],
  controllers: [
    DriverController,
    TruckController,
    RevenueAndProfitController,
    ConsumptionExpensesController,
    MaintenanceController,
  ],
  providers: [
    CreateDriver,
    CreateTruck,
    CreateRevenueAndProfit,
    CreateConsumptionExpenses,
    CreateMaintenace,
    GetConsumptionExpenses,
    GetAllTrucksUseCase,
  ],
})
export class HttpModule {}
