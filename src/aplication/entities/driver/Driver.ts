import { randomUUID } from 'crypto';
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

export class Driver {
  private _id: string;
  private props: DirverProps;

  constructor(props: Replace<DirverProps, { createdAt?: Date }>, _id?: string) {
    this._id = _id ?? randomUUID();
    this.props = {
      ...props,
      createdAt: props.createdAt ?? new Date(),
    };
  }
  public get id() {
    return this._id;
  }

  public set name(name: Name) {
    this.props.name = name;
  }

  public get name(): Name {
    return this.props.name;
  }

  public set salary(salary: number) {
    this.props.salary = salary;
  }

  public get salary(): number {
    return this.props.salary;
  }
  public set createdAt(createdAt: Date) {
    this.props.createdAt = createdAt;
  }

  public get createdAt(): Date {
    return this.props.createdAt;
  }

  public set truckId(truckId: string) {
    this.props.truckId = truckId;
  }

  public get truckId(): string {
    return this.props.truckId;
  }

  public set revenueAndProfit(
    revenueAndProfit: RevenueAndProfit[] | null | undefined,
  ) {
    this.props.revenueAndProfit = revenueAndProfit;
  }

  public get revenueAndProfit(): RevenueAndProfit[] | null | undefined {
    return this.props.revenueAndProfit;
  }

  public set maintenance(maintenance: Maintenance[] | null | undefined) {
    this.props.maintenance = maintenance;
  }
  public get maintenance(): Maintenance[] | null | undefined {
    return this.props.maintenance;
  }
}
