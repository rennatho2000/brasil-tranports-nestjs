"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TruckViewModel = void 0;
class TruckViewModel {
    static toHTTP(truck) {
        return {
            id: truck.id,
            plate: truck.plate,
            axes: truck.axes.value,
            stipulatedAverageConsumption: truck.stipulatedAverageConsumption,
            valuePerKmReceived: truck.valuePerKmReceived,
        };
    }
}
exports.TruckViewModel = TruckViewModel;
//# sourceMappingURL=Truck-view-model.js.map