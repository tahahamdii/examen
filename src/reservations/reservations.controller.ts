import { Controller, Post, Delete, Get, Param, UseGuards, Body, Request } from '@nestjs/common';
import { ReservationsService } from './reservations.service';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { RolesGuard } from '../auth/guards/roles.guard';
import { Roles } from '../auth/decorators/roles.decorator';
import { Role } from '../users/enums/role.enum';
import { CreateReservationDto } from './dto/create-reservation.dto';

@Controller('reservations')
export class ReservationsController {
  constructor(private readonly reservationsService: ReservationsService) {}

  @Post(':eventId')
  @UseGuards(JwtAuthGuard)
  async create(
    @Param('eventId') eventId: string,
    @Body() createReservationDto: CreateReservationDto,
    @Request() req,
  ) {
    return this.reservationsService.create(eventId, req.user._id, createReservationDto.numberOfSeats);
  }

  @Delete(':id')
  @UseGuards(JwtAuthGuard)
  async remove(@Param('id') id: string) {
    return this.reservationsService.remove(id);
  }

  @Get()
  @UseGuards(JwtAuthGuard)
  @Roles(Role.Admin)
  async findAll() {
    return this.reservationsService.findAll();
  }

  @Get('user')
  @UseGuards(JwtAuthGuard)
  async findByUser(@Request() req) {
    return this.reservationsService.findByUser(req.user._id);
  }
}
