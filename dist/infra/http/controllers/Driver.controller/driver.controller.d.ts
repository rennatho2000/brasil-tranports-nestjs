import { CreateDriver } from '../../../../aplication/use-cases/Create-Driver/create-driver';
import { CreateDriverBody } from '../../dtos/create-DriverBody-body';
export declare class DriverController {
    private creatDriver;
    constructor(creatDriver: CreateDriver);
    create({ name, salary, truckId }: CreateDriverBody): Promise<{
        driver: {
            id: string;
            name: string;
            salary: number;
            truckId: string;
        };
    }>;
}
