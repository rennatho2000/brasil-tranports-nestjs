import { Injectable } from '@nestjs/common';
import { randomUUID } from 'crypto';
import { Replace } from 'src/aplication/helpers/Replace';

export interface ConsumptionExpensesProps {
  spentLiters: number;
  kmDriven: number;
  averageConsumption: number;
  truckId: string;
  createdAt: Date;
}
@Injectable()
export class ConsumptionExpenses {
  private _id: string;
  private props: ConsumptionExpensesProps;

  constructor(
    props: Replace<ConsumptionExpensesProps, { createdAt?: Date }>,
    _id?: string,
  ) {
    this._id = _id ?? randomUUID();
    this.props = {
      ...props,
      createdAt: props.createdAt ?? new Date(),
    };
  }
  public get id() {
    return this._id;
  }

  public set spentLiters(spentLiters: number) {
    this.props.spentLiters = spentLiters;
  }

  public get spentLiters(): number {
    return this.props.spentLiters;
  }

  public set kmDriven(kmDriven: number) {
    this.props.kmDriven = kmDriven;
  }

  public get kmDriven(): number {
    return this.props.kmDriven;
  }
  public set averageConsumption(averageConsumption: number) {
    this.props.averageConsumption = averageConsumption;
  }

  public get averageConsumption(): number {
    return this.props.averageConsumption;
  }
  public set truckId(truckId: string) {
    this.props.truckId = truckId;
  }

  public get truckId(): string {
    return this.props.truckId;
  }

  public set createdAt(createdAt: Date) {
    this.props.createdAt = createdAt;
  }

  public get createdAt(): Date {
    return this.props.createdAt;
  }
}
