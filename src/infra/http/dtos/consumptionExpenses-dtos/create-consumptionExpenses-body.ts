import { IsNotEmpty } from 'class-validator';

export class CreateConsumptionExpensesBody {
  @IsNotEmpty()
  spentLiters!: number;

  @IsNotEmpty()
  kmDriven!: number;

  @IsNotEmpty()
  averageConsumption!: number;

  @IsNotEmpty()
  truckId!: string;
}
