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
exports.PrismaTruckRepository = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma.service");
const prisma_Truck_mapper_1 = require("../mappers/prisma-Truck-mapper");
let PrismaTruckRepository = class PrismaTruckRepository {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async create(truck) {
        const raw = prisma_Truck_mapper_1.PrismaTruckMapper.toPrisma(truck);
        await this.prisma.rawTruck.create({
            data: raw,
        });
    }
    async getByplate(plate) {
        const raw = await this.prisma.rawTruck.findFirst({
            where: {
                plate,
            },
        });
        return raw ? prisma_Truck_mapper_1.PrismaTruckMapper.toDomain(raw) : null;
    }
    async getAllByPlate() {
        const rawList = await this.prisma.rawTruck.findMany({
            where: {},
        });
        return rawList.map((raw) => {
            return prisma_Truck_mapper_1.PrismaTruckMapper.toDomain(raw);
        });
    }
};
PrismaTruckRepository = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], PrismaTruckRepository);
exports.PrismaTruckRepository = PrismaTruckRepository;
//# sourceMappingURL=prisma-truck-repository.js.map