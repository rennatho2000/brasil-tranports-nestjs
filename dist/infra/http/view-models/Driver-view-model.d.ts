import { Driver } from 'src/aplication/entities/driver/Driver';
export declare class DriverViewModel {
    static toHTTP(driver: Driver): {
        id: string;
        name: string;
        salary: number;
        truckId: string;
    };
}
