import { Truck } from '../entities/truck/truck';
export interface GetTruckProps {
    plate: string;
}
export declare abstract class TruckRepository {
    abstract create(truck: Truck): Promise<void>;
    abstract getByplate(plate: string): Promise<Truck | null>;
    abstract getAllByPlate(Data: GetTruckProps): Promise<Truck[]>;
}
