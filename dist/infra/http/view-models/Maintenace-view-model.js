"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MaintenanceViewModel = void 0;
class MaintenanceViewModel {
    static toHTTP(maintenance) {
        return {
            id: maintenance.id,
            amountSpent: maintenance.amountSpent,
        };
    }
}
exports.MaintenanceViewModel = MaintenanceViewModel;
//# sourceMappingURL=Maintenace-view-model.js.map