import { randomUUID } from 'crypto';
import { Replace } from 'src/aplication/helpers/Replace';

export interface MaintenanceProps {
  amountSpent: number;
  createdAt: Date;
  truckId: string;
  driverId: string;
}
export class Maintenance {
  private _id: string;
  private props: MaintenanceProps;

  constructor(
    props: Replace<MaintenanceProps, { createdAt?: Date }>,
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

  public set amountSpent(amountSpent: number) {
    this.props.amountSpent = amountSpent;
  }

  public get amountSpent(): number {
    return this.props.amountSpent;
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
