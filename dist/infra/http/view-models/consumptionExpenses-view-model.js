"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConsumptionExpensesViewModel = void 0;
class ConsumptionExpensesViewModel {
    static toHTTP(consumptionExpenses) {
        return {
            id: consumptionExpenses.id,
            spentLiters: consumptionExpenses.spentLiters,
            kmDriven: consumptionExpenses.kmDriven,
            averageConsumption: consumptionExpenses.averageConsumption,
            truckId: consumptionExpenses.truckId,
        };
    }
}
exports.ConsumptionExpensesViewModel = ConsumptionExpensesViewModel;
//# sourceMappingURL=consumptionExpenses-view-model.js.map