import { IsNotEmpty, Length } from 'class-validator';

export class CreateDriverBody {
  @IsNotEmpty()
  truckId!: string;

  @IsNotEmpty()
  @Length(9, 36)
  name!: string;

  @IsNotEmpty()
  salary!: number;
}
