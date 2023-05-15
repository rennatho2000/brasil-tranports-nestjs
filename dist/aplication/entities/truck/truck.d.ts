import { ConsumptionExpenses } from '../consumptionExpenses/ConsumptionExpenses';
import { Driver } from '../driver/Driver';
import { Maintenance } from '../Maintenance/Maintenance';
import { Axes } from './axes';
import { Replace } from 'src/aplication/helpers/Replace';
import { RevenueAndProfit } from '../RevenueAndOrofit/RevenueAndOrofit';
export interface TruckProps {
    model: string;
    plate: string;
    axes: Axes;
    stipulatedAverageConsumption: number;
    valuePerKmReceived: number;
    createdAt: Date;
    driver: Driver[] | null | undefined;
    consumptionExpenses: ConsumptionExpenses[] | null | undefined;
    revenueAndProfit: RevenueAndProfit[] | null | undefined;
    maintenance: Maintenance[] | null | undefined;
}
export declare class Truck {
    private _id;
    private props;
    constructor(props: Replace<TruckProps, {
        createdAt?: Date;
        driver?: Driver[];
        consumptionExpenses?: ConsumptionExpenses[];
        revenueAndProfit?: RevenueAndProfit[];
        maintenance?: Maintenance[];
    }>, id?: string);
    get id(): string;
    set model(model: string);
    get model(): string;
    set plate(plate: string);
    get plate(): string;
    set axes(axes: Axes);
    get axes(): Axes;
    set stipulatedAverageConsumption(stipulatedAverageConsumption: number);
    get stipulatedAverageConsumption(): number;
    set valuePerKmReceived(valuePerKmReceived: number);
    get valuePerKmReceived(): number;
    set createdAt(createdAt: Date);
    get createdAt(): Date;
    set driver(driver: Driver[] | null | undefined);
    get driver(): Driver[] | null | undefined;
    set consumptionExpenses(consumptionExpenses: ConsumptionExpenses[] | null | undefined);
    get consumptionExpenses(): ConsumptionExpenses[] | null | undefined;
    set revenueAndProfit(revenueAndProfit: RevenueAndProfit[] | null | undefined);
    get revenueAndProfit(): RevenueAndProfit[] | null | undefined;
    set maintenance(maintenance: Maintenance[] | null | undefined);
    get maintenance(): Maintenance[] | null | undefined;
}
