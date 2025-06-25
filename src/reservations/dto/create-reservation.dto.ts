import { IsNumber, IsPositive } from 'class-validator';

export class CreateReservationDto {
  @IsNumber()
  @IsPositive()
  numberOfSeats: number;
}
