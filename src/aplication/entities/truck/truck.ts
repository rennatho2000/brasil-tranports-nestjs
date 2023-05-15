import { ConsumptionExpenses } from '../consumptionExpenses/ConsumptionExpenses';
import { Driver } from '../driver/Driver';
import { Maintenance } from '../Maintenance/Maintenance';
import { Axes } from './axes';
import { Replace } from 'src/aplication/helpers/Replace';
import { randomUUID } from 'crypto';
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

export class Truck {
  private _id: string;
  private props: TruckProps;

  constructor(
    props: Replace<
      TruckProps,
      {
        createdAt?: Date;
        driver?: Driver[];
        consumptionExpenses?: ConsumptionExpenses[];
        revenueAndProfit?: RevenueAndProfit[];
        maintenance?: Maintenance[];
      }
    >,
    id?: string,
  ) {
    this._id = id ?? randomUUID();
    this.props = {
      ...props,
      createdAt: props.createdAt ?? new Date(),
      driver: props.driver,
      consumptionExpenses: props.consumptionExpenses,
      revenueAndProfit: props.revenueAndProfit,
      maintenance: props.maintenance,
    };
  }
  public get id(): string {
    return this._id;
  }

  public set model(model: string) {
    this.props.model = model;
  }
  public get model(): string {
    return this.props.model;
  }

  public set plate(plate: string) {
    this.props.plate = plate;
  }
  public get plate(): string {
    return this.props.plate;
  }

  public set axes(axes: Axes) {
    this.props.axes = axes;
  }
  public get axes(): Axes {
    return this.props.axes;
  }

  public set stipulatedAverageConsumption(
    stipulatedAverageConsumption: number,
  ) {
    this.props.stipulatedAverageConsumption = stipulatedAverageConsumption;
  }
  public get stipulatedAverageConsumption(): number {
    return this.props.stipulatedAverageConsumption;
  }

  public set valuePerKmReceived(valuePerKmReceived: number) {
    this.props.valuePerKmReceived = valuePerKmReceived;
  }
  public get valuePerKmReceived(): number {
    return this.props.valuePerKmReceived;
  }

  public set createdAt(createdAt: Date) {
    this.props.createdAt = createdAt;
  }
  public get createdAt(): Date {
    return this.props.createdAt;
  }

  public set driver(driver: Driver[] | null | undefined) {
    this.props.driver = driver;
  }
  public get driver(): Driver[] | null | undefined {
    return this.props.driver;
  }

  public set consumptionExpenses(
    consumptionExpenses: ConsumptionExpenses[] | null | undefined,
  ) {
    this.props.consumptionExpenses = consumptionExpenses;
  }
  public get consumptionExpenses(): ConsumptionExpenses[] | null | undefined {
    return this.props.consumptionExpenses;
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
