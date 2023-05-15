"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PrismaDriverMapper = void 0;
const Driver_1 = require("../../../../aplication/entities/driver/Driver");
const Name_1 = require("../../../../aplication/entities/driver/Name");
class PrismaDriverMapper {
    static toPrisma(driver) {
        return {
            id: driver.id,
            name: driver.name.value,
            salary: Number(driver.salary),
            createdAt: driver.createdAt,
            truckId: driver.truckId,
            RevenueAndProfit: driver.revenueAndProfit,
            Maintenance: driver.maintenance,
        };
    }
    static toDomain(raw) {
        const typedRaw = Object.assign({}, raw);
        return new Driver_1.Driver(Object.assign(Object.assign({}, typedRaw), { name: new Name_1.Name(typedRaw.name) }));
    }
}
exports.PrismaDriverMapper = PrismaDriverMapper;
//# sourceMappingURL=prisma-Driver-mapper.js.map