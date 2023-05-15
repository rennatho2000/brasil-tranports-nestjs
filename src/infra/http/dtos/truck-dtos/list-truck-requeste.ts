import { IsNotEmpty, IsString } from 'class-validator';

export class GetAllTrucksParams {
  @IsNotEmpty()
  @IsString()
  plate!: string;
}
