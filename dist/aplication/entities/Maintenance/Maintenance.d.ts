import { Replace } from 'src/aplication/helpers/Replace';
export interface MaintenanceProps {
    amountSpent: number;
    createdAt: Date;
    truckId: string;
    driverId: string;
}
export declare class Maintenance {
    private _id;
    private props;
    constructor(props: Replace<MaintenanceProps, {
        createdAt?: Date;
    }>, _id?: string);
    get id(): string;
    set amountSpent(amountSpent: number);
    get amountSpent(): number;
    set createdAt(createdAt: Date);
    get createdAt(): Date;
    set truckId(truckId: string);
    get truckId(): string;
    set driverId(driverId: string);
    get driverId(): string;
}
