"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DriverViewModel = void 0;
class DriverViewModel {
    static toHTTP(driver) {
        return {
            id: driver.id,
            name: driver.name.value,
            salary: driver.salary,
            truckId: driver.truckId,
        };
    }
}
exports.DriverViewModel = DriverViewModel;
//# sourceMappingURL=Driver-view-model.js.map