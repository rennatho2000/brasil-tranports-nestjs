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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TruckController = void 0;
const common_1 = require("@nestjs/common");
const create_truck_view_model_1 = require("../../view-models/truck-view-model/create-truck-view-model");
const create_Truck_body_1 = require("../../dtos/truck-dtos/create-Truck-body");
const CreateTruck_1 = require("../../../../aplication/use-cases/Create-Truck/CreateTruck");
const list_truck_requeste_1 = require("../../dtos/truck-dtos/list-truck-requeste");
const get_truck_view_model_1 = require("../../view-models/truck-view-model/get-truck-view-model");
const GetAllTruk_1 = require("../../../../aplication/use-cases/Create-Truck/GetAllTruk");
let TruckController = class TruckController {
    constructor(creatTruck, getAllTrucksUseCase) {
        this.creatTruck = creatTruck;
        this.getAllTrucksUseCase = getAllTrucksUseCase;
    }
    async create({ plate, axes, model, stipulatedAverageConsumption, valuePerKmReceived, }) {
        const { truck } = await this.creatTruck.execute({
            plate,
            model,
            axes,
            stipulatedAverageConsumption,
            valuePerKmReceived,
        });
        return { truck: create_truck_view_model_1.TruckViewModel.toHTTP(truck) };
    }
    async getAllTrucks({ plate }) {
        const { truck } = await this.getAllTrucksUseCase.execute({
            plate,
        });
        return get_truck_view_model_1.GetAllTruckViewModel.toHTTP(truck);
    }
};
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_Truck_body_1.CreateTruckBody]),
    __metadata("design:returntype", Promise)
], TruckController.prototype, "create", null);
__decorate([
    (0, common_1.Get)('/:plate/'),
    __param(0, (0, common_1.Param)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [list_truck_requeste_1.GetAllTrucksParams]),
    __metadata("design:returntype", Promise)
], TruckController.prototype, "getAllTrucks", null);
TruckController = __decorate([
    (0, common_1.Controller)('truck'),
    __metadata("design:paramtypes", [CreateTruck_1.CreateTruck,
        GetAllTruk_1.GetAllTrucksUseCase])
], TruckController);
exports.TruckController = TruckController;
//# sourceMappingURL=truck.controller.js.map