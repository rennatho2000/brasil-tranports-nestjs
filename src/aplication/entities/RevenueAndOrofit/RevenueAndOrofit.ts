import { randomUUID } from 'crypto';
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

export class RevenueAndProfit {
  private _id: string;
  private props: RevenueAndProfitProps;

  constructor(props: Replace<RevenueAndProfitProps, { createdAt?: Date }>) {
    this._id = randomUUID();
    this.props = {
      ...props,
      createdAt: props.createdAt ?? new Date(),
    };
  }
  public get id() {
    return this._id;
  }

  public get revenue(): number {
    return this.props.revenue;
  }

  public set spent(spent: number) {
    this.props.spent = spent;
  }

  public get spent(): number {
    return this.props.spent;
  }
  public set expendableCost(expendableCost: number) {
    this.props.expendableCost = expendableCost;
  }

  public get expendableCost(): number {
    return this.props.expendableCost;
  }

  public set profit(profit: number) {
    this.props.profit = profit;
  }

  public get profit(): number {
    return this.props.profit;
  }
  public set wastedProfit(wastedProfit: number) {
    this.props.wastedProfit = wastedProfit;
  }

  public get wastedProfit(): number {
    return this.props.wastedProfit;
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

  public set driverId(driverId: string) {
    this.props.driverId = driverId;
  }

  public get driverId(): string {
    return this.props.driverId;
  }
}
