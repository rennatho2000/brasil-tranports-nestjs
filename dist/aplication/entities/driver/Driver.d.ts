import { Maintenance } from '../Maintenance/Maintenance';
import { Name } from './Name';
import { Replace } from 'src/aplication/helpers/Replace';
import { RevenueAndProfit } from '../RevenueAndOrofit/RevenueAndOrofit';
export interface DirverProps {
    name: Name;
    salary: number;
    createdAt: Date;
    truckId: string;
    revenueAndProfit?: RevenueAndProfit[] | null | undefined;
    maintenance?: Maintenance[] | null | undefined;
}
export declare class Driver {
    private _id;
    private props;
    constructor(props: Replace<DirverProps, {
        createdAt?: Date;
    }>, _id?: string);
    get id(): string;
    set name(name: Name);
    get name(): Name;
    set salary(salary: number);
    get salary(): number;
    set createdAt(createdAt: Date);
    get createdAt(): Date;
    set truckId(truckId: string);
    get truckId(): string;
    set revenueAndProfit(revenueAndProfit: RevenueAndProfit[] | null | undefined);
    get revenueAndProfit(): RevenueAndProfit[] | null | undefined;
    set maintenance(maintenance: Maintenance[] | null | undefined);
    get maintenance(): Maintenance[] | null | undefined;
}
