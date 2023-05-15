import { Replace } from 'src/aplication/helpers/Replace';
export interface RevenueAndProfitProps {
    revenue: number;
    spent: number;
    expendableCost: number;
    profit: number;
    wastedProfit: number;
    createdAt: Date;
    truckId: string;
    driverId: string;
}
export declare class RevenueAndProfit {
    private _id;
    private props;
    constructor(props: Replace<RevenueAndProfitProps, {
        createdAt?: Date;
    }>);
    get id(): string;
    get revenue(): number;
    set spent(spent: number);
    get spent(): number;
    set expendableCost(expendableCost: number);
    get expendableCost(): number;
    set profit(profit: number);
    get profit(): number;
    set wastedProfit(wastedProfit: number);
    get wastedProfit(): number;
    set createdAt(createdAt: Date);
    get createdAt(): Date;
    set truckId(truckId: string);
    get truckId(): string;
    set driverId(driverId: string);
    get driverId(): string;
}
