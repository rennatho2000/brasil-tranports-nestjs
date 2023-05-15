import { Replace } from 'src/aplication/helpers/Replace';
export interface ConsumptionExpensesProps {
    spentLiters: number;
    kmDriven: number;
    averageConsumption: number;
    truckId: string;
    createdAt: Date;
}
export declare class ConsumptionExpenses {
    private _id;
    private props;
    constructor(props: Replace<ConsumptionExpensesProps, {
        createdAt?: Date;
    }>, _id?: string);
    get id(): string;
    set spentLiters(spentLiters: number);
    get spentLiters(): number;
    set kmDriven(kmDriven: number);
    get kmDriven(): number;
    set averageConsumption(averageConsumption: number);
    get averageConsumption(): number;
    set truckId(truckId: string);
    get truckId(): string;
    set createdAt(createdAt: Date);
    get createdAt(): Date;
}
