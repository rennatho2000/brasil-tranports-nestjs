"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PrismaConsumptionExpensesMapper = void 0;
const ConsumptionExpenses_1 = require("../../../../aplication/entities/consumptionExpenses/ConsumptionExpenses");
class PrismaConsumptionExpensesMapper {
    static toPrisma(consumptionExpenses) {
        return {
            id: consumptionExpenses.id,
            spentLiters: consumptionExpenses.spentLiters,
            kmDriven: consumptionExpenses.kmDriven,
            averageConsumption: consumptionExpenses.averageConsumption,
            createdAt: consumptionExpenses.createdAt,
            truckId: consumptionExpenses.truckId,
        };
    }
    static toDomain(raw) {
        const typedRaw = Object.assign({}, raw);
        return new ConsumptionExpenses_1.ConsumptionExpenses(Object.assign(Object.assign({}, typedRaw), { truckId: typedRaw.truckId }));
    }
}
exports.PrismaConsumptionExpensesMapper = PrismaConsumptionExpensesMapper;
//# sourceMappingURL=prisma-ConsumpionExpensesRepository.js.map