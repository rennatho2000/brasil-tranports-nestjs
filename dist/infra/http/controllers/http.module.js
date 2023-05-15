"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.HttpModule = void 0;
const database_module_1 = require("../../database/database.module");
const driver_controller_1 = require("./Driver.controller/driver.controller");
const create_driver_1 = require("../../../aplication/use-cases/Create-Driver/create-driver");
const common_1 = require("@nestjs/common");
const truck_controller_1 = require("./Truck.controller/truck.controller");
const CreateTruck_1 = require("../../../aplication/use-cases/Create-Truck/CreateTruck");
const revenueAndProfit_controller_1 = require("./RevenueAndProfit.controller/revenueAndProfit.controller");
const CreateConsumptionExpenses_1 = require("../../../aplication/use-cases/ConsumptionExpenses/CreateConsumpitionExpenses/CreateConsumptionExpenses");
const CreateRevenueAndProfit_1 = require("../../../aplication/use-cases/Create-RevenueAndProfit/CreateRevenueAndProfit");
const mamaintenance_controller_1 = require("./Mamaintenance.controller/mamaintenance.controller");
const CreateMaintenance_1 = require("../../../aplication/use-cases/Create-Maintenance/CreateMaintenance");
const consumptionExpenses_controller_1 = require("./ConsumptionExpenses.controller/consumptionExpenses.controller");
const GetConsumptionExpenses_1 = require("../../../aplication/use-cases/ConsumptionExpenses/CreateConsumpitionExpenses/GetConsumptionExpenses");
const GetAllTruk_1 = require("../../../aplication/use-cases/Create-Truck/GetAllTruk");
let HttpModule = class HttpModule {
};
HttpModule = __decorate([
    (0, common_1.Module)({
        imports: [database_module_1.DatabaseModule],
        controllers: [
            driver_controller_1.DriverController,
            truck_controller_1.TruckController,
            revenueAndProfit_controller_1.RevenueAndProfitController,
            consumptionExpenses_controller_1.ConsumptionExpensesController,
            mamaintenance_controller_1.MaintenanceController,
        ],
        providers: [
            create_driver_1.CreateDriver,
            CreateTruck_1.CreateTruck,
            CreateRevenueAndProfit_1.CreateRevenueAndProfit,
            CreateConsumptionExpenses_1.CreateConsumptionExpenses,
            CreateMaintenance_1.CreateMaintenace,
            GetConsumptionExpenses_1.GetConsumptionExpenses,
            GetAllTruk_1.GetAllTrucksUseCase,
        ],
    })
], HttpModule);
exports.HttpModule = HttpModule;
//# sourceMappingURL=http.module.js.map