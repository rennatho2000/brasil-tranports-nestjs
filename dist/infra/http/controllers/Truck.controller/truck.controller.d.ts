import { CreateTruckBody } from '../../dtos/truck-dtos/create-Truck-body';
import { CreateTruck } from 'src/aplication/use-cases/Create-Truck/CreateTruck';
import { GetAllTrucksParams } from '../../dtos/truck-dtos/list-truck-requeste';
import { GetAllTrucksUseCase } from 'src/aplication/use-cases/Create-Truck/GetAllTruk';
export declare class TruckController {
    private creatTruck;
    private getAllTrucksUseCase;
    constructor(creatTruck: CreateTruck, getAllTrucksUseCase: GetAllTrucksUseCase);
    create({ plate, axes, model, stipulatedAverageConsumption, valuePerKmReceived, }: CreateTruckBody): Promise<{
        truck: {
            id: string;
            plate: string;
            axes: number;
            stipulatedAverageConsumption: number;
            valuePerKmReceived: number;
        };
    }>;
    getAllTrucks({ plate }: GetAllTrucksParams): Promise<{
        data: {
            truck: import("../../../../aplication/entities/truck/truck").Truck[];
        };
    }>;
}
