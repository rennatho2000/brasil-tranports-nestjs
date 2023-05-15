"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DatabaseModule = void 0;
const common_1 = require("@nestjs/common");
const driver_repository_1 = require("../../aplication/repositories/driver-repository");
const prisma_driver_repository_1 = require("./prisma/repositories/prisma-driver-repository");
const prisma_service_1 = require("./prisma/prisma.service");
const truck_repository_1 = require("../../aplication/repositories/truck-repository");
const prisma_truck_repository_1 = require("./prisma/repositories/prisma-truck-repository");
const ConsumptionExpenses_repository_1 = require("../../aplication/repositories/ConsumptionExpenses-repository");
const prisma_ConsumptionExpenses_repository_1 = require("./prisma/repositories/prisma-ConsumptionExpenses-repository");
const maintenace_repository_1 = require("../../aplication/repositories/maintenace-repository");
const prisma_maintenance_repository_1 = require("./prisma/repositories/prisma-maintenance-repository");
const RevenueAndProfit_repository_1 = require("../../aplication/repositories/RevenueAndProfit-repository");
const prisma_revenueAndProfit_mapper_1 = require("./prisma/repositories/prisma-revenueAndProfit-mapper");
let DatabaseModule = class DatabaseModule {
};
DatabaseModule = __decorate([
    (0, common_1.Module)({
        controllers: [],
        exports: [
            driver_repository_1.DriverRepository,
            truck_repository_1.TruckRepository,
            ConsumptionExpenses_repository_1.ConsumptionExpensesRepository,
            maintenace_repository_1.MaintenanceRepository,
            RevenueAndProfit_repository_1.RevenueAndProfitRepository,
        ],
        providers: [
            prisma_service_1.PrismaService,
            {
                provide: driver_repository_1.DriverRepository,
                useClass: prisma_driver_repository_1.PrismaDriverRepository,
            },
            prisma_service_1.PrismaService,
            {
                provide: truck_repository_1.TruckRepository,
                useClass: prisma_truck_repository_1.PrismaTruckRepository,
            },
            prisma_service_1.PrismaService,
            {
                provide: ConsumptionExpenses_repository_1.ConsumptionExpensesRepository,
                useClass: prisma_ConsumptionExpenses_repository_1.PrismaConsumptionExpensesRepository,
            },
            {
                provide: maintenace_repository_1.MaintenanceRepository,
                useClass: prisma_maintenance_repository_1.PrismaMaintenanceRepository,
            },
            {
                provide: RevenueAndProfit_repository_1.RevenueAndProfitRepository,
                useClass: prisma_revenueAndProfit_mapper_1.PrismaRevenueAndProfitRepository,
            },
        ],
    })
], DatabaseModule);
exports.DatabaseModule = DatabaseModule;
//# sourceMappingURL=database.module.js.map