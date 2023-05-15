"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateMaintenace = void 0;
const common_1 = require("@nestjs/common");
const Maintenance_1 = require("../../entities/Maintenance/Maintenance");
const maintenace_repository_1 = require("../../repositories/maintenace-repository");
let CreateMaintenace = class CreateMaintenace {
    constructor(driverRepository) {
        this.driverRepository = driverRepository;
    }
    async execute(request) {
        const { amountSpent, truckId, driverId } = request;
        const maintenance = new Maintenance_1.Maintenance({
            amountSpent,
            truckId,
            driverId,
        });
        await this.driverRepository.create(maintenance);
        return {
            maintenance,
        };
    }
};
CreateMaintenace = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [maintenace_repository_1.MaintenanceRepository])
], CreateMaintenace);
exports.CreateMaintenace = CreateMaintenace;
//# sourceMappingURL=CreateMaintenance.js.map