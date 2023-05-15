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
exports.CreateDriver = void 0;
const common_1 = require("@nestjs/common");
const Driver_1 = require("../../entities/driver/Driver");
const Name_1 = require("../../entities/driver/Name");
const driver_repository_1 = require("../../repositories/driver-repository");
const BadRequestError_1 = require("../../../infra/errors/BadRequestError");
let CreateDriver = class CreateDriver {
    constructor(driverRepository) {
        this.driverRepository = driverRepository;
    }
    async execute(request) {
        const TruckidAlreadyUsed = await this.driverRepository.findByTuckId(request.truckId);
        if (TruckidAlreadyUsed) {
            throw new BadRequestError_1.BadRequestError('This TruckId already used', 'TruckIdIsAlreadyUsed/invalid_request');
        }
        const { name, salary, truckId } = request;
        const driver = new Driver_1.Driver({
            name: new Name_1.Name(name),
            salary,
            truckId,
        });
        await this.driverRepository.create(driver);
        return {
            driver,
        };
    }
};
CreateDriver = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [driver_repository_1.DriverRepository])
], CreateDriver);
exports.CreateDriver = CreateDriver;
//# sourceMappingURL=create-driver.js.map