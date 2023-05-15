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
exports.CreateTruck = void 0;
const common_1 = require("@nestjs/common");
const axes_1 = require("../../entities/truck/axes");
const truck_1 = require("../../entities/truck/truck");
const truck_repository_1 = require("../../repositories/truck-repository");
const BadRequestError_1 = require("../../../infra/errors/BadRequestError");
let CreateTruck = class CreateTruck {
    constructor(truckRepository) {
        this.truckRepository = truckRepository;
    }
    async execute(request) {
        const TruckPlateAlreadyExists = await this.truckRepository.getByplate(request.plate);
        if (TruckPlateAlreadyExists) {
            throw new BadRequestError_1.BadRequestError('Truck with this plate already exists', 'Truck/invalid_request');
        }
        const { model, plate, axes, stipulatedAverageConsumption, valuePerKmReceived, } = request;
        const truck = new truck_1.Truck({
            plate,
            model,
            axes: new axes_1.Axes(axes),
            stipulatedAverageConsumption,
            valuePerKmReceived,
        });
        await this.truckRepository.create(truck);
        return {
            truck,
        };
    }
};
CreateTruck = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [truck_repository_1.TruckRepository])
], CreateTruck);
exports.CreateTruck = CreateTruck;
//# sourceMappingURL=CreateTruck.js.map