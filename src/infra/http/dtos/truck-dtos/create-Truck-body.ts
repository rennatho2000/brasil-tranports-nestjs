import { IsNotEmpty } from 'class-validator';

export class CreateTruckBody {
  @IsNotEmpty()
  plate!: string;

  @IsNotEmpty()
  model!: string;

  @IsNotEmpty()
  axes!: number;

  @IsNotEmpty()
  stipulatedAverageConsumption!: number;

  @IsNotEmpty()
  valuePerKmReceived!: number;
}
