"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PrismaTruckMapper = void 0;
const axes_1 = require("../../../../aplication/entities/truck/axes");
const truck_1 = require("../../../../aplication/entities/truck/truck");
class PrismaTruckMapper {
    static toPrisma(truck) {
        return {
            id: truck.id,
            model: truck.model,
            plate: truck.plate,
            axes: Number(truck.axes.value),
            stipulatedAverageConsumption: truck.stipulatedAverageConsumption,
            valuePerKmReceived: truck.valuePerKmReceived,
            createdAt: truck.createdAt,
        };
    }
    static toDomain(raw) {
        const typedRaw = Object.assign({}, raw);
        return new truck_1.Truck(Object.assign(Object.assign({}, typedRaw), { axes: new axes_1.Axes(typedRaw.axes), driver: [], consumptionExpenses: [], revenueAndProfit: [], maintenance: [] }));
    }
}
exports.PrismaTruckMapper = PrismaTruckMapper;
//# sourceMappingURL=prisma-Truck-mapper.js.map