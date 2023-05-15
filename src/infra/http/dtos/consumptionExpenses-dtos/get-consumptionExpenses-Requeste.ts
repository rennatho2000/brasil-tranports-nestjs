import { IsDateString, IsNotEmpty, IsString } from 'class-validator';

export class GetConsumptionExpensesParams {
  @IsNotEmpty()
  @IsDateString()
  startDate!: Date;

  @IsNotEmpty()
  @IsDateString()
  endDate!: Date;

  @IsNotEmpty()
  @IsString()
  truckId!: string;
}
