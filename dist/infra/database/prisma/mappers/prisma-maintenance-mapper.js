"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PrisMamaintenanceMapper = void 0;
const Maintenance_1 = require("../../../../aplication/entities/Maintenance/Maintenance");
class PrisMamaintenanceMapper {
    static toPrisma(maintenance) {
        return {
            id: maintenance.id,
            amountSpent: maintenance.amountSpent,
            createdAt: maintenance.createdAt,
            truckId: maintenance.truckId,
            driverId: maintenance.driverId,
        };
    }
    static toDomain(raw) {
        const typedRaw = Object.assign({}, raw);
        return new Maintenance_1.Maintenance(Object.assign({}, typedRaw));
    }
}
exports.PrisMamaintenanceMapper = PrisMamaintenanceMapper;
//# sourceMappingURL=prisma-maintenance-mapper.js.map