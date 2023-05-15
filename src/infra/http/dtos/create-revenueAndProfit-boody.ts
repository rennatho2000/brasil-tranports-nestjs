import { IsNotEmpty } from 'class-validator';

export class CreateRevenueAndProfitBody {
  @IsNotEmpty()
  revenue!: number;

  @IsNotEmpty()
  spent!: number;

  @IsNotEmpty()
  expendableCost!: number;

  @IsNotEmpty()
  profit!: number;

  @IsNotEmpty()
  wastedProfit!: number;

  @IsNotEmpty()
  truckId!: string;

  @IsNotEmpty()
  driverId!: string;
}
