import { IsNotEmpty } from 'class-validator';

export class CreateMaintenanceBody {
  @IsNotEmpty()
  truckId!: string;

  @IsNotEmpty()
  amountSpent!: number;

  @IsNotEmpty()
  driverId!: string;
}
